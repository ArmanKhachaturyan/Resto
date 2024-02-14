// Import required modules
const express = require('express');
const path = require('path');
const restoControlers = require('./controllers/restoControllers')
const mongoose = require('mongoose');
const MenuItems = require('./models/Schema');
// const img = require("./models/imgSchema")


// Create an Express application
const app = express();
const db = require('./models/db')

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory for views
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));
// Connect to MongoDB
mongoose.connect('mongodb+srv://armankhachaturians:arm9803.@cluster0.c8dl5vs.mongodb.net/resto_Menu')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));
app.get('/', (req, res) => {
    res.redirect('/resto'); // Redirect to the "/home" route
});
app.get('/resto', restoControlers.getRestoMenu)
app.get('/pizzas:id', restoControlers.getRestoDetails)
app.get('/pizzas', restoControlers.getMenuPizza);


// Start the server
db();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});