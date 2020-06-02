const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    producer: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    date: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);