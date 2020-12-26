import React, { useState } from 'react';
import './main.css';
import Cell from './Cell';


const arr = Array(9).fill(null);
const Main = () => {
    const [step, setstep] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null)
    const checkWinner = (array) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (array[a] && array[a] === array[b] && array[a] === array[c]) {
                return array[a];
            }
        }
        return null;
    }
    const handleClick = (index) => {
        if (arr[index] === null && !gameOver) {
            setstep(step + 1);
            arr[index] = (step + 1) % 2;
            const check = checkWinner(arr);
            if (check !== null) {
                setGameOver(true);
                setWinner(check);
            }
        }
    }

    return (
        <div className="main-container">
            {arr.map((value, index) => (
                <Cell
                    key={index}
                    value={value}
                    callBack={() => handleClick(index)}
                />
            ))}
        </div>
    )
}
export default Main