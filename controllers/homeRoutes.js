
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require("../utils/auth");


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

router.get("/post/:id", async (req, res) => {
  try {
    const postObjs = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"]
        },
        {
          model: Comment,
          include: [
            { model: User, 
              attributes: ["username"] }],
        },
      ],
    });
    const post = postObjs.get({ plain: true });
    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;