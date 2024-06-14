import { triggerGameBoardReload } from "../triggers/GameBoardReload";
import ColoredButton from "./ColoredButton";

const convertLetterToInt = (char) => {
    return char.charCodeAt(0) - 'A'.charCodeAt(0);
}

export class KeyBoardButton extends ColoredButton {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.game.letterColor[convertLetterToInt(this.props.value[0])],
        };
    }

    handleClick() {
        triggerGameBoardReload();
        this.props.game.keyBoardEventHandler(this.props.value);
        console.log(this.props.game.answer())
        console.log(this.props.game.isEndGame())
        if(this.props.setEndGame){
            this.props.setEndGame(this.props.game.isEndGame())
        }
        // Deal with this later
    }
}