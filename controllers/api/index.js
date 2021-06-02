const router = require('express').Router();
const foodRoutes = require('./foodItemRoutes');

router.use('/food', foodRoutes);

module.exports = router;