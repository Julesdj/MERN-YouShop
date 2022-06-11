//imports
import React from 'react';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Footer() {
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
export default Footer;
 