import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import KeyBoard from './components/KeyBoard';
import { Game } from './game/GameMechanics';
import { GameBoard } from './components/GameBoard';
import { useGameBoardReloadTrigger } from './triggers/GameBoardReload';
import EndingScene from './components/EndingScene';

function App() {
  const [newGame, setNewGame] = useState(null);
  const [endGame, setEndGame] = useState(0);
  const [reload, triggerReload] = useGameBoardReloadTrigger();
  /**
   * Insert code to check if the game is finished after every clicking or typing event under here 
   */

  useEffect(() => {
    setNewGame(new Game());
  }, []);

  return (
    <div className="App">
      <h1>Guess the word</h1>
      {newGame && <GameBoard game={newGame} key={reload}/>}
      {newGame && <KeyBoard setEndGame = {setEndGame} game={newGame} key={!reload}/>}
      {(newGame && newGame.isEndGame() != 0) && <EndingScene guessCount = {newGame.guessCount()} value = {newGame.isEndGame()} answer = {newGame.answer()} />}
    </div>
  );
}

export default App;
