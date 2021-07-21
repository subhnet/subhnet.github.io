import React from 'react';
import './style.css';
import PDF from "../../../assets/doc/Subhransu_Resume_FullStack.pdf";
import Button from '@bit/tabinda.react-button-animation.animated.button';

const Resume = props => {
    return (
        <div>
            <div>
                <a href={PDF} target="_blank">
                    <Button label="View My Resume" />
                </a>
            </div>
        </div>
    )
}

Resume.propTypes = {

}

export default Resume
