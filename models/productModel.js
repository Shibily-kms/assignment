const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    quantity: [],
    quaType: String,

},
    {
        timestamps: true
    })

const ProductModel = mongoose.model('product', productSchema)
module.exports = ProductModel