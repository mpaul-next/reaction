// set up our canvas to fill the screen

let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// game logic

let msUntilReady = 2000 + (Math.random() * 3000) // 2-5 seconds of waiting
let msUntilLate = msUntilReady + 500 // half a second to react

let start = new Date()
let ready = new Date(start.getTime() + msUntilReady)
let late = new Date(start.getTime() + msUntilLate)

window.addEventListener('keydown', event => {
  console.log(event)
  if (event.code == 'Enter') {
    let now = new Date()
    if (now < ready) {
      alert('too early!')
    } else if (now > late) {
      alert('too slow!')
    } else {
      alert('YOU WIN!!!')
    }
  }
})

// todo how to make this graphical?

function drawCircle() {
  ctx.fillStyle = 'green'
  ctx.beginPath()
  ctx.arc(
    canvas.width/2,
    canvas.height/2,
    canvas.height/4,
    0,
    Math.PI * 2,
    false
  )
  ctx.fill()
}

function drawSquare() {
  // todo disappear
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = 'red'
  ctx.fillRect(
    canvas.width/2 - 50,
    canvas.height/2 - 50,
    100,
    100
  )
}

setTimeout(() => drawCircle(), msUntilReady)
setTimeout(() => drawSquare(), msUntilLate)






















//
