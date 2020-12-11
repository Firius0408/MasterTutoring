import React from 'react';
import Cookies from 'universal-cookie';
import './login.css';

function Logout(props) {
    const cookies = new Cookies();
    const apiURL = "http://localhost:4000/user/logout";
    fetch(apiURL, {
        method: 'DELETE',
        credentials: 'include'
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .then(() => {
        cookies.remove('loginAuth');
        props.setLoggedIn(false);
    })
    .catch(err => console.error('Error:', err));
    return(
        // Styled this in login.css
        <div className='logout'>
            Logged Out
        </div>
        
    )
}

export default Logout;