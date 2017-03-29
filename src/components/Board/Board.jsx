import React from 'react'
import Tile from './Tile'


const Board = (props) => {
  // dimension: rows, columns
  // row
  const tile1 = {
    letter: 'A',
    isSelected: false,
    position: {row: 0, column: 0}
  }

  let row = [ tile1, tile1, tile1, tile1, tile1]
  const board = [];

  for (let i = 0; i < 5; i++) {
    board.push(row);
  }

  return (
    <div className="blue-area">
      {
        board.map((row, index) => {
          return (
              <div className="row" key={index}>
                {
                  row.map((tile, index) => {
                    return (<Tile selected={tile.isSelected} letter={tile.letter} key={index} />)
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