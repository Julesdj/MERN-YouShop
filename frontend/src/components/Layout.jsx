import Navigation from './Navigation';
import Footer from './Footer';

import React from 'react';

function Layout({ children }) {
    return (
        <div className="layout">
            <Navigation />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
