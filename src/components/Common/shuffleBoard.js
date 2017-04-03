 const randomlySelectFace = (faces) => {
  let randomIndex = Math.floor(Math.random() * 6)
  let face = faces.charAt(randomIndex)
  return face
}


const shuffleDices = (dices) => {
  for (let i=0; i < dices.length; i++ ) {
    let randomIndex = Math.floor(Math.random() *  dices.length) // random from 0 -> 25
    let temp = dices[i];
    dices[i] = dices[randomIndex]
    dices[randomIndex] = temp;
  }
  return dices
}

export const shuffleBoard = () => {
  //  Create 1D array with dices
  //  Shuffle the dices
  //  Create 2D array with an empty board
  //  Randomly select from the 1D array
  //  Insert in the board and randomly pick a face

  const dices = [
    "aaafrs", "aaeeee", "aafirs", "aeeeem", "aeegmu",
    "aegmnn", "afirsy", "bjkqxz", "ccenst", "ceiilt",
    "ceilpt", "ceipst", "ddhnot", "dhhlor", "dhhlor",
    "dhlnor", "dhlnor", "eiiitt", "emottt", "ensssu",
    "fiprsy", "gorrvw", "iprrry", "nootuw", "ooottu"
  ]

  const board = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
  ]

  const shuffledDices = shuffleDices(dices);

  for (let row=0; row < 5; row++) {
    for(let col=0; col < 5; col++) {

      let dice = shuffledDices.shift()

      let face = randomlySelectFace(dice);

      board[row][col] = face;
    }
  }
  console.log(board)
  return board
}