import React from 'react';
import Cookies from 'universal-cookie';

function Logout() {
    const cookies = new Cookies();
    const apiURL = "http://localhost:4000/user/logout";
    fetch(apiURL, {
        method: 'DELETE',
        credentials: 'include'
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .then(() => cookies.remove('loginAuth'))
    .catch(err => console.error('Error:', err));
    return(
        <p>Logged Out</p>
    )
}

export default Logout;