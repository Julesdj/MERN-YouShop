import React from 'react';
import Card from 'react-bootstrap/Card';

function About() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#B491FF'}}>
            <Card>
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>About YouShop</Card.Title>
                    <Card.Subtitle>Your Favorite Online Store</Card.Subtitle>
                    <Card.Img style={{width: "270px", height: "320px"}}
                        src="/girl-shopping-phone.jpg"
                        alt="girl shopping on phone"
                    />
                    <Card.Title style={{fontSize: '40px', color: 'white'}}>Welcome to YouShop. We’re glad you’re here.</Card.Title>
                    <Card.Text style={{width: "85rem", margin: 'auto'}}>
                        YouShop was officially created in 2022 but the idea existed long 
                        before that. It's creators Kokutse Djoguenou, Connor Kline, 
                        and Shawn Greene had conversed about the idea of a shop that suits 
                        one's needs for quite some time. Amazon did this somewhat well, but 
                        it didn't really 'know' it's customer. No E-Commerce platform did, as 
                        far as we knew. So we set out to change that and the result was Youshop. 
                    </Card.Text>

                        
                    <Card.Text style={{width: "85rem", margin: 'auto'}}>Our goal is to be personal; to help YOU, whoever you are. That's why YouShop asks about what you love. That's why Youshop 
                        donates 30% of it's yearly profits to various charities.</Card.Text>
                    
                    <Card.Text style={{width: "85rem", margin: 'auto'}}>YouShop is the shopping destination for those looking for items catering to 
                        your interests. We’re home to a mountain of products in  all sorts of categories, 
                        from those useful to artists to those suited for cooks or those interested in electronics and hiking.
                    </Card.Text>
                    <br></br>

                    <Card.Text>While you’re here, it’s all about <strong>You</strong>.</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;
