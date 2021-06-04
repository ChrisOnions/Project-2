const router = require('express').Router();
const User = require('../../models/user');
// create new user via signup
// delete a user
// C.R.U.D

// http://localhost:3001/api/users/
// Create user 
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const userToDb = await User.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = user_id
      console.log(req.session);
      res.status(200).json(userToDb)
    })

  } catch (err) {
    res.status(400).json(err)
    console.log("shit");
  }
})

//http://localhost:3001/api/users/login
// Read
router.post('/login', async (req, res) => {
  try {
    console.log("here?");
    const userData = await User.findOne(
      {
        where: {
          email: req.body.email,
        }
      })

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' })
      return
    }
    console.log(userData);
    const passwordValid = await userData.checkPassword(req.body.password)
    console.log(passwordValid);
    if (!passwordValid) {
      console.log("info?");
      res.status(400).json({ message: 'Incorrect email or password, please try again' })
      return
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });

    });
  } catch (err) {
    res.status(400).json(err);
  }
})

//http://localhost:3001/api/users/logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });

  } else {
    res.status(404).end();
  }
});
// Update
// Delete


module.exports = router;
