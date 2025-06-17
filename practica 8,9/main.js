
    const board = document.getElementById('board');
    const cells = board.querySelectorAll('.cell');
    const turnIndicator = document.querySelector('.turn-indicator .icon-x');
    const restartBtn = document.getElementById('restartBtn');
    const scoreX = document.getElementById('scoreX');
    const scoreO = document.getElementById('scoreO');
    const scoreTies = document.getElementById('scoreTies');

    let boardState = Array(9).fill(null);
    let currentPlayer = 'X';
    let scores = { X: 0, O: 0, Ties: 0 };
    let gameOver = false;

    function checkWinner() {
      const wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
      ];

      for (const combo of wins) {
        const [a,b,c] = combo;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
          return boardState[a];
        }
      }
      return null;
    }

    function isBoardFull() {
      return boardState.every(cell => cell !== null);
    }

    function computerMove() {
      // Movimiento CPU básico: elige un espacio vacío al azar
      const emptyIndices = boardState.map((v,i) => v === null ? i : null).filter(i => i !== null);
      if(emptyIndices.length === 0) return;

      // Aquí puedes mejorar el AI para que sea más inteligente si quieres
      const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      makeMove(randomIndex, 'O');
    }

    function makeMove(index, player) {
      if (gameOver || boardState[index] !== null) return;

      boardState[index] = player;
      const cell = cells[index];
      cell.classList.add(player.toLowerCase());
      cell.textContent = player;

      const winner = checkWinner();

      if (winner) {
        gameOver = true;
        scores[winner]++;
        updateScores();
        alert(`¡Ganador: ${winner}!`);
        disableBoard();
        return;
      }

      if (isBoardFull()) {
        gameOver = true;
        scores.Ties++;
        updateScores();
        alert('¡Empate!');
        disableBoard();
        return;
      }

      // Cambiar turno
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      turnIndicator.textContent = currentPlayer;

      if (currentPlayer === 'O' && !gameOver) {
        setTimeout(computerMove, 400);
      }
    }

    function disableBoard() {
      cells.forEach(cell => cell.classList.add('disabled'));
    }

    function enableBoard() {
      cells.forEach(cell => {
        cell.classList.remove('disabled');
        cell.textContent = '';
        cell.classList.remove('x','o');
      });
      gameOver = false;
      boardState.fill(null);
      currentPlayer = 'X';
      turnIndicator.textContent = currentPlayer;
    }

    function updateScores() {
      scoreX.textContent = `X (YOU) ${scores.X}`;
      scoreO.textContent = `O (CPU) ${scores.O}`;
      scoreTies.textContent = `TIES ${scores.Ties}`;
    }

    // Event listeners
    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        if (currentPlayer === 'X' && !gameOver) {
          makeMove(parseInt(cell.dataset.index), 'X');
        }
      });
      cell.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && currentPlayer === 'X' && !gameOver) {
          makeMove(parseInt(cell.dataset.index), 'X');
        }
      });
    });

    restartBtn.addEventListener('click', () => {
      enableBoard();
    });

    // Inicializar juego
    enableBoard();
    updateScores();

