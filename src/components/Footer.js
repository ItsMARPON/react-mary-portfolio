import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css';

function Footer(){
    return (
        <footer className='footer'>
            <div className='copyright'>
                <h3>Copyright (c) by Mary Yang</h3>
            </div>
            <div className='githubIcon'>
            <FontAwesomeIcon icon="fa-brands fa-github" />
            </div>
            <div className='linkedinIcon'>
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </div>
        </footer>
    )
    
}

export default Footer;