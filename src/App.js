import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import KeyBoard from './components/KeyBoard';
import { Game } from './game/GameMechanics';
import { GameBoard } from './components/GameBoard';
import { useGameBoardReloadTrigger } from './triggers/GameBoardReload';

function App() {
  const [newGame, setNewGame] = useState(null);
  const [reload, triggerReload] = useGameBoardReloadTrigger();

  /**
   * Insert code to check if the game is finished after every clicking or typing event under here 
   */

  useEffect(() => {
    setNewGame(new Game());
  }, []);

  return (
    <div className="App">
      {newGame && <GameBoard game={newGame} key={reload}/>}
      {newGame && <KeyBoard game={newGame} key={!reload}/>}
    </div>
  );
}

export default App;
