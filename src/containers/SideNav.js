import React from "react";
import { Nav, NavItem } from "../components/Navigation/Nav";
import profile from "../assets/img/profile.jpg";
import PDF from "../assets/doc/SubhransuMaharana_Resume_5.4.pdf";

const SideNav = () => {
    return (
        <div className="sidebar-menu hidden-xs hidden-sm">
            <div className="top-section">
                <div className="profile-image">
                    <img src={profile} alt="Volton" />
                </div>
                <h3 className="profile-title">SUBHRANSU MAHARANA</h3>
                <p className="profile-description">FULL-STACK DEVELOPER</p>
            </div>
            <div className="main-navigation">
                <Nav>
                    <NavItem iconCLass="fa fa-globe"     link="top">Welcome</NavItem>
                    <NavItem iconCLass="fa fa-pencil"    link="about">About Me</NavItem>
                    <NavItem iconCLass="fa fa-angellist" link="experience">Work Experience</NavItem>
                    <NavItem iconCLass="fa fa-paperclip" link="blogs">Blogs</NavItem>
                    {/* <NavItem iconCLass="fa fa-file"      link={PDF} target = "_blank">My CV</NavItem> */}
                    <li className="nav-items"><a href = {PDF} target = "_blank"><i className="fa fa-file"></i>My CV</a></li>
                    <NavItem iconCLass="fa fa-link"      link="contact">Contact Me</NavItem>
                </Nav>
            </div>
        </div>
    );
}

export default SideNav;