import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Resume(){
return (
    <div className='resume-container'>
        <div className='resume-title'>Professional Resume</div>
        <Link to="/resumepdf">
        <img
          src="https://drive.google.com/file/d/1nUMXnpkaA3UK8QftjoPk-Wnb_meeyC1U/view?usp=sharing"
          alt="Mary Yang Resume PDF"
        />
        <FontAwesomeIcon icon="fa-solid fa-paper-plane" size="xs" />
      </Link>
    </div>
)

}

export default Resume;