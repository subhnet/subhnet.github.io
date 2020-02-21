import React from "react";
import SideNav from './../containers/SideNav';
import Auxilary from './Auxilary';
import Footer from './../containers/Footer';
import Banner from './../components/sections/Banner/Banner';
import ResponsiveNav from './../containers/ResponsiveNav';


const Layout = (props) => {
    return (
        //   <header className="App-header">
        //   Test
        // </header> 
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
            </div>
        </Auxilary>
    );
}

export default Layout;