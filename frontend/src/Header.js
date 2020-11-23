import React from 'react';
import './Header.css';
import BusinessLogo from './BusinessLogo.png'
import SearchIcon from "@material-ui/icons/Search";
import { Button } from '@material-ui/core'
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Avatar} from "@material-ui/core";

function Header() {
    return(
        <div className='header'>
           <img className="header__icon" src={BusinessLogo} alt=""/>
           <div className='header__center'>
               <input type="text" />
               <SearchIcon />
           </div>

           <div className='header__right'>
               <Button variant='outlined'>Login</Button>
               <Button variant='outlined'>Register</Button> 
               <Button variant='outlined'>Tutor</Button>
           </div>
        </div>
    )
}

export default Header

