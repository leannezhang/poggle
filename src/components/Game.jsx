import React, { Component } from 'react'
import {shuffleBoard} from './Common/shuffleBoard'
import Board from './Board'
import ScoreBox from './ScoreBox'
import CurrentWord from './CurrentWord'
import './Game.css'
class Game extends Component {

  constructor() {
    super()
    this.board = shuffleBoard()
  }

  //tile() {
  //    const tile = {
  //      letter: ,
  //      isSelected: false,
  //      position: {row: rowIndex, column: col}
  //    }
  //}

  render() {
    return (
      <div>
        <div className="game-area">
           <Board board={this.board}/>
          <CurrentWord />
        </div>

        <ScoreBox />

        <div className="clear">
        </div>

      </div>
    )
  }
}

export default Game