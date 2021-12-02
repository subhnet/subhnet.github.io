import React from "react";
import { Nav, NavItem } from "../components/Navigation/Nav";
import profile from "../assets/img/profile.jpg";

const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "5px 70px"
}

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
            <div class="socials" style={style}>
                <span>
                    <a href="https://github.com/subhnet" target="_blank" class="socials">
                        <svg style={{ overflow: "visible" }} height="15" class="octicon octicon-mark-github mr-1 v-align-middle" fill="#ffffff" aria-label="GitHub" viewBox="0 0 16 16" version="1.1" width="20" role="img"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>
                </span>
                <span>
                    <a href="https://twitter.com/subhmaharana" target="_blank" class="socials">
                        <svg height="15" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="#ffffff" ></path></svg>
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/smaharana/" target="_blank" class="socials">
                        <svg height="15" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z" fill="#ffffff"></path></svg>
                    </a>
                </span>
                <span>
                    <a href="mailto: subhransumaharana@gmail.com" target="_blank" class="socials" aria-label="Email: subhransumaharana@gmail.com">
                        <svg height="15" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9434 1.52996L16.9243 15.7574C16.7018 16.7662 16.1009 17.011 15.2627 16.5362L10.6637 13.1463L8.44574 15.2826C8.20095 15.5274 7.99325 15.7351 7.51851 15.7351L7.84489 11.0545L16.368 3.35475C16.7389 3.02836 16.2864 2.84292 15.7968 3.1693L5.26349 9.80084L0.723777 8.38403C-0.262794 8.07249 -0.285048 7.39746 0.931477 6.92272L18.6675 0.0834836C19.4909 -0.21323 20.2104 0.283765 19.9434 1.52996Z" fill="#ffffff"></path></svg>
                    </a>
                </span>
            </div>
            <div className="main-navigation">
                <Nav>
                    <NavItem iconCLass="fa fa-globe" link="top">Welcome</NavItem>
                    <NavItem iconCLass="fa fa-pencil" link="about">About Me</NavItem>
                    <NavItem iconCLass="fa fa-angellist" link="experience">Work Experience</NavItem>
                    <NavItem iconCLass="fa fa-paperclip" link="blogs">Blogs</NavItem>
                    <NavItem iconCLass="fa fa-file" link="resume">My CV</NavItem>
                    {/* <li className="nav-items"><a href = {PDF} target = "_blank"><i className="fa fa-file"></i>My CV</a></li> */}
                    <NavItem iconCLass="fa fa-link" link="contact">Contact Me</NavItem>
                </Nav>
            </div>
        </div>
    );
}

export default SideNav;