import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Cart from './Cart';
import Login from './Login';
import Navigation from './Navigation';
import ProductsList from './admin/ProductsList';
import CreateProduct from './admin/CreateProduct';

function Home() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route
                    path="/store/admin/products/new"
                    element={<CreateProduct />}
                />
                <Route
                    path="/store/admin/products"
                    element={<ProductsList />}
                />
                <Route path="store/products" element={<Products />} />
                <Route path="store/about" element={<About />} />
                <Route path="store/contact" element={<Contact />} />
                <Route path="store/login" element={<Login />} />
                <Route path="store/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default Home;