import React from 'react';

function About() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'transparent'}}>
                <div style={{textAlign: 'center', marginTop: '30vh'}}>
                    <div>
                        About YouShop
                        <br></br>   
                        Your Favorite Online Store
                    </div>

                    <div style={{fontSize: '40px', color: 'white'}}>Welcome to YouShop. We’re glad you’re here.</div>
                    <p style={{width: "85rem", margin: 'auto'}}>
                        YouShop was officially created in 2022 but the idea existed long  before that. It's creators Kokutse Djoguenou, Connor Kline, and Shawn Greene had conversed about the idea of a shop that suits one's needs for quite some time. Amazon did this somewhat well, but it didn't really 'know' it's customer. No E-Commerce platform did, as far as they knew. So they set out to change that and the result was YouShop. 
                    
                        <br></br>   

                        Our goal is to be personal; to help YOU, whoever you are. That's why YouShop asks about what you love. That's why YouShop 
                        donates 30% of it's yearly profits to various charities.

                        <br></br>

                        YouShop is the shopping destination for those looking for items catering to 
                        your interests. We’re home to a mountain of products in  all sorts of categories, 
                        from those useful to artists to those suited for cooks or those interested in electronics and hiking.

                         <br></br>

                        While you’re here, it’s all about <strong>You</strong>.</p>
                </div>
        </div>
    );
}

export default About;
