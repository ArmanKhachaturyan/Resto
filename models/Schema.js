const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        menu: Object
    },
    is_available: {
        type: Boolean,
        default: true
    },
    menu: [{
        id: Number,
        imageUrl: String,
        title: String,
        types: [{
            name: String,
            sizes: [{
                name: String,
                price: Number,
                rating: Number,
            }]
        }]
    }]

});
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem