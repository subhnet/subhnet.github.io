import React from "react";
import { Nav, NavItem } from "../components/Navigation/Nav";
import profile from "../assets/img/profile.jpg"

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
                    <NavItem iconCLass="fa fa-file"      link="doc/resume.pdf">My CV</NavItem>
                    <NavItem iconCLass="fa fa-link"      link="contact">Contact Me</NavItem>
                </Nav>
            </div>
        </div>
    );
}

export default SideNav;