import ColoredButton from "./ColoredButton";
import React, {Children, Component} from 'react';
class KeyBoard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ColoredButton value = "Q"/>
                <ColoredButton value = "W"/>
                <ColoredButton value = "E"/>
                <ColoredButton value = "R"/>
                <ColoredButton value = "T"/>
                <ColoredButton value = "Y"/>
                <ColoredButton value = "U"/>
                <ColoredButton value = "I"/>
                <ColoredButton value = "O"/>
                <ColoredButton value = "P"/>
                <br/>
                <ColoredButton value = "A"/>
                <ColoredButton value = "S"/>
                <ColoredButton value = "D"/>
                <ColoredButton value = "F"/>
                <ColoredButton value = "G"/>
                <ColoredButton value = "H"/>
                <ColoredButton value = "J"/>
                <ColoredButton value = "K"/>
                <ColoredButton value = "L"/>
                <br/>
                <ColoredButton value = "Z"/>
                <ColoredButton value = "X"/>
                <ColoredButton value = "C"/>
                <ColoredButton value = "V"/>
                <ColoredButton value = "B"/>
                <ColoredButton value = "N"/>
                <ColoredButton value = "M"/>
            </div>
        )
    }
}

export default KeyBoard;