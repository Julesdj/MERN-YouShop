import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Products() {
    return(
        <div>
            <Container>
                <Row>
                    <Col style={{margin: "1em"}}>
                    <Card border="dark">
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                            <Card.Text>About This Product</Card.Text>
                        </Card.Body>
                        <Button variant="warning" size="lg">Add To Cart</Button>
                    </Card>
                    </Col>
                    <Col style={{margin: "1em"}}>
                    <Card border="dark">
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                            <Card.Text>About This Product</Card.Text>
                        </Card.Body>
                        <Button variant="warning" size="lg">Add To Cart</Button>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col style={{margin: "1em"}}>
                    <Card border="dark">
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                            <Card.Text>About This Product</Card.Text>
                        </Card.Body>
                        <Button variant="warning" size="lg">Add To Cart</Button>
                    </Card>
                    </Col>
                    <Col style={{margin: "1em"}}>
                    <Card border="dark">
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                            <Card.Text>About This Product</Card.Text>
                        </Card.Body>
                        <Button variant="warning" size="lg">Add To Cart</Button>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Products;
