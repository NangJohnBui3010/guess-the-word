import { compareWords } from "./CompareWords";
/*const acceptedWords = [
    'TRACE', 'TRACK', 'TRICK', 'NICKY', 'ABOUT', 'ABOVE', 'ABUSE', 'BOOTH', 'BOUND', 'BRAIN',
    'BEACH', 'BOAST', 'BATER',
    'TREND', 'HAPPY', 'SOBER', 
]*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const NOT_FINISHED = 0;
const WIN = 1;
const LOSE = 2;
const WHITE = 0;
const BLACK = 1;
const DARKORANGE = 2;
const GREEN = 3;

export class Game {
    constructor(acceptedWords) {
        this.acceptedWords = acceptedWords
        this.chosenWord = this.getRandomWord();
        this.curWord = "";
        this.guessTurn = 0;
        this.endGame = NOT_FINISHED; 
        this.gameBoardColor = [];
        this.gameBoardValue = [];
        for (let i = 0; i < 5; ++i) {
            this.gameBoardColor.push([0, 0, 0, 0, 0]);
            this.gameBoardValue.push([""])
        }

        this.letterColor = [];
        for (let i = 0; i < 26; ++i)
            this.letterColor.push(0);
    }
    getRandomWord() {
        // Change it to random function
        return this.acceptedWords[getRndInteger(0,this.acceptedWords.length-1)];
    }

    getValue(i, j) {
        if (this.gameBoardValue[i].length <= j) return "";
        else return this.gameBoardValue[i][j];
    }

    checkWord() {
        // Write code to check the word over here
        let res = [];
        res = compareWords(this.curWord,this.chosenWord)

        for (let i = 0; i < 5; ++ i) {
            let char = this.curWord[i].charCodeAt(0) - 'A'.charCodeAt(0);
            this.letterColor[char] = Math.max(this.letterColor[char], res[i]);
        }

        console.log(this.letterColor)
        // 
        this.curWord = "";
        this.guessTurn++;
        
        // Change endGame value if the game is finished
        let checkWin = 1;
        for(let i = 0; i < 5; i++){
            if(res[i] != 3){
                checkWin = 0;
                break;
            }
        }
        if(checkWin)this.endGame = WIN;
        else if (this.guessTurn == 5)
            this.endGame = LOSE;
        return res;
    }

    /**
     * Handle when virtual or real key board is pressed 
     * @param {*} key 
     * @returns an array of 5 containing the color codes for the answer boxes (0: not checked, 1: not in the word, 2: correct letter yet correct position, 3: correct letter and correct position)
     */
    keyBoardEventHandler(key) {
        if (key === 'Enter') {
            console.log(this.curWord);
            console.log(this.acceptedWords.includes(this.curWord))
            if (this.curWord.length < 5) this.gameBoardColor[this.guessTurn] = [0, 0, 0, 0, 0];
            else if (! (this.acceptedWords.includes(this.curWord))) this.gameBoardColor[this.guessTurn] = [0, 0, 0, 0, 0];  
            else this.gameBoardColor[this.guessTurn] = this.checkWord();
        }
        else if (key === 'Delete') {
            if (this.curWord.length > 0) {
                this.curWord = this.curWord.slice(0,  this.curWord.length - 1);
                this.gameBoardValue[this.guessTurn] = this.curWord;
            }
            this.gameBoardColor[this.guessTurn] = [0, 0, 0, 0, 0];
        }
        else {
            if (this.curWord.length < 5) {
                this.curWord += key;
                this.gameBoardValue[this.guessTurn] = this.curWord;
            }
            this.gameBoardColor[this.guessTurn] =  [0, 0, 0, 0, 0];
        }
    }

    guessCount(){
        return this.guessTurn;
    }
    isEndGame() {
        return this.endGame;
    }
    answer(){
        return this.chosenWord;
    }
}