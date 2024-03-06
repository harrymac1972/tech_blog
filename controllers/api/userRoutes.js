
const router = require('express').Router();
const { User } = require('../../models');


// user registration
router.post('/', async (req, res) => {
  try {
    const userObjs = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userObjs.id;
      req.session.logged_in = true;
      res.status(200).json(userObjs);
      res.redirect('/');
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// user login
router.post('/login', async (req, res) => {
  try {
    const userObjs = await User.findOne({ where: { email: req.body.email } });
    if (!userObjs) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password.' });
        return;
      }  
      const validPassword = await userObjs.checkPassword(req.body.password);  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password.' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userObjs.id;
        req.session.logged_in = true;  
        res.json({ user: userObjs, message: 'LogIn succeeded.' });
        res.redirect('/');
      });  
    } catch (err) {
      res.status(400).json(err);
    }
  });

// user logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  
  module.exports = router;