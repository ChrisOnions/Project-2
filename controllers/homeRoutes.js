const router = require('express').Router();
// const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  res.render('home')
})

router.get('/login', async (req, res) => {

  // if (req.session.logged_in) {
  //   res.render('home')
  //   return
  // } else { res.redirect('/login') }
  res.render('login')
})
router.get('/logout', async (req, res) => {

  // if (req.session.logged_in) {
  //   res.render('signup')
  //   return
  // } else { res.redirect('/login') }
  res.render('logout')
})

router.get('/dashboard', async (req, res) => {

  // if (req.session.logged_in) {
  //   res.render('dashboard')
  //   return
  // } else { res.redirect('/login') }
  res.render('dashboard')
})
router.get('/dashboard', async (req, res) => {

  // if (req.session.logged_in) {
  //   res.render('cart')
  //   return
  // } else { res.redirect('/login') }
  res.render('dashboard')
})


router.get('/cart', async (req, res) => {

  // if (req.session.logged_in) {
  //   res.render('cart')
  //   return
  // } else { res.redirect('/login') }
  res.render('cart')
})
//Last route
router.get('*', async (req, res) => {
  res.render('404')
})


module.exports = router;