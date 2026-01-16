import { useState } from 'react'

const initialGameBoard = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
]

export default function GameBoard() {
  const [ gameBoard, setGameBoard ] = useState(initialGameBoard)

  function handleCellClick(rowIndex, cellIndex) {
    setGameBoard(prevBoard => {
      const newBoard = [...prevBoard.map(row => [...row])]
      newBoard[rowIndex][cellIndex] = 'X'
      return newBoard
    })
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => handleCellClick(rowIndex, cellIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
