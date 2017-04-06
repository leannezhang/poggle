import React from 'react'
import Tile from './Tile'


const Board = (props) => {

  const {board, handleClick} = props;
  return (
    <div className="blue-area">
      {
        board.map((row, index) => {
          return (
            <div className="row" key={index}>
              {
                row.map((tile, index) => {
                  return (<Tile selected={tile.isSelected} letter={tile} key={index} handleClick={handleClick.bind(this, tile)}/>)
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Board