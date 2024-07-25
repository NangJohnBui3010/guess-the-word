import React, { Children, Component } from 'react';
import { motion } from 'framer-motion';
class ColoredButton extends Component {
    constructor(props) {
        super(props);

        if (this.props.color) {
            this.state = {
                status: this.props.color,
            };
        }
        else this.state = {
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
        const color = ["black", "white", "white", "white"];
        const styles = {
            backgroundColor: palette[this.state.status],
            color: color[this.state.status],
            borderRadius: "10%",
            height: this.props.height ? `${this.props.height}` : "auto",
            width: this.props.width ? `${this.props.width}` : "auto",
            margin: "5px",
            padding: "10px"
        };

        return (
            
            <motion.button 
                style={styles} onClick={this.handleClick}
                initial={{ opacity: 0.6 }}
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.125 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}>
                <p style = {{margin: "0px", fontSize: "25px"}}>{this.props.value}</p>
            </motion.button>
        );
    }
}

export default ColoredButton;
