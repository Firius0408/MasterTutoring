import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import './Banner.css'
import Search from './Search'

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return(
        <div>
            <div className='banner'>
                <div className='banner__search'>
                    {showSearch && <Search />}
                    <Button onClick = {() =>setShowSearch(!showSearch)}
                    className='banner__searchButton'
                    variant ='outlined'>Search Tutors By Subject</Button>
                </div>
                <div className ='banner__info'>
                    <h1>Mastered Tutors</h1>
                </div>
            </div>
                <div className = "footer_about">
                    <h1>About</h1>
                    <h6>We provide a platform to connect students with  tutoring by other students. First make an account and login. To find a tutor click search by subject and browse the list of tutors that appear. Contact the tutor with the contact information they provided. Interested in tutoring? Simply click tutor and become a tutor with our pain free registration. </h6>
                </div>
                <div className = "footer_info">
                    Have any questions? Contact us at&nbsp;
                        <a href="mailto:masteredtutors@gmail.com">masteredtutors@gmail.com</a> 
                </div>
        </div>
    )
}

export default Banner