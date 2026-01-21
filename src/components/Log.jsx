export default function Log({ turns }) {
  return <ol id="log">
    {turns.map((turn) => {
      const { square: { row, col }, player } = turn;
      return (
        <li key={`${row}${col}`}>
          Player {player} selected row {row + 1}, column {col + 1}
        </li>
      )
    })}
  </ol>
}
