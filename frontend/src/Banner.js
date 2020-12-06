import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import './Banner.css'
import Search from './Search'
import { Link } from 'react-router-dom';

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return(
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <Button onClick = {() =>setShowSearch(!showSearch)}
                className='banner__searchButton' 
                variant ='outlined'>Search Tutors By Subject</Button>
            </div>
            <div className ='banner__info'>
                <h1>Mastered Tutors</h1>
                <h5>Tutoring Made Easy</h5>
                <Link to="/PostList">
                    <Button variant='outlined'>Find Help Today</Button>
                </Link>
            </div>
        </div>
    )
}

export default Banner