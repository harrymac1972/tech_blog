
const router = require('express').Router();
const { Post, User } = require('../models');


router.get('/', async (req, res) => {
  try {
    const postObjs = await Post.findAll({
      include: [{
          model: User,
          attributes: ['username'],
      },],
    });

    const posts = postObjs.map((post) => post.get({ plain: true }));

    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;