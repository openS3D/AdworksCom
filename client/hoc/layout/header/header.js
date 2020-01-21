import React from 'react';
import './header.css';


const toggleResponsiveMenu=()=> {
    var x = document.getElementById("topnav_element");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    document.getElementById("topnav_togglemenu").classList.toggle("change");
}

const Header = () => {
    return(
        <nav className="topnav" id="topnav_element">
            <a href="#home"  className="active topnav_banner"><img src="/images/logo/logo.jpg" className="topnav_logo" alt="AdWorksCom"/>AdWorksCom</a>
            <a href="#createad">Create Ad</a>
            <a href="#contactus">Contact Us</a>
            <a href="#login">Log In</a>
            <a href="javascript:void(0);" className="topnav_icon" onClick={toggleResponsiveMenu}>
                <div className="topnav_togglemenu" id="topnav_togglemenu">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </a>
        </nav>
    );
}


export default Header;