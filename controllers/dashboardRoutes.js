
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const isAuth = require('../utils/isAuth');


// Dashboard posts
router.get('/', isAuth, async (req, res) => {
  try {
    const postObjs = await Post.findAll({
      where: { 
        user_id: req.session.user_id 
      },
      include: [
        { 
          model: User, 
          attributes: ['username'] 
        }
      ],
    });
    const posts = postObjs.map((post) => post.get({ plain: true }));
    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render form
router.get('/new-post', isAuth, (req, res) => {
  res.render('newPost', {
    logged_in: req.session.logged_in,
  });
});

// Handle new post
router.post('/new-post', isAuth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await Post.create({
      title,
      content,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
