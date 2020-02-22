import React from 'react'
import PropTypes from 'prop-types'

const Banner = props => {
    return (
        <div className="banner-bg" id="top">
            <div className="banner-overlay"></div>
            <div className="welcome-text">
                <h2> Hi, I'm <span style={{ "color": "#FFCC00" }}>Subhransu Maharana</span></h2>
                <h5>a full-stack developer specialized in <br />
                    <strong>front-end and back-end development.</strong></h5>
            </div>
        </div>
    )
}

Banner.propTypes = {

}

export default Banner
