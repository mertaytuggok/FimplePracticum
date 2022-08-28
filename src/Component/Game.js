import styles from "../Css/Game.module.css"
import React, { useState } from "react";
import EndGame from "./EndGame";
import Box from "./Box";

const Start = "";
const X_PLAYER = "X";
const O_PLAYER = "O";

const Combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function Game() {
    const [grid, setGrid] = useState(Array(9).fill(Start));
    const [player, setPlayer] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [draw, setDraw] = useState(false);
    const [winCount, setwinCount] = useState({ X: 0, O: 0 });


    function GameOver() {
        if (!gameFinished) {
            for (let i = 0; i < 8; i++) {
                if (
                    grid[Combinations[i][0]] === X_PLAYER &&
                    grid[Combinations[i][1]] === X_PLAYER &&
                    grid[Combinations[i][2]] === X_PLAYER
                ) {
                    setGameFinished(true);
                    setwinCount({ ...winCount, X: winCount.X + 1 });
                    return;
                }
            }

            for (let i = 0; i < 8; i++) {
                if (
                    grid[Combinations[i][0]] === O_PLAYER &&
                    grid[Combinations[i][1]] === O_PLAYER &&
                    grid[Combinations[i][2]] === O_PLAYER
                ) {
                    setGameFinished(true);
                    setwinCount({ ...winCount, O: winCount.O + 1 });
                    return;
                }
            }

            if (!grid.includes(Start)) {
                setDraw(true);
                setGameFinished(true);
            }
        }
    }

    function restartGame() {
        setGrid(Array(9).fill(Start));
        setGameFinished(false);
        setDraw(false);
    }
    GameOver();

    function handleClick(id) {
        setGrid(
            grid.map((item, index) => {
                if (index === id) {
                    if (player) {
                        return X_PLAYER;
                    } else {
                        return O_PLAYER;
                    }
                } else {
                    return item;
                }
            })
        )
        setPlayer(!player);
    }
    return (
        <div>
            <span className={styles.historyX}>
                X = {winCount.X}
            </span>
            <span className={styles.historyO}>
                O = {winCount.O}
            </span>
            {gameFinished && (
                <EndGame
                    winCount={winCount}
                    restartGame={restartGame}
                    player={player}
                    draw={draw}
                />
            )}
            <Box grid={grid} handleClick={handleClick} />
        </div>
    )

}

export default Game;