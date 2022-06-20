import axios from 'axios';
import { useEffect, useReducer } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';

//Defining the reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, product: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function ProductPage() {
    const params = useParams();
    const { id } = params;

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
    });

    useEffect(() => {
        async function getProducts() {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/api/products/${id}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        }
        getProducts();
    }, [id]);

    return loading ? (
        <div style={{ margin: '40vh auto' }}>
            <Spinner animation="border" role="status" variant="warning">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    ) : error ? (
        <div>{error}</div>
    ) : (
        <div>
            <Container>
                <Row>
                    <Col sm={8}>
                        <div style={{ height: '400px' }}>
                            <Card.Img
                                variant="top"
                                src={`${product.image}`}
                                style={{
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    </Col>
                    <Col sm={4}><Card>
                        <Card.Body>
                            <Card.Title>
                            ${product.name}
                            </Card.Title>
                        </Card.Body>
                    </Card></Col>
                    
                </Row>
            </Container>
        </div>
    );
}

export default ProductPage;
