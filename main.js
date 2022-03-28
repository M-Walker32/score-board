let team = []
let score1 = 0
let score2 = 0

function resetScore() {
  document.getElementById(score1, score2)
  score1 = 0
  score2 = 0
  document.getElementById('score1').innerText = score1
  document.getElementById('score2').innerText = score2
}

function pointTeam1() {
  let newScore = document.getElementById(score1)
  updateScore1()
}

function threePointTeam1() {
  let newScore = document.getElementById(score1)
  updateScore1()
  updateScore1()
  updateScore1()
}

function fivePointTeam1() {
  let newScore = document.getElementById(score1)
  updateScore1()
  updateScore1()
  updateScore1()
  updateScore1()
  updateScore1()
}

function updateScore1(newscore) {
  score1++
  document.getElementById('score1').innerText = score1
}

function minusPointTeam1() {
  let newScore = document.getElementById(score1)
  subtractPoint()
}

function subtractPoint(newscore) {
  score1--
  document.getElementById('score1').innerText = score1
}


function scorePlus3(newscore) {
  score1 += 3
  document.getElementById('score1').innerText = score1
}

function scorePlus5(newscore) {
  score1 += 5
  document.getElementById('score1').innerText = score1
}

function updateScore2(newscore) {
  score2++
  document.getElementById('score2').innerText = score2
}

function pointTeam2() {
  let newScore = document.getElementById(score2)
  updateScore2()
}

function threePointTeam2() {
  let newScore = document.getElementById(score2)
  updateScore2()
  updateScore2()
  updateScore2()
}

function fivePointTeam2() {
  let newScore = document.getElementById(score2)
  updateScore2()
  updateScore2()
  updateScore2()
  updateScore2()
  updateScore2()
}

function minusPointTeam2() {
  let newScore = document.getElementById(score2)
  subtractPoint2()
}

function subtractPoint2(newscore) {
  score2--
  document.getElementById('score2').innerText = score2
}

// function addTeam(event) {
//   let form = event.target

//   let team = {
//     id: generateId(),
//     name: form.teamName.value,
//   }
//   team.push(team)
//   saveTeam()
//   form.reset()
// }

// function drawTeam() {
//   let teamElement = document.getElementById('team')
//   let template = ""
//   teamElement.forEach(team => {
//     template ==
//       `<div class="p-4 team-card m-2">
//             <h1>${team.name}</h1>
//             <h2>Score:<span id="${teamName}.score">${teamName}</span></h2>
//             <button onclick=onePoint()>One Point</button>
//             <button onclick=threePoints()>Three Points</button>
//             <button onclick=fivePoints()>Five Points</button>
//           </div> `})
//   teamsElement.innerHTML = Template
//   console.log("Team: ${team.name}")
// }
