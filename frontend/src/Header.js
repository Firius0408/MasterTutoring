import React from 'react';
import './Header.css';
import BusinessLogo from './BusinessLogo.png'
import SearchIcon from "@material-ui/icons/Search";
import { Button } from '@material-ui/core'
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Avatar} from "@material-ui/core";
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Header() {
    const cookie = new Cookies();
    const loggedIn = cookie.get('loginAuth');
    return(
        <div className='header'>
            <Link to="/">
                <img className="header__icon" src={BusinessLogo} alt=""/>
            </Link>
           {/* <div className='header__center'>
               <input type="text" />
               <SearchIcon />
           </div> */}

            <div className='header__right'>
                {!loggedIn ? 
                <Link to="/Login">
                    <Button varient='outlined'>Login</Button>
                </Link> 
                : 
                <Link to="/Logout">
                    <Button varient='outlined'>Logout</Button>
                </Link>
                }
                <Link to="/RegistrationForm">
                    <Button varient='outlined'>Register</Button>    
                </Link> 
                <Link to="/Tutor">
                    <Button varient='outlined'>Tutor</Button>
                </Link>
            </div>
        </div>
    )
}

export default Header

