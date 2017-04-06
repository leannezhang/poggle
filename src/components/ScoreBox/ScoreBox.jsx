import React from 'react'

const ScoreBox = (props) => {
  const {wordList, totalScore} = props
  const words = Object.keys(wordList)
  const scores = Object.values(wordList)

  return (
    <div className="score-box">
      <div className="word-list">
        <div className="words">
          <li>WORD</li>
          {
            words.map(function(word) {
              return (<li>{word}</li>)
            })
          }
        </div>
        <div className="scores">
          <li>SCORE</li>
          {
            scores.map(function(score) {
              return (<li>{score}</li>)
            })
          }
        </div>
      </div>
      <div className="total-score">
        <h2>Total Score</h2>
        <span>{totalScore}</span>
      </div>
    </div>
  )
}

export default ScoreBox