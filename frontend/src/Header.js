import React from 'react';
import './Header.css';
import BusinessLogo from './images/BusinessLogo.png'
import SearchIcon from "@material-ui/icons/Search";
import { Button } from '@material-ui/core';
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Avatar} from "@material-ui/core";
import { Link } from 'react-router-dom';

function Header(props) {
    return(
        <div className='header'>
            <Link to="/">
                <img className="header_icon" src={BusinessLogo} alt="logo" />
            </Link>

            <div className='header_right'>
                {!props.loggedIn ? 
                <Link to="/Login">
                    <Button varient='outlined'>Login</Button>
                </Link> 
                : 
                <Link to="/Logout">
                    <Button varient='outlined'>Logout</Button>
                </Link>
                }
                {!props.loggedIn && <Link to="/RegistrationForm">
                    <Button varient='outlined'>Register</Button>    
                </Link> 
                }
                <Link to="/Tutor">
                    <Button varient='outlined'>Tutor</Button>
                </Link>
                <Link to="/PostList">
                    <Button>Browse</Button>
                </Link>
                {props.loggedIn && 
                    <Link to="/Profile">
                        <Button varient='outlined'>Profile</Button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Header

