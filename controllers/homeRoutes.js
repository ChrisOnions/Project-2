const { foodItems, user, foodCategory, foodBank } = require('../models');
const withAuth = require('../utils/auth');
const daysUntilExpired = require('../utils/daysUntilExpired');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const foodItemData = await foodItems.findAll({ raw: true });
    // Add in {user_id: } to show only  items for currently logged in user
   
    res.render('home', {
      logged_in: req.session.logged_in,
      foodItems: foodItemData.map((item) => {
        const expiresIn = daysUntilExpired(item.expiryDate);

        item.expiresIn = expiresIn;

        return item;
      }),
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/login', (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }

    res.render('login');
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup', {
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(400).json(err);
  }
})

router.get('/logout', withAuth, async (req, res) => {
  try {
    res.render('logout')
  } catch (err) {
    res.status(400).json(err);
  }
})


router.get("/dashboard", withAuth, async (req, res) => {
  try {
    dashData = await user.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: foodItems }],
    });
    const dashDataPlain = dashData.get({ plain: true });

    console.log(dashDataPlain);
    res.render('dashboard', {
      dashDataPlain,
      logged_in: req.session.logged_in,
      isexpandable: req.session.isexpandable,
    });
  } catch (err) {
    //display modal?
    res.status(400).json(err)

  }
});

router.get('/cart', withAuth, async (req, res) => {
  try {
    const cartData = await foodItems.findAll({
      order: [['name', 'ASC']]
    })
    const cart = cartData.map((data) => data.get(
      { plain: true }));
    //cart
    const catData = await foodCategory.findAll({
      order: [['name', 'ASC']]
    })
    const category = catData.map((data) => data.get(
      { plain: true }));
    res.render('cart', {
      category,
      cart,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(400).json(err);
  }
})

router.get('/Donate', withAuth, async (req, res) => {
  try {
    const foodbank = await foodBank.findAll({
      order: [['name', 'ASC']]
    })
    const locations = foodbank.map((data) => data.get(
      { plain: true }));

    res.render('donate', {
      locations,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(400).json(err);
  }
})
// Last route
router.get('*', async (req, res) => {
  try {
    res.render('404')
  } catch (err) {
    res.status(400).json(err);
  }
})


module.exports = router;
