import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from "@fortawesome/free-solid-svg-icons";

function Resume(){
return (
    <div className='resume-container'>
        <h2 className='resume-title'>Professional Resume</h2>
        <FontAwesomeIcon icon={faCoffee} size="xl" />
        <a href='https://drive.google.com/file/d/1nUMXnpkaA3UK8QftjoPk-Wnb_meeyC1U/view?usp=sharing'
          alt="Mary Yang Resume PDF"
        > Click To View My Resume </a>
        <FontAwesomeIcon icon={faCoffee} size="xl" />
    </div>
)

}

export default Resume;