import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function CartBody () {
    return(
        <div style={{margin: '6rem 0rem 0rem 0rem'}}>
            <Container style={{ display: 'flex', justifyContent: 'center'}}>
                <Card>
                <Card.Title style={{textAlign: 'center'}}>Shopping Cart</Card.Title>
                    <Card.Body style={{textAlign: 'center'}}>
                    <Card.Img style={{width: "270px", height: "360px"}}
                        src="/girl-shopping-phone.jpg"
                        alt="girl shopping on phone"
                    />
                    <Card.Subtitle>Checkout Now</Card.Subtitle>
                        <Card.Text>We are commited to provide you with a fast and easy checkout process</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
 export default CartBody;