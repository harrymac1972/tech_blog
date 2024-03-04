
const { User } = require('../models');


const userData = [
  {
    username: 'superman',
    email: 'superman@superman.com',
    password: 'pass_superman',
  },
  {
    username: 'spiderman',
    email: 'spiderman@spiderman.com',
    password: 'pass_spiderman',
  },
  {
    username: 'batman',
    email: 'batman@batman.com',
    password: 'pass_batman',
  },
  {
    username: 'hulk',
    email: 'hulk@hulk.com',
    password: 'pass_hulk',
  },
];


const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;