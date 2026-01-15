import { useState } from 'react'

export default function Player({ initialName, symbol }) {
  const [ playerName, setPlayerName ] = useState(initialName)
  const [ isEditing, setIsEditing ] = useState(false)

  function handleIsEditing() {
    setIsEditing(editing => !editing)
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = isEditing ?
    <input type="text" required value={playerName} onChange={handleChange} /> :
    <span className="player-name">{playerName}</span>

  let btnCaption = isEditing ? "Save" : "Edit"

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleIsEditing}>{btnCaption}</button>
    </li>
  )
}
