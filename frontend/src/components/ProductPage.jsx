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
        <div style={{ textAlign: 'center', backgroundColor: '#B491FF', height: '100vh'}}>
            
                
                    
                        <img src={`${product.image}`} style={{ height: '400px' }}></img>
               
                 
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'lato'}}>
                                <h1>{product.name}</h1>
                                <h7>Tags: {product.tags}</h7>
                            </div>
                                <h3 style={{color: 'gray'}}>${product.price}</h3>
                                <h5>{product.qtyInStock}</h5>
                                <h5 style={{width: '50%'}}>{product.description}</h5>
                            
                            
                        </div>
                    
                    
                
            
        </div>
    );
}

export default ProductPage;
