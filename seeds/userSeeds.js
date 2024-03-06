
const { User } = require('../models');


const userObjs = [
  {
    username: 'superman',
    email: 'superman@superman.com',
    password: 'password1234',
  },
  {
    username: 'spiderman',
    email: 'spiderman@spiderman.com',
    password: 'password1234',
  },
  {
    username: 'batman',
    email: 'batman@batman.com',
    password: 'password1234',
  },
  {
    username: 'hulk',
    email: 'hulk@hulk.com',
    password: 'password1234',
  },
];


const userSeeds = () => User.bulkCreate(userObjs, {individualHooks: true});

module.exports = userSeeds;