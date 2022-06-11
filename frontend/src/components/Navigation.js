//imports
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <header>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="dark"
                className="bg-main"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/store/home" className="logo">
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
                            <Nav.Item eventKey={1}>
                                <Nav.Link as={Link} to="/store/home">
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item eventKey={1}>
                                <Nav.Link as={Link} to="/store/products">
                                    Products
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item eventKey={1}>
                                <Nav.Link as={Link} to="/store/about">
                                    About
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item eventKey={1}>
                                <Nav.Link as={Link} to="/store/contact">
                                    Contact
                                </Nav.Link>
                            </Nav.Item>

                            <NavDropdown title="Admin" id="basic-nav-dropdown">
                                <NavDropdown.Item
                                    as={Link}
                                    to="/store/admin/products"
                                >
                                    Products
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    as={Link}
                                    to="/store/admin/products/new"
                                >
                                    Create Product
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item eventKey={1}>
                                <Nav.Link as={Link} to="/store/login">
                                    Login
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item eventKey={1}>
                                <Nav.Link as={Link} to="/store/cart">
                                    <BsCart3 style={{ color: '#ffc300' }} />{' '}
                                    <span>0</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
export default Navigation;
