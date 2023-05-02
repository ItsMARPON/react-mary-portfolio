import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Resume(){
return (
    <div className='resume-container'>
        <div className='resume-title'>Professional Resume</div>
        <Link to="/resumepdf">
        <img
          src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
          alt="Resume in PDF"
        />
        <FontAwesomeIcon icon="fa-solid fa-paper-plane" size="xs" />
      </Link>
    </div>
)

}

export default Resume;