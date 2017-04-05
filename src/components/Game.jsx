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
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      currentWord: ''
    }
  }

  //tile() {
  //    const tile = {
  //      letter: ,
  //      isSelected: false,
  //      position: {row: rowIndex, column: col}
  //    }
  //}
  handleClick(letter) {
    this.setState({
      currentWord: this.state.currentWord.concat(letter)
    })
  }

  render() {
    return (
      <div>
        <div className="game-area">
          <Board board={this.board} handleClick={this.handleClick}/>
          <CurrentWord currentWord={this.state.currentWord} />
        </div>

        <ScoreBox />

        <div className="clear">
        </div>

      </div>
    )
  }
}

export default Game