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
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      currentWord: '',
      wordList: {}
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

  calculateScore(word) {
    return word.length
  }

  handleSubmit(word) {

    const mergeWordList = Object.assign({}, this.state.wordList)

    if (!mergeWordList[word]) {
      mergeWordList[word] = this.calculateScore(word)
      this.setState({
        wordList: mergeWordList,
        currentWord: ''
      })
    }
  }
  // 1. Click on the square and makes up the current word
  // 2. Submit a current word
  // 3. Create a wordlist
  // 4. Calculate total score

  // 5. enable surround squares

  render() {
    return (
      <div>
        <div className="game-area">
          <Board board={this.board} handleClick={this.handleClick}/>
          <CurrentWord currentWord={this.state.currentWord} handleSubmit={this.handleSubmit}/>
        </div>

        <ScoreBox wordList={this.state.wordList} />

        <div className="clear">
        </div>

      </div>
    )
  }
}

export default Game