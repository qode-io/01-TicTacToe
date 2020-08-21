import React from 'react';

export default function XOSquare(props){

    return(
        <input 
            type="button" 
            className="xo-square" 
            value={props.sqVal} 
            disabled={!props.sqVal.trim() && !props.hasWon ? false : true}
            name={props.index}
            onClick={props.clickEvent}
        />
    )
}