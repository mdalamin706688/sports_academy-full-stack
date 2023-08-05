const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getClasses, createClass } = require('../controllers/classController');

const router = express.Router();

router.get('/', getClasses);
router.post('/', protect, createClass);

module.exports = router;
