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

});
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem