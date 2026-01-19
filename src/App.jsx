import { useState } from "react"

import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"


function App() {
  const [ activePlayer, setActivePlayer ] = useState('X');

  function handleActivePlayerChange() {
    setActivePlayer(prevPlayer => (prevPlayer === 'X' ? 'O' : 'X'));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectPlayer={handleActivePlayerChange} activePlayerSymbol={activePlayer} />
      </div>

      Log
    </main>
  )
}

export default App
