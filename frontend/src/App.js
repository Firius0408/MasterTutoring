import React, { useState } from 'react';
import Header from './Header'
import Home from './Home'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Header loggedIn={loggedIn}/>
      <Home setLoggedIn={setLoggedIn}/>
    </div>
  );
}

export default App;
