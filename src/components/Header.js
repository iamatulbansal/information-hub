import React from "react";
import { Link } from 'react-router-dom'
import { ROUTE_ROOT_PATH } from '../constants/constant'


const Header = () => {

    return (
        <div className="header-container">
            <div  >
                <a href="/" > <img className="logo" src='https://cdn.pixabay.com/photo/2013/07/13/13/21/information-160885_1280.png' alt='logo.' /></a>
            </div>
            <ul className="nav-link">
                <li><Link to={ROUTE_ROOT_PATH.CSS}>CSS</Link></li>
                <li><Link to={ROUTE_ROOT_PATH.HTML}>HTML</Link></li>
                <li><Link to={ROUTE_ROOT_PATH.JAVASCRIPT}>JAVASCRIPT</Link></li>
                <li><Link to={ROUTE_ROOT_PATH.NODE}>NODE</Link></li>
                <li><Link to={ROUTE_ROOT_PATH.REACT}>REACT</Link></li>
                <li><Link to={ROUTE_ROOT_PATH.SECURITY}>SECURITY</Link></li>
            </ul>
        </div>
    );
};

export default Header;
