import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function Contact() {
    return(
        <div>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Title>Contact Us</Card.Title>
                    <Card.Text>Contact YouShop</Card.Text>
                </Card.Body>
                <CardGroup>
                    <Card border='dark'>
                        <Card.Body>
                            <Card.Title>Phone Numbers</Card.Title>
                            <Card.Text>(123)-456-7899 YouShop Office</Card.Text>
                            <Card.Text>(123)-456-7898 YouShop Customer Service</Card.Text>
                            <Card.Text>(123)-456-7897 YouShop Returns and Order Info</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border='dark'>
                        <Card.Body>
                            <Card.Title>Address</Card.Title>
                            <Card.Text>123 River rd. </Card.Text>
                            <Card.Text>Come tour our warehouse</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border='dark'>
                        <Card.Body>
                            <Card.Title>Emails and Customer Service</Card.Title>
                            <Card.Text>YouShop@email.com</Card.Text>
                            <Card.Text>YouShopService@email.com</Card.Text>
                            <Card.Text>YouShopOrderInfo@email.com</Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Card>
        </div>
    )
}

export default Contact;
