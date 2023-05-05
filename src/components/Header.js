// Required for Header.js to work properly
import React from 'react';
import '../index.css';

// This function is a Header component that will be imported into App.js

function Header(){
    return (
        <header className='header'>
            <div className='header-title'>
            <h1>Professional Portfolio</h1>
            </div>
        </header>
    );
};

export default Header;

