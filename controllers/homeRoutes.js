const { foodItems } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('home', {
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err);
  }
})
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', async (req, res) => {

  res.render('signup', {
    logged_in: req.session.logged_in
  })
})

router.get('/logout', withAuth, async (req, res) => {
  res.render('logout')
})

router.get('/dashboard', withAuth, async (req, res) => {
  res.render('dashboard', {
    logged_in: req.session.logged_in
  })
})

router.get('/cart', withAuth, async (req, res) => {
  const cartData = await foodItems.findAll({
    order: [['name', 'ASC']]
  })
  const cart = cartData.map((project) => project.get({ plain: true }));
  console.log(cart);
  res.render('cart', {
    cart,
    logged_in: req.session.logged_in
  })
})

// Last route
router.get('*', async (req, res) => {
  res.render('404')
})


module.exports = router;