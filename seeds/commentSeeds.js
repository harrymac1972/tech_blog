
const { Comment } = require('../models');


const commentObjs = [
  {
    comment_text: 'Great! Best guide I have ever read.',
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: 'Very helpful. Thanks!',
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: 'Excellent tips! Reading this just made my day so much brighter!',
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: 'Informative post!',
    user_id: 1,
    post_id: 4,
  },
];

const commentSeeds = () => Comment.bulkCreate(commentObjs);

module.exports = commentSeeds;