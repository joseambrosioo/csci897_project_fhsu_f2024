const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    image: String,
    type: String,
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number,
}, {
    timeStamps: true
});


module.exports = mongoose.model('Product', ProductSchema);

