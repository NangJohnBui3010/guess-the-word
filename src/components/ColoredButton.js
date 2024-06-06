import React, { Children, Component } from 'react';

class ColoredButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0,
        };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        this.setState((prevState) => ({
            status: (prevState.status + 1) % 4
        }));
    }

    render() {
        const palette = ["gray", "black", "darkOrange", "green"];
        const styles = {
            backgroundColor: palette[this.state.status],
            borderRadius: "10%",
            height: "50px",
            width: "50px",
            margin: "5px",
        };

        return (
            <button style={styles} onClick={this.changeColor}>
                <p style = {{color: "aquamarine", margin: "0px", fontSize: "25px"}}>{this.props.value}</p>
            </button>
        );
    }
}

export default ColoredButton;
