import { Component } from "react";
import { GameBoardButton } from "./GameBoardButton";

export class GameBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const grid = [];
        for (let i = 0; i < 5; ++i) {
            const row = [];

            for (let j = 0; j < 5; ++j)
                row.push(
                <GameBoardButton 
                    key={`${i}, ${j}`} 
                    height="50px" width="50px" color={this.props.game.gameBoardColor[i][j]} 
                    game = {this.props.game} value={this.props.game.getValue(i,j)} 
                    id_i = {i} id_j = {j} 
                />);

            row.push(<br key={`${i}, 5`}></br>)
            grid.push(row);
        }

        return (
            <div>
                {grid}
                <br></br>
            </div>
        )
    }
}