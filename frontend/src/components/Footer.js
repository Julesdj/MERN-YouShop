//imports
import React from 'react';

function Footer() {
    return <div className="main-footer">
        <div className="container"> 

        <div className='row'>
        <h4>Information</h4>
        <ul style={{listStyleType: 'none', display: 'flex'}}>
            <li>FAQ</li>
            <li>Returns</li>
            <li>Shipping and Payment</li>
            <li>Terms and Conditions</li>
        </ul></div>

        <div className='row'>
            <h4>YouShop</h4>
        <ul style={{listStyleType: 'none'}}>
            <li>About Us</li>
            <li>Our Creators</li>
            <li>Feedback</li>
        </ul></div>
        
        <div className='row'>
            <h4>Contact Us</h4>
        <ul style={{listStyleType: 'none'}}>
            <li>Email:</li>
            <li>Phone Number:</li>
        </ul></div>
        
        <div className='row'></div>
        <h4>Socials</h4></div>
        
    </div>;
}
export default Footer;


