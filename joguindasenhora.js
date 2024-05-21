let board = ['','','','','','','','',''];
let currentPlayer = 'X';
let isGameActive = false;

let copia = document.getElementById('print');
const cells = document.getElementsByClassName('cell');

function addClickEvents() {
    isGameActive = true;
    for(let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', clickEvent, {once: true});
    }
}

function clickEvent(e) {
    const id = e.target.id[e.target.id.length - 1];
    if(board[id] == '' && isGameActive) {
        board[id] = currentPlayer;
        e.target.innerHTML = currentPlayer;
        checkForWin();
        switchPlayer();
    }
}

function switchPlayer() {
    if(currentPlayer == 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}

function checkForWin() {
    copia = document.getElementById('print');
    checkRows();
    checkColumns();
    checkDiagonals();

}

function checkRows() {
    for(let i = 0; i <= 6; i += 3) {
        if(board[i] != '' && board[i] == board[i + 1] && board[i] == board[i + 2]) {
            copia.innerHTML = `${board[i]} wins!`;
            isGameActive = false;
            return;
        }
    }
}

function checkColumns() {
    for(let i = 0; i <= 2; i++) {
        if(board[i] != '' && board[i] == board[i + 3] && board[i] == board[i + 6]) {
            copia.innerHTML = `${board[i]} wins!`;
            isGameActive = false;
            return;
        }
    }
}

function checkDiagonals() {
    if(board[0] != '' && board[0] == board[4] && board[0] == board[8]) {
        copia.innerHTML = `${board[0]} wins!`;
        isGameActive = false;
        return;
    }
    if(board[2] != '' && board[2] == board[4] && board[2] == board[6]) {
        copia.innerHTML = `${board[2]} wins!`;
        isGameActive = false;
        return;
    }
}
function resetGame() {
    // Reinicia o tabuleiro
    board = ['','','','','','','','',''];
  
    // Reinicia o jogador atual
    currentPlayer = 'X';
  
    // Reinicia o status do jogo
    isGameActive = false;
  
    // Limpa a mensagem de copia
    copia.innerHTML = '';
  
    // Remove os eventos de clique das células
    for(let i = 0; i < cells.length; i++) {
      cells[i].innerHTML = '';
      cells[i].removeEventListener('click', clickEvent);
    }
  
    // Adiciona os eventos de clique nas células novamente
    addClickEvents();
  }
  