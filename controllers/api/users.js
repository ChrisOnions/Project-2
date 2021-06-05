const router = require('express').Router();
const User = require('../../models/user');

// C.R.U.D

// http://localhost:3001/api/users/
// Create user 
router.post('/', async (req, res) => {
  try {
    const userToDb = await User.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

    if (userToDb) {
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = userToDb.id
      })
      res.status(200).json(userToDb)
      res.render('home')
    }
  } catch (err) {
    res.status(400).json(err)
  }
})

//http://localhost:3001/api/users/login
// Read
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne(
      {
        where: {
          email: req.body.email,
        }
      })

    if (!userData) {
      res.status(404).send({ message: "Sorry please sign up" })
      return
    }

    const passwordValid = await userData.checkPassword(req.body.password)

    if (!passwordValid) {
      res.status(400).send({ message: 'Incorrect email or password, please try again' })
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

// Display user Data 



module.exports = router;
