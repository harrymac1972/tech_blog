
const userSeeds = require('./userSeeds');
const postSeeds = require('./postSeeds');
const commentSeeds = require('./commentSeeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await userSeeds();
    console.log('\n----- USERS SEEDED -----\n');
    await postSeeds();
    console.log('\n----- POSTS SEEDED -----\n');
    await commentSeeds();
    console.log('\n----- COMMENTS SEEDED -----\n');
    process.exit(0);
};


seedAll();