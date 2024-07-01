import React from 'react'
import PropTypes from 'prop-types'
import handwave from '../../../assets/img/wave.gif'

const Banner = props => {
    return (
        <header className="banner-bg" id="top">
            <div className="banner-overlay"></div>
            <div className="welcome-text">
                <h2>
                    Hi, I am <span style={{ color: "#FFE300" }}>Subhransu Maharana</span>
                    <img src={handwave} alt="waving hand" height="35px" />
                </h2>
                <h5>
                    a full-stack developer specialized in both<br />
                    <strong>front-end and back-end development.</strong>
                </h5>
            </div>
        </header>
    )
}

Banner.propTypes = {}

export default Banner
