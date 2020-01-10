import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

const Layout = ({ children }) => {
    return (
        <div className="app_container">
            <header className="appheader_default">
                <Header />
            </header>
            <div className="appcontent_default">
                {children}
            </div>
            <footer className="appfooter_default">
                <Footer />
            </footer>
        </div>)
}

export default Layout;
