import React from 'react';
import Card from 'react-bootstrap/Card';

function About() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card>
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>About YouShop</Card.Title>
                    <Card.Subtitle>Your Favorite Online Store</Card.Subtitle>
                    <Card.Img style={{width: "1080px", height: "720px"}}
                        src="/girl-shopping-phone.jpg"
                        alt="girl shopping on phone"
                    />
                    <Card.Text>
                        YouShop was created in 2022. We our commited to provide
                        the best service and customer relations. YouShop donates
                        20% of it's yearly profit to various charities.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;
