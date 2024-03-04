
const { Post } = require('../models');

const postObjs = [
  {
    title: 'Python 101',
    content: 'Introduction to Python and installation',
    user_id: 1,
  },
  {
    title: 'Python 201',
    content: 'Learn about Python libraries',
    user_id: 2,
  },
  {
    title: 'HTML 101',
    content: 'Discover the base language of the internet',
    user_id: 3,
  },
  {
    title: 'CSS 101',
    content: 'Learn the evolution of styling with an external CSS file',
    user_id: 4,
  },
];

const postSeeds = () => Post.bulkCreate(postObjs);

module.exports = postSeeds;