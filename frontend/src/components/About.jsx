import React from 'react';

function About() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'transparent'}}>
                <div style={{textAlign: 'center'}}>
                    <div>About YouShop</div>
                    <div>Your Favorite Online Store</div>
                    <img src="/girl-shopping-phone.jpg" alt="girl shopping on phone" style={{width: "270px", height: "320px"}}/>
                    <div style={{fontSize: '40px', color: 'white'}}>Welcome to YouShop. We’re glad you’re here.</div>
                    <p style={{width: "85rem", margin: 'auto'}}>
                        YouShop was officially created in 2022 but the idea existed long 
                        before that. It's creators Kokutse Djoguenou, Connor Kline, 
                        and Shawn Greene had conversed about the idea of a shop that suits 
                        one's needs for quite some time. Amazon did this somewhat well, but 
                        it didn't really 'know' it's customer. No E-Commerce platform did, as 
                        far as we knew. So we set out to change that and the result was Youshop. 
                    </p>

                        
                    <p style={{width: "85rem", margin: 'auto'}}>Our goal is to be personal; to help YOU, whoever you are. That's why YouShop asks about what you love. That's why Youshop 
                        donates 30% of it's yearly profits to various charities.</p>
                    
                    <p style={{width: "85rem", margin: 'auto'}}>YouShop is the shopping destination for those looking for items catering to 
                        your interests. We’re home to a mountain of products in  all sorts of categories, 
                        from those useful to artists to those suited for cooks or those interested in electronics and hiking.
                    </p>
                    <br></br>

                    <p>While you’re here, it’s all about <strong>You</strong>.</p>
                </div>
        </div>
    );
}

export default About;
