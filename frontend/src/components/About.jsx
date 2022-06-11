import React from 'react';
import Card from 'react-bootstrap/Card';

function About() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card>
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>About YouShop</Card.Title>
                    <Card.Subtitle>Your Favorite Online Store</Card.Subtitle>
                    <Card.Img style={{width: "1080px", height: "720px"}}
                        src="/girl-shopping-phone.jpg"
                        alt="girl shopping on phone"
                    />
                    <Card.Title>Welcome to YouShop. We’re glad you’re here.</Card.Title>
                    <Card.Text>
                        YouShop was created in 2022. We our commited to provide
                        the best service and customer relations. YouShop donates
                        20% of it's yearly profit to various charities.YouShop is 
                        the shopping destination for looking for items catering to 
                        your interests. We’re home to a mountain of products in 
                        all sorts of categories, from those useful to artists to 
                        those suited for cooks.
                    </Card.Text>
                    <Card.Text>While you’re here, it’s all about you.</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;
