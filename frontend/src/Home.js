import React from 'react';
import './Home.css';
import Banner from './Banner';
import TutorPage from './tutorform';
import Login from './login';

function Home() {
    return(
        <div className='home'> 
            <Banner />
            <TutorPage />
            <Login />
        </div>
    )
}

export default Home
