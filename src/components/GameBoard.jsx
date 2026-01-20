// import { useState } from 'react'

const initialGameBoard = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
]

export default function GameBoard({ onSelectPlayer, turns }) {
  let gameBoard = initialGameBoard;

  for ( const turn of turns ) {
    const { square: { row, col }, player } = turn;
    gameBoard[row][col] = player;
  }

  // const [ gameBoard, setGameBoard ] = useState(initialGameBoard)

  // function handleCellClick(rowIndex, cellIndex) {
  //   setGameBoard(prevBoard => {
  //     const newBoard = [...prevBoard.map(row => [...row])]
  //     newBoard[rowIndex][cellIndex] = activePlayerSymbol
  //     return newBoard
  //   })

  //   onSelectPlayer()
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectPlayer( rowIndex, colIndex )}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
