// Import required modules
const express = require('express');
const path = require('path');
const restoControlers = require('./controllers/restoControllers')
const mongoose = require('mongoose');
const MenuItems = require('./models/Schema');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
const db = require('./models/db')
app.use(bodyParser.urlencoded({ extended: true }));

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
app.post('/pizzas/:id/favorite', restoControlers.pizaaFavoritesAdd)
app.post('/pizzas/:id/unfavorite', restoControlers.pizaaFavoritesRemove)
app.get("/description/:id", restoControlers.getDescription)
app.post("/description/:id/addNote", restoControlers.postTextarea)
    // Start the server
db();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});