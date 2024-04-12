import { useState } from 'react'
import './App.css'
import Login from './Login';
import Game from './Game';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const renderContent = () => {
    if (isLoggedIn) {
      return <Game username={username} setIsLoggedIn={setIsLoggedIn} />;
    } else {
      return <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />;
    }
  };

  return (
    <div className="App">
      <h2>Words Guess Challenge</h2>
      {renderContent()}
    </div>
  );
}

export default App;