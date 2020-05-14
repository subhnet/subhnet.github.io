import React from "react";
import SideNav from './../containers/SideNav';
import Auxilary from './Auxilary';
import Footer from './../containers/Footer';
import Banner from './../components/sections/Banner/Banner';
import ResponsiveNav from './../containers/ResponsiveNav';
import { Link, animateScroll as scroll } from "react-scroll";


const Layout = (props) => {
    return (
        <Auxilary>
            <ResponsiveNav />
            <SideNav />
            <Banner id="welcome" />
            <div className="main-content">
                <div className="fluid-container">
                    <div className="content-wrapper">
                        {props.children}
                        <Footer />
                    </div>
                </div>
                <Link
                    activeClass="active"
                    to="top"
                    className="sm-up-container" 
                    style={{display: "block"}}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    {/* <a href={props.link}> */}
                    <i className="fa fa-angle-up sm-up"></i>
                    {/* </a> */}
                </Link>
                {/* <a href="#page" className="sm-up-container" style={{ display: "block" }}><i className="fa fa-angle-up sm-up"></i></a> */}
            </div>
        </Auxilary>
    );
}

export default Layout;