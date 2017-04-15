import React, { Component } from 'react'
import {shuffleBoard, copyBoard} from './Common/shuffleBoard'
import Board from './Board'
import ScoreBox from './ScoreBox'
import CurrentWord from './CurrentWord'
import './Game.css'
class Game extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.initBoard = shuffleBoard()
    this.state = {
      board : this.initBoard,
      currentWordArray: [],
      currentWord: '',
      wordList: {},
      totalScore : 0
    }
  }
  // 1. click on the tile
  // 2. update tile selected to true
  // 3. copy board
  // 4. render the board with updated tile so it renders as active
  handleClick(rowId, columnId) {
    const newBoard = copyBoard(this.state.board);
    const selected = newBoard[rowId][columnId].selected;
    let currentWord;
    if(selected) {
      newBoard[rowId][columnId].selected = false;
      // Remove last letter from the currentWord
      currentWord = this.state.currentWord.slice(0, -1);
    } else {
      newBoard[rowId][columnId].selected = true;
      // Add a letter to the end of the currentWord
      currentWord = this.state.currentWord.concat(newBoard[rowId][columnId].letter);
    }
    this.setState({
      currentWord,
      //currentWordArray: this.state.currentWordArray.concat(tile),
      board : newBoard
    })
  }

  calculateScore(word) {
    if (word.length >= 3 && word.length <= 8) {
      return word.length - 2
    } else if (word.length > 8) {
      return 6
    } else {
      return 1
    }
  }

  // 1. Submit a current word
  // 2. Create a wordlist
  // 3. Calculate total score
  // 4. Clear board

  handleSubmit(word) {

    const mergeWordList = Object.assign({}, this.state.wordList);

    if ( word.length > 0 && !mergeWordList[word] ) {
      mergeWordList[word] = this.calculateScore(word);
      const totalScore = this.state.totalScore +  mergeWordList[word];
      const clearedBoard = this.initBoard;

      this.setState({
        wordList: mergeWordList,
        currentWord: '',
        totalScore : totalScore,
        board: clearedBoard
      })
    }
  }
  // 1. Click on the square and makes up the current word


  render() {
    return (
      <div>
        <div className="game-area">
          <Board board={this.state.board} handleClick={this.handleClick}/>
          <CurrentWord currentWord={this.state.currentWord} handleSubmit={this.handleSubmit}/>
        </div>

        <ScoreBox wordList={this.state.wordList} totalScore={this.state.totalScore} />

        <div className="clear">
        </div>

      </div>
    )
  }
}

export default Game