const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");
const User = require("../models/User");
const Enrollment = require("../models/Enrollment");
const dotenv = require("dotenv");
const Class = require('../models/Class');
const Instructor = require('../models/Instructor');
const Student = require('../models/Student');



dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Function to test the connection to Stripe API
const testStripeConnection = async () => {
  try {
    const customers = await stripe.customers.list();
    console.log(customers);
    console.log("Stripe API connection successful");
  } catch (error) {
    console.error("Failed to connect to Stripe API:", error.message);
  }
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

const getEnrollmentStatus = async (req, res) => {
  try {
    const { userId } = req; // Assuming you're using the updated authentication middleware to set req.userId

    // Find the enrollment for the user
    const enrollment = await Enrollment.findOne({ user: userId });

    if (!enrollment) {
      return res.status(404).json({ error: "Enrollment not found" });
    }

    // Retrieve the payment status from the enrollment
    const paymentStatus = enrollment.paymentStatus;

    res.json({ paymentStatus });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve enrollment status" });
  }
};

const addEnrollment = async (req, res) => {
  try {
    const { userId } = req; // Assuming you've extracted the user ID from the token during the authentication process
    const { class: classId, instructor: instructorId, paymentMethodId, email } = req.body;

    // Check if the user has already enrolled in the same class
    const existingEnrollment = await Enrollment.findOne({ user: userId, class: classId });

    if (existingEnrollment) {
      return res.status(400).json({ error: "You have already enrolled in this class" });
    }

    // Create a customer with Stripe
    const customer = await stripe.customers.create({
      email: email, // Assuming the email is provided in the request body
      payment_method: paymentMethodId,
    });

    // Create a payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Amount in cents, adjust as needed
      currency: "usd",
      customer: customer.id,
      payment_method: paymentMethodId,
    });

    // Confirm the payment intent
    const confirmedPaymentIntent = await stripe.paymentIntents.confirm(
      paymentIntent.id
    );

    // Update the enrollment status as paid
    const enrollment = new Enrollment({
      user: userId,
      class: classId,
      instructor: instructorId, // Assuming you want to store the instructor ID only
      paymentIntentId: confirmedPaymentIntent.id,
      paymentStatus: "paid",
    });

    const savedEnrollment = await enrollment.save();

    res.status(201).json(savedEnrollment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add enrollment" });
  }
};



const updateUser = async (req, res) => {
  try {
    const { userId } = req // Assuming you're using authentication middleware to extract the user ID
    const { name, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

const getPopularClasses = async (req, res) => {
  try {
    const popularClasses = await Student.aggregate([
      {
        $group: {
          _id: '$classId',
          studentsCount: { $sum: 1 }, // Count the number of students for each class
        },
      },
      { $sort: { studentsCount: -1 } }, // Sort the classes based on the number of students in descending order
      { $limit: 6 }, // Get the top 6 popular classes
      {
        $lookup: {
          from: 'classes', // Use the collection name 'classes' for the lookup
          localField: '_id',
          foreignField: '_id',
          as: 'classDetails', // Create a new field 'classDetails' containing the class details
        },
      },
    ]);

    res.json(popularClasses);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const getPopularInstructors = async (req, res) => {
  try {
    const popularInstructors = await Student.aggregate([
      {
        $group: {
          _id: '$instructorId',
          studentsCount: { $sum: 1 }, // Count the number of students for each instructor
        },
      },
      { $sort: { studentsCount: -1 } }, // Sort the instructors based on the number of students in descending order
      { $limit: 6 }, // Get the top 6 popular instructors
      {
        $lookup: {
          from: 'instructors', // Use the collection name 'instructors' for the lookup
          localField: '_id',
          foreignField: '_id',
          as: 'instructorDetails', // Create a new field 'instructorDetails' containing the instructor details
        },
      },
    ]);

    res.json(popularInstructors);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};


module.exports = {
  testStripeConnection,
  getPopularClasses,
  getPopularInstructors,
  signup,
  login,
  getEnrollmentStatus,
  addEnrollment,
  updateUser,
};
