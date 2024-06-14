import React, { Children, Component } from 'react';

let modalBackgroundStyling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed", 
    zIndex: "1",
    left: "0",
    top: "0",
    width: "100%", 
    height: "100%", 
    overflow: "auto", 
    backgroundColor: "rgb(0,0,0)", 
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: "auto"
}

let modalContentStyling = {
    position: "fixed",
    backgroundColor: "white",
    margin: "auto",
    width: "50%",
    height: "50%",
}
let WinText = (props) =>{
    return(
        <div>
            <h1 style = {{fontSize: "50px", color: "lightgreen"}}>YOU WON!</h1>
            <p>You guessed it in {props.guessCount} times</p>
        </div>
    )
}

let LoseText = () =>{
    return(
        <div>
            <h1 style = {{fontSize: "50px", color: "brown"}}>YOU LOST 🤣💀💩</h1>
            <p>You suck ngl. Try again next time lol</p>
        </div>
    )
}
class EndingScene extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "modal-background" style={modalBackgroundStyling}>
                <div className = "modal-content" style={modalContentStyling}>
                    {this.props.value == 1 ? <WinText guessCount = {this.props.guessCount}/> : <LoseText/>}
                    <h1>The answer is: <p style = {{color: "red"}}>{this.props.answer}</p></h1>
                </div>
            </div>
        )
    }
}
export default EndingScene;