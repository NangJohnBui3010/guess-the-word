import { KeyBoardButton } from "./KeyBoardButton";
import React, {Children, Component} from 'react';

class KeyBoard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <KeyBoardButton game = {this.props.game} value = "Q"/>
                <KeyBoardButton game = {this.props.game} value = "W"/>
                <KeyBoardButton game = {this.props.game} value = "E"/>
                <KeyBoardButton game = {this.props.game} value = "R"/>
                <KeyBoardButton game = {this.props.game} value = "T"/>
                <KeyBoardButton game = {this.props.game} value = "Y"/>
                <KeyBoardButton game = {this.props.game} value = "U"/>
                <KeyBoardButton game = {this.props.game} value = "I"/>
                <KeyBoardButton game = {this.props.game} value = "O"/>
                <KeyBoardButton game = {this.props.game} value = "P"/>
                <br/>
                <KeyBoardButton game = {this.props.game} value = "A"/>
                <KeyBoardButton game = {this.props.game} value = "S"/>
                <KeyBoardButton game = {this.props.game} value = "D"/>
                <KeyBoardButton game = {this.props.game} value = "F"/>
                <KeyBoardButton game = {this.props.game} value = "G"/>
                <KeyBoardButton game = {this.props.game} value = "H"/>
                <KeyBoardButton game = {this.props.game} value = "J"/>
                <KeyBoardButton game = {this.props.game} value = "K"/>
                <KeyBoardButton game = {this.props.game} value = "L"/>
                <br/>
                <KeyBoardButton setEndGame = {this.props.setEndGame} game = {this.props.game} value = "Enter"/>
                <KeyBoardButton game = {this.props.game} value = "Z"/>
                <KeyBoardButton game = {this.props.game} value = "X"/>
                <KeyBoardButton game = {this.props.game} value = "C"/>
                <KeyBoardButton game = {this.props.game} value = "V"/>
                <KeyBoardButton game = {this.props.game} value = "B"/>
                <KeyBoardButton game = {this.props.game} value = "N"/>
                <KeyBoardButton game = {this.props.game} value = "M"/>
                <KeyBoardButton game = {this.props.game} value = "Delete"/>
            </div>
        )
    }
}

export default KeyBoard;