import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Resume(){
return (
    <div className='resume-container'>
        <div className='resume-title'>Professional Resume</div>
        <a href='https://drive.google.com/file/d/1nUMXnpkaA3UK8QftjoPk-Wnb_meeyC1U/view?usp=sharing'
          alt="Mary Yang Resume PDF"
        >View My Resume</a>
        <FontAwesomeIcon icon="fa-solid fa-paper-plane" size="xs" />
    </div>
)

}

export default Resume;