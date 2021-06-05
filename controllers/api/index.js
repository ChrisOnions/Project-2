const router = require('express').Router();
const userRoutes = require('./users');
// const foodRoutes = require('./foodItemRoutes');

// router.use('/food', foodRoutes);
router.use('/users', userRoutes);

module.exports = router;