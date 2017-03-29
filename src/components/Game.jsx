import React, { Component } from 'react'
import Board from './Board'
import ScoreBox from './ScoreBox'
import CurrentWord from './CurrentWord'
import './Game.css'
class Game extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className="game-area">
            <Board />
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