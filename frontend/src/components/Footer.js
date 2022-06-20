//imports
import React from 'react';

function Footer() {
    return <div className="main-footer" style={{width: '100vw', position: 'fixed', bottom: '0', margin: '0', padding: '0'}}>
        <div className="container" style={{display: 'flex', backgroundColor: 'black', color: 'white', justifyContent: 'center', margin: '0', padding: '0', fontSize: '12px', height: '15vh', minWidth: '100vw'}}> 

        <div className='row'>
        <h4>Information</h4>
        <ul style={{listStyleType: 'none'}}>
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
            <li>Email:(123)-456-7899</li>
            <li>Phone Number:YouShopService@email.com</li>
        </ul></div>
        
        </div>
    </div>;
}
export default Footer;


