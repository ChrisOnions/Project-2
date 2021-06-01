const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/login', async (req, res) => {

  // if (req.session.logged_in) {
  //   res.render('login')
  //   return
  // } else { res.redirect('/home') }
  res.render('login')
})

module.exports = router;