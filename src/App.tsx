import React, { useEffect, useState } from 'react';
import Login from './Login';
import LoggedIn from './LoggedIn';


function App() {

  const [user, setUser] = useState<string|undefined>(undefined);

  useEffect(() => {
    chrome.storage.local.get(["username"], res => {
      setUser(res.username);
    })
  }, [])

  const logOut = () => {
    chrome.storage.local.clear(() => {
      setUser(undefined);
    });
  }
  

  return (

    <div className="App">
      <header className="App-header">
        {user ? <LoggedIn user={user} logOut={logOut} /> : <Login setUser={setUser} />}
      </header>
    </div>

  );
}

export default App;
