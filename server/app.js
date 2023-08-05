const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const classRoutes = require('./routes/classRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const dotenv = require('dotenv');
const { testStripeConnection } = require('./controllers/userController');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Add CORS middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/instructors', instructorRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/admin', adminRoutes);

// Test Stripe API connection
testStripeConnection();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
