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
import ProductPage from './ProductPage';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Footer from './Footer';

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
                <Route path="store/products/:id" element={<ProductPage />} />
                <Route path="store/products" element={<Products />} />
                <Route path="store/about" element={<About />} />
                <Route path="store/contact" element={<Contact />} />
                <Route path="store/login" element={<Login />} />
                <Route path="store/cart" element={<Cart />} />
            </Routes>
            <Container>
                <Row>
                    <Col>
                    <Card>
                        <Card.Img src="/onlineShopping.jpg" alt="person shopping"/>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>YouShop</Card.Title>
                            <Card.Text>Your #1 Chioce For Online Shopping!</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default Home;
