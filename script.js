const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const setMark = (index, mark) => {
    if (board[index] !== "") return false;
    board[index] = mark;
    return true;
  };

  const reset = () => {
    board.fill("");
  };

  return {
    getBoard,
    setMark,
    reset,
  };
})();
const Player = (name, mark) => {
  return { name, mark };
};
const GameController= (function () {
  let players = [];
  let currentPlayerIndex = 0;
  let gameOver = false;
  let roundCounter = 0;

  const startGame = (player1Name, player2Name) => {
    players = [
      Player(player1Name, "X"),
      Player(player2Name, "O"),
    ];
    roundCounter = 0;
    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.reset();
    console.log("Game started");
    printBoard();
  };

  const playRound = (index) => {
    if (gameOver) return;
    
    const currentPlayer = players[currentPlayerIndex];
    const success = Gameboard.setMark(index, currentPlayer.mark);
    
    

    if (!success) {
      console.log("Spot already taken!");
      return;
    }
roundCounter = roundCounter + 1;

    printBoard();

    if (checkWin(currentPlayer.mark)) {
      console.log(`${currentPlayer.name} wins!`);
      gameOver = true;
      return;
    }

if (roundCounter === 9) {
        console.log("It's a tie!");
        gameOver=true;
        return;
    }
    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;

    
  };

  const checkWin = (mark) => {
    const board = Gameboard.getBoard();
    const wins = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6],
    ];

    return wins.some(combo =>
      combo.every(index => board[index] === mark)
    );
  };

  

  const printBoard = () => {
    const b = Gameboard.getBoard();
    console.log(`
      ${b[0]} | ${b[1]} | ${b[2]}
      ---------
      ${b[3]} | ${b[4]} | ${b[5]}
      ---------
      ${b[6]} | ${b[7]} | ${b[8]}
    `);
  };

  return {
    startGame,
    playRound,
  };
})();

const DisplayController = (function () {
  const cells = document.querySelectorAll(".cell");

  const render = () => {
    const board = Gameboard.getBoard();
    cells.forEach((cell, index) => {
      cell.textContent = board[index];
    });
  };

  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      const index = cell.dataset.index;
      GameController.playRound(Number(index));
      render();
    });
  });

  return { render };
})();

GameController.startGame("Player 1", "Player 2");
DisplayController.render();
