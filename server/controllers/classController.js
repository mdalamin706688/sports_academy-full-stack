const Class = require('../models/Class');

const getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const createClass = async (req, res) => {
  try {
    const { name, instructor, seats, price } = req.body;

    // Create the class
    const newClass = await Class.create({
      name,
      instructor,
      seats,
      price,
    });

    res.status(201).json(newClass);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getClasses,
  createClass,
};
