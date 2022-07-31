import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Cart from './Cart';
import Login from './Login';

import ProductsList from './admin/ProductsList';
import CreateProduct from './admin/CreateProduct';
import ProductPage from './ProductPage';
// import Container from 'react-bootstrap/esm/Container';

import UpdateProduct from './admin/UpdateProduct';
import Layout from './Layout';

function Home() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route
                        path="/store/admin/products/new"
                        element={<CreateProduct />}
                    />
                    <Route
                        path="/store/admin/products/edit"
                        element={<UpdateProduct />}
                    />
                    <Route
                        path="/store/admin/products"
                        element={<ProductsList />}
                    />
                    <Route
                        path="store/products/:id"
                        element={<ProductPage />}
                    />
                    <Route path="store/products" element={<Products />} />
                    <Route path="store/about" element={<About />} />
                    <Route path="store/contact" element={<Contact />} />
                    <Route path="store/login" element={<Login />} />
                    <Route path="store/cart" element={<Cart />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default Home;
