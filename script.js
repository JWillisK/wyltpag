const cells = document.querySelectorAll('.cell');
let currentPlayer = 'x';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '') {
      cell.classList.add(currentPlayer);
      cell.textContent = currentPlayer;
      currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
      checkWinner();
    }
  });
});

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let winner = null;

  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (cells[a].textContent !== '' && cells[a].
