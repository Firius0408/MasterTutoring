import React from 'react';
import Banner from './Banner';
import TutorPage from './tutorform';
import Login from './login';
import Logout from './logout';
import PostList from './postslist';
import RegistrationForm from './registerForm';
import Profile from './profile';
import { Switch, Route } from 'react-router-dom';

function Home(props) {
    return(
        <div className='home'> 
            <Switch>
                <Route exact path="/">
                    <Banner />
                </Route>
                <Route path="/Login">
                    <Login setLoggedIn={props.setLoggedIn}/>
                </Route>
                 <Route path="/Logout">
                    <Logout setLoggedIn={props.setLoggedIn}/>
                </Route> 
                <Route path="/Tutor">
                    <TutorPage />
                </Route>
                <Route path="/RegistrationForm">
                    <RegistrationForm />
                </Route>
                <Route path="/PostList" render={(props) => <PostList {...props} />}/>
                <Route path="/Profile">
                    <Profile loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Home
