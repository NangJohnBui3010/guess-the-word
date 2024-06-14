import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import KeyBoard from './components/KeyBoard';
import { Game } from './game/GameMechanics';
import { GameBoard } from './components/GameBoard';
import { useGameBoardReloadTrigger } from './triggers/GameBoardReload';
import EndingScene from './components/EndingScene';

function App() {
  const [wordListContent, setWordListContent] = useState([]);
  const [newGame, setNewGame] = useState(null);
  const [endGame, setEndGame] = useState(0);
  const [reload, triggerReload] = useGameBoardReloadTrigger();
  /**
   * Insert code to check if the game is finished after every clicking or typing event under here 
   */
  useEffect(() => {
    fetch('/wordlist.txt')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((text) => {
        const wordsArray = text.toUpperCase().split('\n');
        setWordListContent(wordsArray);
        console.log(wordsArray[0])
        return text;
      })
      .catch((error) => {
        console.error('Error fetching or processing the file:', error);
      });
  }, []);
  
  useEffect(() => {
    setNewGame(new Game(wordListContent));
  }, [wordListContent]);

  return (
    <div className="App">
      <h1>Guess the word</h1>
      {newGame && <GameBoard game={newGame} key={reload}/>}
      {newGame && <KeyBoard setEndGame = {setEndGame} game={newGame} key={!reload}/>}
      {(newGame && newGame.isEndGame() != 0) && <EndingScene guessCount = {newGame.guessCount()} value = {newGame.isEndGame()} answer = {newGame.answer()} />}
      {/*wordListContent && <h1>{wordListContent[4668]}</h1>*/}
    </div>
  );
}

export default App;
