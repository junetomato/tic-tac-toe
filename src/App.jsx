import { useState } from "react"

import GameBoard from "./components/GameBoard.jsx"
import GameOver from "./components/GameOver.jsx"
import Player from "./components/Player.jsx"
import Log from "./components/Log.jsx"
import { WINNING_COMBINATIONS } from "./winning-combinations.js"

const initialGameBoard = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
]

function deriveActivePlayer(turns) {
  let currentPlayer = ( turns.length > 0 && turns[0].player ) === 'X' ? 'O' : 'X';
  return currentPlayer;
}


function App() {
  const [ players, setPlayers ] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });
  const [ gameTurns, setGameTurns ] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(row => [...row])];

  for ( const turn of gameTurns ) {
    const { square: { row, col }, player } = turn;
    gameBoard[row][col] = player;
  }

  let winner = null;

  for ( const combination of WINNING_COMBINATIONS ) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol !== null &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
      break;
    }
  }

  const hasDraw = gameTurns.length === 9 && winner === null;

  function handleActivePlayerChange( rowIndex, colIndex ) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange( symbol, newName ) {
    setPlayers(prevPlayers => ({
      ...prevPlayers,
      [symbol]: newName,
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard onSelectPlayer={handleActivePlayerChange} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
