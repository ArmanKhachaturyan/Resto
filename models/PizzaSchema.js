const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    id: Number,
    imageUrl: String,
    title: String,
    types: [Number],
    sizes: [Number],
    price: Number,
    category: Number,
    rating: Number
});

const Pizzas = mongoose.model('PizzaSchema', PizzaSchema);
module.exports = Pizzas