import React from 'react'

const ScoreBox = (props) => {
  return (
    <div className="score-box">
      <div className="word-list">
        <div className="words">
          <li>WORD</li>
          <li>crane</li>
        </div>
        <div className="scores">
          <li>SCORE</li>
          <li>2</li>
        </div>
      </div>
      <div className="total-score">
        <h2>Total Score</h2>
        <span>4</span>
      </div>
    </div>
  )
}

export default ScoreBox