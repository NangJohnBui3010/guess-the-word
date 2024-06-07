import ColoredButton from "./ColoredButton";

export class GameBoardButton extends ColoredButton {
    constructor(props) {
        super(props);
        this.colorChangingTrigger = this.colorChangingTrigger.bind(this);
    }

    colorChangingTrigger() {
        this.changeColor(this.props.game.gameBoardColor[this.props.id_i][this.props.id_j]);
    }
}