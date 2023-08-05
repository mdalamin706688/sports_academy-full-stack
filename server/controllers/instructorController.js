const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
const Instructor = require('../models/Instructor');
const Class = require('../models/Class')

const instructorSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the instructor
    const instructor = await Instructor.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign({ instructorId: instructor._id }, JWT_SECRET);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const instructorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the instructor exists
    const instructor = await Instructor.findOne({ email });
    if (!instructor) {
      return res.status(404).json({ error: 'Instructor not found' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, instructor.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ instructorId: instructor._id }, JWT_SECRET);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const addInstructorClass = async (req, res) => {
  try {
    const { instructorId, name, seats, price } = req.body;

    // Create the class with instructorId
    const newClass = new Class({ instructor: instructorId, name, seats, price, status: 'pending' });
    const savedClass = await newClass.save();

    res.status(201).json(savedClass);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add instructor class' });
  }
};

const getInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const getInstructorClasses = async (req, res) => {
  try {
    const instructorId = req.instructorId;

    // Find all classes by the instructorId
    const classes = await Class.find({ instructor: instructorId });

    res.json(classes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const getInstructorById = async (req, res) => {
  try {
    const { instructorId } = req.params;

    // Find the instructor by instructorId
    const instructor = await Instructor.findById(instructorId);

    if (!instructor) {
      return res.status(404).json({ error: 'Instructor not found' });
    }

    res.json(instructor);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};





const deleteClass = async (req, res) => {
  try {
    const { classId } = req.params;

    // Delete the class by classId
    const deletedClass = await Class.findOneAndDelete({
      _id: classId,
      instructor: req.instructorId,
    });

    if (!deletedClass) {
      return res.status(404).json({ error: 'Class not found' });
    }

    res.json({ message: 'Class deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const updateClass = async (req, res) => {
  try {
    const { classId } = req.params;
    const { name, seats, price, status } = req.body;

    // Find the class by classId
    const updatedClass = await Class.findByIdAndUpdate(
      classId,
      { name, seats, price, status },
      { new: true }
    );

    if (!updatedClass) {
      return res.status(404).json({ error: 'Class not found' });
    }

    res.json(updatedClass);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update class' });
  }
};

module.exports = {
  instructorSignup,
  instructorLogin,
  addInstructorClass,
  getInstructors,
  getInstructorById, // Add the new function here
  getInstructorClasses,
  deleteClass,
  updateClass
};
