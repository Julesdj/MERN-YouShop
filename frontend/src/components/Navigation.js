//imports
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';

function Navigation() {
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="dark"
                className="bg-main"
            >
                <Container>
                    <Navbar.Brand
                        href="/home"
                        style={{
                            color: '#ffc300',
                            fontSize: '50px',
                            fontWeight: 'bold',
                        }}
                    >
                        YouShop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <InputGroup
                                style={{ height: '45px', marginTop: '10px' }}
                            >
                                <FormControl
                                    placeholder="Search products"
                                    aria-label="search"
                                />
                                <Button
                                    variant="outline-secondary"
                                    id="button-addon2"
                                    className="bg-accent"
                                >
                                    <FaSearch
                                        style={{
                                            height: '30px',
                                            width: '30px',
                                        }}
                                    />
                                </Button>
                            </InputGroup>
                        </Nav>
                        <Nav className="nav-link">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#login">Login</Nav.Link>
                            <Nav.Link href="#cart-page">
                                <BsCart3 style={{ color: '#ffc300' }} />{' '}
                                <span>0</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Navigation;
