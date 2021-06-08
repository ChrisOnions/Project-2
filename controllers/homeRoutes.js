const { foodItems, user, foodCategory, foodBank } = require("../models");
const withAuth = require("../utils/auth");
const daysUntilExpired = require("../utils/daysUntilExpired");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const foodItemData = await foodItems.findAll({ raw: true });
    // Add in {user_id: } to show only  items for currently logged in user
    console.log(foodItemData);

    res.render("home", {
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
});
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup", {
    logged_in: req.session.logged_in,
  });
});

router.get("/logout", withAuth, async (req, res) => {
  res.render("logout");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    dashData = await user.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: foodItems }],
    });
    const dashDataPlain = dashData.get({ plain: true });

    res.render("dashboard", {
      dashDataPlain,
      logged_in: req.session.logged_in,
      isexpandable: req.session.isexpandable,
    });
  } catch (err) {
    //display modal?
    res.status(404).json(err);
  }
});

router.get("/cart", withAuth, async (req, res) => {
  //Cart
  const cartData = await foodItems.findAll({
    order: [["name", "ASC"]],
  });
  const cart = cartData.map((data) => data.get({ plain: true }));
  //cart
  const catData = await foodCategory.findAll({
    order: [["name", "ASC"]],
  });
  const category = catData.map((data) => data.get({ plain: true }));
  res.render("cart", {
    category,
    cart,
    logged_in: req.session.logged_in,
  });
});

router.get("/Donate", withAuth, async (req, res) => {
  const foodbank = await foodBank.findAll({
    order: [["name", "ASC"]],
  });
  const locations = foodbank.map((data) => data.get({ plain: true }));
  console.log(locations);
  res.render("donate", {
    locations,
    logged_in: req.session.logged_in,
  });
});
// Last route
router.get("*", async (req, res) => {
  res.render("404");
});

module.exports = router;
