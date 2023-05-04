import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from "@fortawesome/free-solid-svg-icons";

function Resume(){
return (
    <div className='resume-container'>
        <div className='resume-title'>Professional Resume</div>
        <FontAwesomeIcon icon={faCoffee} size="xs" />
        <a href='https://drive.google.com/file/d/1nUMXnpkaA3UK8QftjoPk-Wnb_meeyC1U/view?usp=sharing'
          alt="Mary Yang Resume PDF"
        >View My Resume</a>
        <FontAwesomeIcon icon={faCoffee} size="xs" />
    </div>
)

}

export default Resume;