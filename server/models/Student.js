const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: 'student',
  },
  instructorId: { // Add the instructorId field
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instructor', // Replace 'Instructor' with the actual name of the Instructor model if you have one
  },
  classId: { // Add the classId field
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class', // Replace 'Class' with the actual name of the Class model if you have one
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
