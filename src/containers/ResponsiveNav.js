import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from '../components/Navigation/Nav'
import { NavItem } from './../components/Navigation/Nav';
import PDF from "../assets/doc/SubhransuMaharana_Resume_5.4.pdf";
import $ from 'jquery';

const ResponsiveNav = props => {

    const toggleMenu = () => {
        $('.responsive-menu').stop(true, true).slideToggle();
        return false;
    }
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
                <a href="#" className="toggle-menu" onClick={toggleMenu}><i className="fa fa-bars"></i></a>
                <div className="main-navigation responsive-menu">
                    <Nav>
                        <NavItem iconCLass="fa fa-globe" link="top">Welcome</NavItem>
                        <NavItem iconCLass="fa fa-pencil" link="about">About Me</NavItem>
                        <NavItem iconCLass="fa fa-angellist" link="experience">Work Experience</NavItem>
                        <NavItem iconCLass="fa fa-paperclip" link="blogs">Blogs</NavItem>
                        {/* <NavItem iconCLass="fa fa-file"      link={PDF} target = "_blank">My CV</NavItem> */}
                        <li className="nav-items"><a href={PDF} target="_blank"><i className="fa fa-file"></i>My CV</a></li>
                        <NavItem iconCLass="fa fa-link" link="contact">Contact Me</NavItem>
                    </Nav>
                </div>
            </div>
        </div>
    )
}

ResponsiveNav.propTypes = {

}

export default ResponsiveNav;
