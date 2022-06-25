import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Store } from './cartContext/Store';

function ProductCard({ product }) {
    // Add To Cart button
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const addToCartHandler = () => {
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...product, quantity: 1 },
        });
    };

    return (
        <div>
            <Card>
                <Link to={`/store/products/${product._id}`}>
                    <Card.Img variant="top" src={`${product.image}`} />
                </Link>
                <Card.Body>
                    <Link to={`/store/products/${product._id}`}>
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
