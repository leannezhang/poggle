import React from 'react'
import Button from './Button'

const CurrentWord = (props) => {
  const {currentWord} = props

  return (

    <div className="word-area">
      <div className="current-header">
        Current Word
      </div>
      <div className="current-word">
        {currentWord}
      </div>

      <Button />
    </div>
  )
}

export default CurrentWord

// add protypes