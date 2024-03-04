
const router = require('express').Router();
const { Post } = require('../../models');
const isAuth = require('../../utils/isAuth');


// Create
router.post('/', isAuth, async (req, res) => {
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

// Update
router.put('/:id', isAuth, async (req, res) => {
    try {
      const [updatedRows] = await Post.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        }
      );
  
      if (updatedRows === 0) {
        res.status(404).json({ message: 'ID missing' });
        return;
      }
  
      res.status(200).json({ message: 'Post updated' });
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;