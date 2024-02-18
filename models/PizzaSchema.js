const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    id: Number,
    imageUrl: String,
    title: String,
    types: [Number],
    sizes: [Number],
    price: Number,
    rating: Number,
    isFavorite: Boolean,
    description: [String],
    textarea: String,
    notes: [String]

});

const Pizzas = mongoose.model('PizzaSchema', PizzaSchema);
module.exports = Pizzas