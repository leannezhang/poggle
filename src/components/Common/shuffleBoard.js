export const shuffleDice = (faces) => {
  let randomIndex = Math.floor(Math.random() * 6)
  let face = faces.charAt(randomIndex)
  return face
}

export const initBoard = function() {
    const board = [
      ["aaafrs", "aaeeee", "aafirs", "aeeeem", "aeegmu"],
      ["aegmnn", "afirsy", "bjkqxz", "ccenst", "ceiilt"],
      ["ceilpt", "ceipst", "ddhnot", "dhhlor", "dhhlor"],
      ["dhlnor", "dhlnor", "eiiitt", "emottt", "ensssu"],
      [ "fiprsy", "gorrvw", "iprrry", "nootuw", "ooottu"]
    ]
    for(let row=0; row < board.length; row++) {
      let singleRow = board[row]
      for (let col=0; col < singleRow.length; col++) {
        board[row][col] = shuffleDice(board[row][col]);
      }
    }
    return board
}

//const shuffleBoard = () => {
//
//
//
//  let boardSize = boardFaces.length
//
//  let board = boardFaces.map(function(current) {
//    return randomizedFace(current)
//  })
//
//  for (let i=0; i < boardSize; i++ ) {
//    let randomIndex = Math.floor(Math.random() * boardSize) // random from 0 -> 25
//    let temp = board[i];
//    board[i] = board[randomIndex]
//    board[randomIndex] = temp;
//  }
//
//  return board
//}
