import React from 'react'

const Tile = (props) => {

  const {selected, letter} = props;

  return (
      <div className={selected ? 'tile-selected' : 'tile'} >
        <div>{letter}</div>
      </div>
  )
}

export default Tile