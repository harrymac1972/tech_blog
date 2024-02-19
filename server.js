
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware "middle JUS"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    });
});
