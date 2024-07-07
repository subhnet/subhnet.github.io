import React from 'react';
import './style.css';
import PDF from "../../../assets/doc/Subhransu_Resume_FullStack.pdf";
import Button from '@bit/tabinda.react-button-animation.animated.button';

const Resume = () => {
    const handleResumeClick = () => {
        gtag('event', 'click', {
            'event_category': 'Button',
            'event_label': 'View My Resume'
        });
    };

    return (
        <div>
            <div>
                <a href={PDF} target="_blank" onClick={handleResumeClick}>
                    <Button label="View My Resume" />
                </a>
            </div>
        </div>
    );
};

export default Resume;
