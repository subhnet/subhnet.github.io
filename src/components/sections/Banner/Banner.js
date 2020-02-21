import React from 'react'
import PropTypes from 'prop-types'

const Banner = props => {
    return (
        <div className="banner-bg" id="top">
            <div className="banner-overlay"></div>
            <div className="welcome-text">
                <h2> Hi, I'm <span style={{"color": "#FFCC00"}}>Subhransu Maharana</span></h2>
                <h5>I'm a full-stack developer. </h5>
            </div>
        </div>
    )
}

Banner.propTypes = {

}

export default Banner
