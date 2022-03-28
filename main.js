let score1 = 0
let score2 = 0

function team1() {
  let newScore = document.getElementById(score1)
  updateScore1()
}

function updateScore1(newscore) {
  score1++
  document.getElementById('score1').innerText = score1
}

function team2() {
  let newScore = document.getElementById(score2)
  updateScore2()
}

function updateScore2(newscore) {
  score2++
  document.getElementById('score2').innerText = score2
}

function resetScore() {
  document.getElementById(score1, score2)
  score1 = 0
  score2 = 0
  document.getElementById('score1').innerText = score1
  document.getElementById('score2').innerText = score2
}


// function team2() {
//   console.log(score2)
// }