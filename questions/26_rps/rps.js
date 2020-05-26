//You are writing the game rock-paper-scissors.
/* 
RULES:
Scissors defeat Paper
Paper defeats Rock
Rock defeats Scissors 
*/

class RPS {
  //YOUR CODE HERE
  constructor(player1, player2) {
  //   this.players = {
  //     p1: {
  //       name: player1,
  //       move: '',
  //       score: 0,
  //     },
  //     p2: {
  //       name: player2,
  //       move: '',
  //       score: 0,
  //     }
  //   }
    const p1 = {
      name: player1,
      score: 0,
    };
    const p2 = {
      name: player2,
      score:0,
    }
    this.players = [player1, player2];
    this.scores = [0,0];
  }
  

  play(move1, move2) {
    if(move1 === move2) {
      return 'Tie game!';
    } else if (move1 === 'Rock') {
      if (move2 === 'Paper') {
        this.scores[1]++;
        return `${move2} defeats ${move1}, ${this.players[1]} wins this round.`;
      } else {
        this.scores[0]++;
        return `${move1} defeats ${move2}, ${this.players[0]} wins this round.`;
      }
    } else if (move1 === 'Paper') {
      if (move2 === 'Scissors') {
        this.scores[1]++;
        return `${move2} defeats ${move1}, ${this.players[1]} wins this round.`;
      } else {
        this.scores[0]++;
        return `${move1} defeats ${move2}, ${this.players[0]} wins this round.`;
      }

    } else if (move1 === 'Scissors') {
      if (move2 === 'Rock') {
        this.scores[1]++;
        return `${move2} defeats ${move1}, ${this.players[1]} wins this round.`;
      } else {
        this.scores[0]++;
        return `${move1} defeats ${move2}, ${this.players[0]} wins this round.`;
      }
    }
  }

  winner() {
    let winningIndex = 0;
    if (this.scores[1] > this.scores[winningIndex]) winningIndex = 1;
    return `The victor is ${this.players[winningIndex]} with ${this.scores[winningIndex]} points.`
  }
  
}

module.exports = { RPS };
