import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function Products() {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                    <Card border="dark">
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                            <Card.Text>About This Product</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card border="dark">
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                            <Card.Text>About This Product</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card border="dark">
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                            <Card.Text>About This Product</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card border="dark">
                        <Card.Img variant="top" src="holder.js/100px180"/>
                        <Card.Body>
                            <Card.Title>Product</Card.Title>
                            <Card.Text>About This Product</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Products;
