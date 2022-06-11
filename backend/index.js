//Dependencies
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Express from 'express';
import products from './routes/products.js';
dotenv.config();

//Connection to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to YouShop Mongo Database ...'))
    .catch((err) => console.error('Could not connect to MongoDB ...'));

//Variables
const app = Express();
const port = process.env.PORT || 3005;

//Middlewares
app.use(Express.json());
app.use(Express.static('./public'));
app.use('/api/products', products);

//Routes
app.get('/api', (req, res) => {
    res.send('You have reached YouShop api');
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
