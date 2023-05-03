import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css';

function Footer(){
    return (
        <footer className='footer'>
            <div className='githubIcon'>
            <FontAwesomeIcon icon="fa-brands fa-github" />
            <a href="https://github.com/ItsMARPON" alt ="Github site"> My Github Link</a>
            </div>
            <div className='linkedinIcon'>
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            <a href="https://www.linkedin.com/in/maryyangytio" alt='LinkedIn site'>My LinkedIn Profile Link</a>
            </div>
            <div className='copyright'>
                <h3>Copyright (c) by Mary Yang</h3>
            </div>
        </footer>
    )
    
}

export default Footer;