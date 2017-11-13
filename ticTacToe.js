var ticTacToe = () => {
  this.board = [
	 ['', '', ''],
	 ['', '', ''],
	 ['', '', '']
  ];
  this.player1 = 'x';
  this.player2 = 'o';
  this.player1Turn = true; // when false, it is player2's turn
  this.turn = () => {
    // accept input from current player
    // add input to proper position on board
    // redraw the board to the console
    // check for wins
    // this.player1Turn = !this.player1Turn
  }
  this.gameOver = false;
  this.checkForWin = (board) => {
    // check rows
    for (var i = 0; i < this.board.length; i++) {
      var row = this.board[i].join('');
      if (row === 'xxx') {
        console.log('player1 wins!');
        this.gameOver = true;
        return;
      } else if (row === 'ooo') {
        console.log('player2 wins!');
        this.gameOver = true;
        return;
      }
    }
    // check columns
    if (this.board[0][0] === 'x' && this.board[1][0] === 'x' && this.board[2][0] === 'x') {
      console.log('player1 wins!');
      this.gameOver = true;
      return;
    } else if (this.board[0][1] === 'x' && this.board[1][1] === 'x' && this.board[2][1] === 'x') {
      console.log('player1 wins!');
      this.gameOver = true;
      return;
    } else if (this.board[0][2] === 'x' && this.board[1][2] === 'x' && this.board[2][2] === 'x') {
      console.log('player1 wins!');
      this.gameOver = true;
      return;
    } else if (this.board[0][0] === 'o' && this.board[1][0] === 'o' && this.board[2][0] === 'o') {
      console.log('player2 wins!');
      this.gameOver = true;
      return;
    } else if (this.board[0][1] === 'o' && this.board[1][1] === 'o' && this.board[2][1] === 'o') {
      console.log('player2 wins!');
      this.gameOver = true;
      return;
    } else if (this.board[0][2] === 'o' && this.board[1][2] === 'o' && this.board[2][2] === 'o') {
      console.log('player2 wins!');
      this.gameOver = true;
      return;
    }

    // check diagonals
    if (this.board[0][0] === 'x' && this.board[1][1] === 'x' && this.board[2][2] === 'x') {
      console.log('player1 wins!');
      this.gameOver = true;
      return;
    } else if (this.board[0][2] === 'x' && this.board[1][1] === 'x' && this.board[2][0] === 'x') {
      console.log('player1 wins!');
      this.gameOver = true;
      return;
    } else if (this.board[0][0] === 'o' && this.board[1][1] === 'o' && this.board[2][2] === 'o') {
      console.log('player2 wins!');
      this.gameOver = true;
      return;
    } else if (this.board[0][2] === 'o' && this.board[1][1] === 'o' && this.board[2][0] === 'o') {
      console.log('player2 wins!');
      this.gameOver = true;
      return;
    }
  }
}