import React from 'react';
import './header.css';


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function myFunction1(x) {
    document.getElementById("toggleMenu").classList.toggle("change");
}

const Header = () => {
    return(
        <div className="topnav" id="myTopnav">
            <a href="#home" class="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                <div class="container_menu" onClick={() => myFunction1()} id="toggleMenu">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </a>
        </div>
    );
}


export default Header;