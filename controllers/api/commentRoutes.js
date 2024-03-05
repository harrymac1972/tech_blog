
const router = require('express').Router();
const { Comment } = require('../../models');
const isAuth = require('../../utils/isAuth');


// Create comment
router.post('/', isAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.body.post_id
      });
  
      res.status(201).json(newComment);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'No comment created' });
    }
  });
  
  
  module.exports = router;