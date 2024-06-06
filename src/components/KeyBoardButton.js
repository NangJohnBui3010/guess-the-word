import ColoredButton from "./ColoredButton";

export class KeyBoardButton extends ColoredButton {
    constructor(props) {
        super(props);

    }

    handleClick() {
        let joe = this.props.game.keyBoardEventHandler(this.props.value);

        // Deal with this later
    }
}