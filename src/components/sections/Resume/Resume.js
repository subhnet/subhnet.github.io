import React from 'react';
import './style.css';
import PDF from "../../../assets/doc/Subhransu_Resume_FullStack.pdf";

const Resume = props => {
    return (
        <div>
            <div>
                <a className="btn"  href={PDF} target = "_blank"><i className="fa fa-download"> </i> Download My Resume</a>
            </div>
        </div>
    )
}

Resume.propTypes = {

}

export default Resume
