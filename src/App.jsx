import { useState } from "react"

import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
import Log from "./components/Log.jsx"

function deriveActivePlayer(turns) {
  let currentPlayer = ( turns.length > 0 && turns[0].player ) === 'X' ? 'O' : 'X';
  return currentPlayer;
}


function App() {
  const [ gameTurns, setGameTurns ] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectPlayer={handleActivePlayerChange} turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
