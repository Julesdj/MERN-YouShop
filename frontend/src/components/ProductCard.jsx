import axios from 'axios';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Store } from './cartContext/Store';

function ProductCard({ product }) {
    // Add To Cart button
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;
    const addToCartHandler = async () => {
        const itemExists = cart.cartItems.find(
            (item) => item._id === product._id
        );
        const quantity = itemExists ? itemExists.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);
        if (data.qtyInStock < quantity) {
            window.alert('Sorry, the product is out of stock');
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...product, quantity },
        });
    };

    return (
        <div>
            <Card>
                <Link to={`/store/products/${product._id}`}>
                    <Card.Img variant="top" src={`${product.image}`} />
                </Link>
                <Card.Body>
                    <Link
                        className="link"
                        to={`/store/products/${product._id}`}
                    >
                        <Card.Title style={{ color: 'black' }}>
                            {product.name}
                        </Card.Title>
                    </Link>
                    <Card.Text>{product.tags}</Card.Text>
                    <div className="d-flex just justify-content-between align-items-center">
                        <Card.Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                            }}
                        >
                            ${product.price}
                        </Card.Text>
                        <Button
                            variant="dark"
                            className="bg-accent atc"
                            onClick={addToCartHandler}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;
