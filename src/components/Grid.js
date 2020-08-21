import React from 'react';
import XOSquare from './Square';

export default function Grid(props) {

    const squares = [...Array(9)].map((elem, index) => {
        return <XOSquare 
                key={index} 
                sqVal={props.squares[index]} 
                index={index}
                clickEvent={props.clickEvent}
                hasWon={props.hasWon}
                />
    });

    return(
        <div class="grid">
            {/* 9 Tic Tac Toe Squares */}
            {squares}
        </div>
    )
}