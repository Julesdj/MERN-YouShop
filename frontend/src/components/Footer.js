//imports
import React from 'react';

function Footer() {
    return (
        <div className=" footer bg-main">
            <div
                className="container"
                style={{
                    color: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    fontSize: '1em',
                    justifyContent: 'space-between',
                    paddingTop: '1.5rem',
                    paddingBottom: '1.5rem',
                }}
            >
                <div className="row">
                    <h4>Information</h4>
                    <ul style={{ listStyleType: 'none' }}>
                        <li>FAQ</li>
                        <li>Returns</li>
                        <li>Shipping and Payment</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>

                <div className="row">
                    <h4>YouShop</h4>
                    <ul style={{ listStyleType: 'none' }}>
                        <li>About Us</li>
                        <li>Our Creators</li>
                        <li>Feedback</li>
                    </ul>
                </div>

                <div className="row">
                    <h4>Contact Us</h4>
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Email: YouShopService@email.com</li>
                        <li>Phone Number: (123)-456-7899</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Footer;
