import Square from './components/Square';
import './App.css';
import { useState } from 'react';

function App() {
  const [nextPlayer, setNextPlayer] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || Winner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = nextPlayer ? "X" : "O";
    setSquares(nextSquares);
    setNextPlayer(!nextPlayer);
  }

  function Winner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = Winner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (nextPlayer ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="center">
        <div className="row-board">
          <Square valueInsideBox={squares[0]} Clicked={() => handleClick(0)} />
          <Square valueInsideBox={squares[1]} Clicked={() => handleClick(1)} />
          <Square valueInsideBox={squares[2]} Clicked={() => handleClick(2)} />
        </div>
        <div className="row-board">
          <Square valueInsideBox={squares[3]} Clicked={() => handleClick(3)} />
          <Square valueInsideBox={squares[4]} Clicked={() => handleClick(4)} />
          <Square valueInsideBox={squares[5]} Clicked={() => handleClick(5)} />
        </div>
        <div className="row-board">
          <Square valueInsideBox={squares[6]} Clicked={() => handleClick(6)} />
          <Square valueInsideBox={squares[7]} Clicked={() => handleClick(7)} />
          <Square valueInsideBox={squares[8]} Clicked={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

export default App;
