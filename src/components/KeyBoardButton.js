import { triggerGameBoardReload } from "../triggers/GameBoardReload";
import ColoredButton from "./ColoredButton";

export class KeyBoardButton extends ColoredButton {
    constructor(props) {
        super(props);

    }

    handleClick() {
        triggerGameBoardReload();
        let joe = this.props.game.keyBoardEventHandler(this.props.value);
        // Deal with this later
    }
}