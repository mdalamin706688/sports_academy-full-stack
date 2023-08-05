const Enrollment = require('../models/Enrollment');

const enrollUserInClass = async (req, res) => {
  try {
    const { userId } = req;
    const { classId } = req.params;
    const { instructorId } = req.body; // Assuming the instructorId is sent in the request body

    // Check if the user is already enrolled in the class
    const existingEnrollment = await Enrollment.findOne({ user: userId, class: classId });
    if (existingEnrollment) {
      return res.status(400).json({ error: 'User is already enrolled in the class' });
    }

    // Create a new enrollment record
    const newEnrollment = await Enrollment.create({
      user: userId,
      class: classId,
      //instructor: instructorId, // Add the instructorId to the enrollment record
    });

    res.status(201).json(newEnrollment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to enroll user in class' });
  }
};

module.exports = { enrollUserInClass };

