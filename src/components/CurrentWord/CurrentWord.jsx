import React from 'react'
import Button from './Button'

const CurrentWord = (props) => {
  return (

    <div className="word-area">
      <div className="current-header">
        Current Word
      </div>
      <div className="current-word">
        DOG
      </div>

      <Button />
    </div>
  )
}

export default CurrentWord

// add protypes