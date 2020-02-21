import React from 'react'
import PropTypes from 'prop-types'
import { Link, animateScroll as scroll } from "react-scroll";

import './Nav.scss';

export const NavItem = props => {
    return (
        <li className="nav-items">

            <Link
                activeClass="active"
                to={props.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                {/* <a href={props.link}> */}
                <i className={props.iconCLass}></i>{props.children}
                {/* </a> */}
            </Link>
        </li>
    )
}


export const Nav = props => {
    return (
        <ul className="navigation">
            {props.children}
        </ul>
    )
}

Nav.propTypes = {

}
