import React, { Children, Component } from 'react';
import { motion } from 'framer-motion';

class NotAWordDisplay extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <motion.h1
                    initial = {{
                        opacity: "1",
                        left: "61%",
                        top: `${10+this.props.game.guessTurn*7.3}%`
                    }}
                    animate = {{
                        x: [-10,10,-10,10,0],
                        opacity: [1,1,1,1,0]
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    exit={{ opacity: 0 }}
                    style = {{
                        position: "fixed", color:"red", 
                        }}
                >
                    {this.props.game.curWord} is not a word
                </motion.h1>
        )
    }
}
export default NotAWordDisplay