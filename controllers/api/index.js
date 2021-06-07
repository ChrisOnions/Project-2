const router = require('express').Router();
const userRoutes = require('./users');
const category = require('./category');
// const foodRoutes = require('./foodItemRoutes');

// router.use('/food', foodRoutes);
router.use('/users', userRoutes);
router.use('/category', category)

module.exports = router;