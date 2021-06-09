const router = require("express").Router();
const User = require("../../models/user");

// C.R.U.D

// http://localhost:3001/api/users/
// Create user
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = (
      await User.create({
        name,
        email,
        password,
      })
    ).get({ plain: true });

    if (user) {
      req.session.save(() => {
        req.session.user_id = user.id;
        req.session.logged_in = true;
        res.status(200).json({ email, name });
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/users/login
// Read
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    // .get({ plain: true }) should not be included here as we need the full model to run the checkPassword

    if (!user) {
      res
        .status(401)
        .send({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await user.checkPassword(password);

    if (!validPassword) {
      res
        .status(401)
        .send({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;

      res.status(200).json({ email, name: user.name });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/users/logout
router.delete("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(500).end();
  }
});
// Update
// Delete

// Display user Data

module.exports = router;
