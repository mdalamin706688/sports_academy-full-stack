const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true }, // Add the instructor field
  paymentIntentId: { type: String, required: true },
  paymentStatus: { type: String, enum: ['paid', 'pending'], default: 'pending' },
  enrollmentDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
