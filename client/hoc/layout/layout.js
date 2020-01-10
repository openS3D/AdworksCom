import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';

const Layout = ({children}) =>{
    return (
    <div className="app_container">
        <header className="appheader_default">
            Default Header
        </header>
        <div className="appcontent_default">
            {children}
        </div>
        <footer className="appfooter_default">
            Footer
        </footer>
    </div>)
}

export default Layout;
