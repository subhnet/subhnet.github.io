import React from 'react'
import PropTypes from 'prop-types'

const ResponsiveNav = props => {
    return (
        <div className="responsive-header visible-xs visible-sm">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="top-section">
                            <div className="profile-image">
                                <img src="img/profile.jpg" alt="Volton" />
                            </div>
                            <div className="profile-content">
                                <h3 className="profile-title">SUBHRANSU MAHARANA</h3>
                                <p className="profile-description">FULL-STACK DEVELOPER</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className="toggle-menu"><i className="fa fa-bars"></i></a>
                <div className="main-navigation responsive-menu">
                    <ul className="navigation">
                        <li><a href="#top"><i className="fa fa-globe"></i>Welcome</a></li>
                        <li><a href="#about"><i className="fa fa-pencil"></i>About Me</a></li>
                        <li><a href="#experience"><i className="fa fa-angellist"></i>Work Experience</a></li>
                        <li><a href="#blogs"><i className="fa fa-paperclip"></i>Blogs</a></li>
                        <li><a href="doc/resume.pdf" target="_blank" className="external"><i className="fa fa-file"></i>My CV</a></li>
                        <li><a href="#contact"><i className="fa fa-link"></i>Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

ResponsiveNav.propTypes = {

}

export default ResponsiveNav;
