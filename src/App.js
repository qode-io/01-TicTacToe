import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      turn: true, // X - true, O - false
      squares: [...Array(9)].fill(' '),
      winner: ''
    }
    this.clickEvent = this.clickEvent.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  clickEvent(event){
    const index = parseInt(event.target.name);
    let newSquares = this.state.squares;
    newSquares[index] = (this.state.turn) ? 'X' : 'O';

    this.setState({squares: newSquares, turn: !this.state.turn});

    //Detect Win
    let winMsg = "";
    let char = "";

    if(  (newSquares[0] === newSquares[1] && newSquares[0] === newSquares[2]) //row 1
      || (newSquares[0] === newSquares[3] && newSquares[0] === newSquares[6]) //col 1
      || (newSquares[0] === newSquares[4] && newSquares[0] === newSquares[8]) //diag 1
    ) char = newSquares[0];

    if(  (newSquares[3] === newSquares[4] && newSquares[3] === newSquares[5]) //row 2
      || (newSquares[1] === newSquares[4] && newSquares[1] === newSquares[7]) //col 2
      || (newSquares[2] === newSquares[4] && newSquares[2] === newSquares[6]) //diag 2
    ) char = newSquares[4];

    if(  (newSquares[6] === newSquares[7] && newSquares[6] === newSquares[8]) //row 3
      || (newSquares[2] === newSquares[5] && newSquares[2] === newSquares[8]) //col 3
    ) char = newSquares[8];

    if(char.trim()) winMsg = char + ' has won!';

    //Detect A Tie
    if(!winMsg) {
      winMsg = newSquares.indexOf(' ') === -1 ? "It's a tie!" : "";
    }
    
    this.setState({winner: winMsg})
  }

  resetGame(){
    this.setState({
      turn: true,
      squares: [...Array(9)].fill(' '),
      winner: ''
    })
  }

  render(){
    return(
      <div>
        {/* Tic Tac Toe Grid */}
        <Grid 
          squares={this.state.squares}
          clickEvent={this.clickEvent}
          hasWon={this.state.winner}  
        />

        <h3>
          { this.state.turn && !this.state.winner && "X's Turn" }
          { !this.state.turn && !this.state.winner && "O's Turn" }
        </h3>

        {
          this.state.winner && 
          <div>
            <p>{this.state.winner}</p>
            <input type="button" className="reset" onClick={this.resetGame} value="Play another game!"/>
          </div>
        }
      </div>
    );
  }
}