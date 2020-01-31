import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import SideNav from './side-nav/sideNav';


const Header = (props) => {


    const navBars = () => (
        <div className='bars'>
            <FontAwesome name="bars"
                onClick={props.onOpenNav} //handle do otwierani panelu z layoutu
                style={{
                    color:'#dfdfdf',
                    padding:'10px',
                    cursor:'pointer'
                }}
            />
        </div>
    )

    const logo = () => (
        <Link to="/" className='header'>
            <img alt="logo" src="/images/logo.png"/>
        </Link>
    )
    
    // sidenav dostaje propsy w layoucie
    return (
        <header className='main'>
        
        <SideNav {...props}/>
            <div className='headerOpt'>
                {navBars()}
                {logo()}
            </div>
        </header>
    )


}

export default Header;