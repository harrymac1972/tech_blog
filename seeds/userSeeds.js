
const { User } = require('../models');


const userObjs = [
  {
    username: 'superman',
    email: 'superman@superman.com',
    password: 'superman',
  },
  {
    username: 'spiderman',
    email: 'spiderman@spiderman.com',
    password: 'spiderman',
  },
  {
    username: 'batman',
    email: 'batman@batman.com',
    password: 'batman',
  },
  {
    username: 'hulk',
    email: 'hulk@hulk.com',
    password: 'hulk',
  },
];


const userSeeds = () => User.bulkCreate(userObjs, {individualHooks: true});

module.exports = userSeeds;