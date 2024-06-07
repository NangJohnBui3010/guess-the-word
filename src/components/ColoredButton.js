import React, { Children, Component } from 'react';

class ColoredButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0,
        };
        this.changeColor = this.changeColor.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    changeColor(color) {
        this.setState((prevState) => ({
            status: color,
        }));
    }

    handleClick() {

    }

    render() {
        const palette = ["white", "black", "darkOrange", "green"];
        const styles = {
            backgroundColor: palette[this.state.status],
            borderRadius: "10%",
            height: this.props.height ? `${this.props.height}` : "auto",
            width: this.props.width ? `${this.props.width}` : "auto",
            margin: "5px",
            padding: "10px"
        };

        return (
            <button style={styles} onClick={this.handleClick}>
                <p style = {{color: "grey", margin: "0px", fontSize: "25px"}}>{this.props.value}</p>
            </button>
        );
    }
}

export default ColoredButton;
