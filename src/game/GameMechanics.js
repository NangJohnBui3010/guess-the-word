const acceptedWords = [
    'trace', 'track', 'trick', 'joebi'
]

function getRandomWord() {
    // Change it to random function
    return acceptedWords[0];
}

const NOT_FINISHED = 0;
const WIN = 1;
const LOSE = 2;

export class Game {

    constructor() {
        this.chosenWord = getRandomWord();
        this.curWord = "";
        this.guessTurn = 0;
        this.endGame = NOT_FINISHED; 
    }

    checkWord() {
        // Write code to check the word over here
        let res = [];

        // 
        this.curWord = "";
        this.guessTurn++;

        // Change endGame value if the game is finished

        return res;
    }

    /**
     * Handle when virtual or real key board is pressed 
     * @param {*} key 
     * @returns an array of 5 containing the color codes for the answer boxes (0: not checked, 1: not in the word, 2: correct letter yet correct position, 3: correct letter and correct position)
     */
    keyBoardEventHandler(key) {
        if (key === 'Enter') {
            if (this.curWord.length < 5) return [0, 0, 0, 0, 0];
            else if (! (this.curWord.length in acceptedWords)) return [0, 0, 0, 0, 0];  
            else return this.checkWord();
        }
        else if (key === 'Delete') {
            if (this.curWord.length > 0) this.curWord = this.curWord.slice(0,  this.curWord.length - 1);
            return [0, 0, 0, 0, 0];
        }
        else {
            if (this.curWord.length < 5) this.curWord += key;
            return [0, 0, 0, 0, 0];
        }
    }

    isEndGame() {
        return this.endGame;
    }
}