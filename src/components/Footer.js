import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css';

function Footer(){
    return (
        <footer className='footer'>
            <div className='githubIcon'>
            <FontAwesomeIcon icon="fa-brands fa-github" />
                <Link to="/github">
                    <img src ="https://github.com/ItsMARPON" alt ="Github site"/>
                </Link>
            </div>
            <div className='linkedinIcon'>
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            <Link to="/linkedin">
                <img src='https://www.linkedin.com/in/maryyangytio' alt='LinkedIn site' />
            </Link>
            </div>
            <div className='copyright'>
                <h3>Copyright (c) by Mary Yang</h3>
            </div>
        </footer>
    )
    
}

export default Footer;