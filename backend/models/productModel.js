// Dependencies
import mongoose from 'mongoose';

//Product Model
const Product = mongoose.model(
    'Product',
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 255,
        },
        image: String,
        price: { type: Number, required: true, min: 0 },
        qtyInStock: { type: Number, required: true, min: 0 },
        description: { type: String, required: true },
        tags: [String],
        date: { type: Date, default: Date.now },
        // IsPublished: { type: Boolean, default: false },
    })
);

export default Product;
