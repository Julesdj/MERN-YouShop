import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function CartBody () {
    return(
        <div>
            <Container>
                <Card>
                    <Card.Title>Shopping Cart</Card.Title>
                    <Card.Body>
                        <Card.Text>Check Now</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
 export default CartBody;