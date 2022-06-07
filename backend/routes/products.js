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

//Create a new product
products.post('/', async (req, res) => {
    //ToDo: Data validation
    let product = new Product({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        qtyInStock: req.body.qtyInStock,
        description: req.body.description,
        tags: req.body.tags,
    });

    product = await product.save();
    res.send(product);
});

//Get single product
products.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);

    //If not existing, return 404
    if (!product)
        res.status(404).send('The product with the given Id was not found');
    res.send(product);
});

//Update a product
products.put('/:id', async (req, res) => {
    //look up the product
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            qtyInStock: req.body.qtyInStock,
            description: req.body.description,
            tags: req.body.tags,
        },
        { new: true } //The new attribute is used to get the updated product from the db
    );

    //If not existing, return 404
    if (!product)
        res.status(404).send('The product with the given Id was not found');
    res.send(product);
});

//Delete a product
products.delete('/:id', async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    //If not existing, return 404
    if (!product)
        res.status(404).send('The product with the given Id was not found');
    res.send('Product deleted successfully');
});

export default products;
