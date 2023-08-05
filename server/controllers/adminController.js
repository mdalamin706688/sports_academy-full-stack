// controllers/adminController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
const Admin = require('../models/Admin');
const Instructor = require('../models/Instructor');
const Class = require('../models/Class');
const Student = require('../models/Student');
const Enrollment = require('../models/Enrollment.js');
//const nodemailer = require('nodemailer');


const adminSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the admin
        const admin = await Admin.create({
            name,
            email,
            password: hashedPassword,
        });

        // Generate JWT token
        const token = jwt.sign({ adminId: admin._id }, JWT_SECRET);

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the admin exists
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign({ adminId: admin._id }, JWT_SECRET);

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

// Instructors
const getInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.find();
        res.json(instructors);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const addInstructor = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const instructor = new Instructor({ name, email, password: hashedPassword });
        const savedInstructor = await instructor.save();

        res.status(201).json(savedInstructor);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add instructor' });
    }
};

const updateInstructor = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const updatedInstructor = await Instructor.findByIdAndUpdate(
            id,
            { name, email },
            { new: true }
        );

        if (!updatedInstructor) {
            return res.status(404).json({ error: 'Instructor not found' });
        }

        res.json(updatedInstructor);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update instructor' });
    }
};

const deleteInstructor = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedInstructor = await Instructor.findByIdAndDelete(id);

        if (!deletedInstructor) {
            return res.status(404).json({ error: 'Instructor not found' });
        }

        res.json({ message: 'Instructor deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete instructor' });
    }
};

// Classes
const getClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        res.json(classes);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const addClass = async (req, res) => {
    try {
        const { name, instructor, seats, price } = req.body;

        const newClass = new Class({ name, instructor, seats, price });
        const savedClass = await newClass.save();

        res.status(201).json(savedClass);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add class' });
    }
};

const updateClass = async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
  
      // Check if the user making the request is an admin
      if (!req.adminId) {
        return res.status(401).json({ error: 'Access denied' });
      }
  
      // Update the class status only if it's currently pending
      if (!['pending', 'approved', 'denied'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
      }
  
      const updatedClass = await Class.findByIdAndUpdate(
        id,
        { status },
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
  
  

const deleteClass = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedClass = await Class.findByIdAndDelete(id);

        if (!deletedClass) {
            return res.status(404).json({ error: 'Class not found' });
        }

        res.json({ message: 'Class deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete class' });
    }
};

// Students
const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const addStudent = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const student = new Student({ name, email, password: hashedPassword });
        const savedStudent = await student.save();

        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add student' });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            { name, email },
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json(updatedStudent);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update student' });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete student' });
    }
};

// Enrollments
const getEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find();
        res.json(enrollments);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const makeStudentInstructor = async (req, res) => {
    try {
      const { studentId } = req.params;
  
      // Find the student by ID and update their role to "instructor"
      const updatedStudent = await Student.findByIdAndUpdate(
        studentId,
        { role: 'instructor' },
        { new: true }
      );
  
      if (!updatedStudent) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      res.json(updatedStudent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to make student an instructor' });
    }
  };
  
  const makeStudentAdmin = async (req, res) => {
    try {
      const { studentId } = req.params;
  
      // Find the student by ID and update their role to "admin"
      const updatedStudent = await Student.findByIdAndUpdate(
        studentId,
        { role: 'admin' },
        { new: true }
      );
  
      if (!updatedStudent) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      res.json(updatedStudent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to make student an admin' });
    }
  };
  




module.exports = {
    adminSignup,
    adminLogin,
    getInstructors,
    addInstructor,
    updateInstructor,
    deleteInstructor,
    getClasses,
    addClass,
    updateClass,
    deleteClass,
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    getEnrollments,
    makeStudentInstructor,
    makeStudentAdmin
};
