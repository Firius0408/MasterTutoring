import React from 'react';
import './Home.css';
import Banner from './Banner';
import TutorPage from './tutorform';

function Home() {
    return(
        <div className='home'> 
            <Banner />
            <TutorPage />
        </div>
    )
}

export default Home
