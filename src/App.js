import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import KeyBoard from './components/KeyBoard';
import { Game } from './game/GameMechanics';

function App() {
  const [newGame, setNewGame] = useState(null);

  /**
   * Insert code to check if the game is finished after every clicking or typing event under here 
   */

  useEffect(() => {
    const gameInstance = new Game();
    setNewGame(gameInstance);
  }, []);

  return (
    <div className="App">
      {newGame && <KeyBoard game={newGame} />}
    </div>
  );
}

export default App;
