
const router = require('express').Router();
const { Post } = require('../../models');
const isAuth = require('../../utils/isAuth');


// Create
router.post('/',async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;