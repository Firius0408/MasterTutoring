import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function App() {
  const [loggedIn, setLoggedIn] = useState(!!cookies.get('loginAuth'));
  return (
    <div className="App">
      <Header loggedIn={loggedIn}/>
      <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    </div>
  );
}

export default App;