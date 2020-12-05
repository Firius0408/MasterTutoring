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
                <Link to="/Login">
                    <Button varient='outlined'>Login</Button>
                </Link>
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

