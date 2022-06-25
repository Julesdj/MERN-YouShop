import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Store } from '../context/reactContext/store';
import { Link, useNavigate } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { TbMinus, TbPlus } from 'react-icons/tb';
import axios from 'axios';

function Cart() {
    const { state, dispatch } = useContext(Store);
    const navigate = useNavigate();
    const {
        cart: { cartItems },
    } = state;

    const updateCartHandler = async (item, quantity) => {
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (data.qtyInStock < quantity) {
            window.alert('Sorry, the product is out of stock');
            return;
        }
        dispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...item, quantity },
        });
    };

    const removeItemHandler = (item) => {
        dispatch({
            type: 'CART_REMOVE_ITEM',
            payload: item,
        });
    };

    const checkoutHandler = () => {
        navigate('/store/checkout');
    };
    return (
        <div className="cart">
            <Container>
                <h1>Shopping Cart</h1>
                <Row>
                    <Col md={8}>
                        {cartItems.length === 0 ? (
                            <p style={{ fontSize: '1rem' }}>
                                Your Cart is currently empty.{' '}
                                <Link to="/store/products">Shop products</Link>
                            </p>
                        ) : (
                            <ListGroup>
                                {cartItems.map((item) => (
                                    <ListGroup.Item key={item._id}>
                                        <Row className="align-items-center">
                                            <Col md={7}>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="img-fluid rounded img-thumbnail"
                                                />{' '}
                                                <Link
                                                    to={`/store/products/${item._id}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            </Col>
                                            <Col md={3}>
                                                <Button
                                                    variant="light"
                                                    disabled={
                                                        item.quantity === 1
                                                    }
                                                    onClick={() => {
                                                        updateCartHandler(
                                                            item,
                                                            item.quantity - 1
                                                        );
                                                    }}
                                                >
                                                    <TbMinus />
                                                </Button>{' '}
                                                <span>{item.quantity}</span>{' '}
                                                <Button
                                                    variant="light"
                                                    disabled={
                                                        item.quantity ===
                                                        item.qtyInStock
                                                    }
                                                    onClick={() => {
                                                        updateCartHandler(
                                                            item,
                                                            item.quantity + 1
                                                        );
                                                    }}
                                                >
                                                    <TbPlus />
                                                </Button>
                                            </Col>
                                            <Col md={2}>
                                                <Button
                                                    variant="light"
                                                    onClick={() =>
                                                        removeItemHandler(item)
                                                    }
                                                >
                                                    <BsTrash />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h3>
                                            Subtotal (
                                            {cartItems.reduce(
                                                (increment, item) =>
                                                    increment + item.quantity,
                                                0
                                            )}{' '}
                                            items) : $
                                            {cartItems.reduce(
                                                (increment, item) =>
                                                    increment +
                                                    item.price * item.quantity,
                                                0
                                            )}
                                        </h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button
                                            className="bg-accent btn-lg"
                                            variant="dark"
                                            disabled={cartItems.length === 0}
                                            onClick={checkoutHandler}
                                        >
                                            Proceed to Checkout
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cart;
