import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function CreateProduct() {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const [price, setPrice] = useState(0);
    const [qtyInStock, setQtyInStock] = useState(0);

    //form Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post('/api/products', {
                name,
                image,
                description,
                tags,
                price,
                qtyInStock,
            });
            console.log(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div style={{ padding: '1.5rem' }}>
            <Container>
                <Card>
                    <Card.Header className="mb-4">
                        Fill up the form to create a new Product
                    </Card.Header>
                    <Card.Body>
                        <Form
                            encType="multipart/form-data"
                            onSubmit={handleSubmit}
                        >
                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs={12}
                                    md={6}
                                    className="mb-3"
                                    controlId="name"
                                >
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Give your product a Name"
                                        required
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    xs={12}
                                    md={6}
                                    controlId="image"
                                >
                                    <Form.Label>Product Image</Form.Label>
                                    <Form.Control
                                        type="text"
                                        required
                                        onChange={(e) =>
                                            setImage(e.target.value)
                                        }
                                    />
                                    <Form.Text className="text-muted">
                                        Paste in the full path to your image
                                    </Form.Text>
                                </Form.Group>
                            </Row>

                            <Form.Group
                                className="mb-3"
                                controlId="description"
                            >
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Write a cool description for your product"
                                    style={{ height: '100px' }}
                                    required
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="tags">
                                <Form.Label>Add Tags</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Optional, Commas separated"
                                    onChange={(e) => setTags(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                    Exp: Sale, New, Hot.
                                </Form.Text>
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group
                                    as={Col}
                                    xs={12}
                                    md={6}
                                    className="mb-3"
                                    controlId="price"
                                >
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="Number"
                                        min="0"
                                        step="0.01"
                                        required
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                    />
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    xs={12}
                                    md={6}
                                    className="mb-3"
                                    controlId="qtyInStock"
                                >
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control
                                        type="Number"
                                        min="0"
                                        required
                                        onChange={(e) =>
                                            setQtyInStock(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>

                            <Button
                                variant="dark"
                                type="submit"
                                size="lg"
                                style={{
                                    width: '100%',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                }}
                                className="bg-accent"
                            >
                                Create
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default CreateProduct;
