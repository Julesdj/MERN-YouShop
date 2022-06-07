// Dependencies
import Express from 'express';
import Product from '../models/productModel.js';

//Variables
const products = Express.Router();

//Get the list of products
products.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

export default products;
