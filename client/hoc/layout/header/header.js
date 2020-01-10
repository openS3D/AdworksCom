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
            <a href="#home" class="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" className="topnav_icon" onClick={toggleResponsiveMenu}>
                <div class="topnav_togglemenu" id="topnav_togglemenu">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </a>
        </nav>
    );
}


export default Header;