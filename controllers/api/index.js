const router = require('express').Router();
const userRoutes = require('./users');
const category = require('./category');
const foodbank = require('./foodbank')
const foodRoutes = require('./foodItemRoutes');

router.use('/food', foodRoutes);
router.use('/bank', foodbank)
router.use('/users', userRoutes);
router.use('/category', category)

module.exports = router;