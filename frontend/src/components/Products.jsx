import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import ProductCard from './ProductCard';

//Defining the reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function Products() {
    const [{ loading, error, products }, dispatch] = useReducer(reducer, {
        products: [],
        loading: true,
        error: '',
    });

    useEffect(() => {
        async function getProducts() {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/products');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        }
        getProducts();
    }, []);

    return (
        <Container style={{ margin: '1rem auto' }}>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {loading ? (
                    <div style={{ margin: '40vh auto' }}>
                        <Spinner
                            animation="border"
                            role="status"
                            variant="warning"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    products.map((product) => (
                        // Rendering product card Component
                        <ProductCard product={product} key={product._id} />
                    ))
                )}
            </Row>
        </Container>
    );
}

export default Products;
