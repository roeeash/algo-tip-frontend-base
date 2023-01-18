import React from 'react';
import '../design/Navbar.css'

function Navbar() {
    console.log(window.location)
    return (
        <nav>
            {/* Navbar content */
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
            }
        </nav>
    )
}

export default Navbar;



