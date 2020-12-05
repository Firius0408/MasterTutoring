import React from 'react';
import './Header.css';
import BusinessLogo from './BusinessLogo.png'
import SearchIcon from "@material-ui/icons/Search";
import { Button } from '@material-ui/core'
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Avatar} from "@material-ui/core";
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className='header'>
           <img className="header__icon" src={BusinessLogo} alt=""/>
           {/* <div className='header__center'>
               <input type="text" />
               <SearchIcon />
           </div> */}

            <div className='header__right'>
                <Link variant='outlined' to="/Login">Login</Link>
                <Link variant='outlined' to="/RegistrationForm">Register</Link> 
                <Link variant='outlined' to="Tutor">Tutor</Link>
            </div>
        </div>
    )
}

export default Header

