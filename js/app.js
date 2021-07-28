const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
let squares = []
let score = 0

// 28 by 28 grid -- 28 rows and 28 columns = 784 squares

// Color Code: 
// 0 - pac dots
// 1 - wall
// 2 - ghost lair
// 3 - power pellet
// 4 empty

const layout = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
  4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
  1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]

// looping through our grid and creating a new square each time
function createGrid(){
  for(let i = 0; i < layout.length; i++){
    const square = document.createElement('div')
    // add a new square each time 784 times
    grid.appendChild(square)
    // put square in squares array
    squares.push(square)
    // add classes to change styles using if else statement
    if(layout[i] === 0){
      squares[i].classList.add('pac-dot')
    } else if(layout[i] === 1){
      squares[i].classList.add('wall')
    } else if(layout[i] === 2){
      squares[i].classList.add('ghost-lair')
    } else if(layout[i] === 3){
      squares[i].classList.add('power-pellet')
    } 
  }
}
createGrid()

// console.log(squares.length)


// where is pacman? 

// place him at 500th square
let pacmanCurrentIndex = 490;

// put him in the squares array at the assigned square
squares[pacmanCurrentIndex].classList.add('pacman')

// function checks to see if pacman is within his correct parts on the grid 
function control(e) {
  // removing the pacman css from squares as he moves forward
  squares[pacmanCurrentIndex].classList.remove('pacman')
  
  switch(e.keyCode){
    case 40:
      if(
        !squares[pacmanCurrentIndex + 28].classList.contains('ghost-lair') &&
        !squares[pacmanCurrentIndex + width].classList.contains('wall')&&
        pacmanCurrentIndex + width <= 784
        ) pacmanCurrentIndex +=28
      console.log('pressed down')
    break
    case 38:
      if(
        !squares[pacmanCurrentIndex -28].classList.contains('ghost-lair') &&
        !squares[pacmanCurrentIndex - width].classList.contains('wall')&&
        pacmanCurrentIndex - width >= 0
        ) pacmanCurrentIndex -=28
      console.log('pressed up')
    break
    case 37:
      if(
        !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair') &&
        !squares[pacmanCurrentIndex -1].classList.contains('wall')&&
        pacmanCurrentIndex % width !== 0
        ) pacmanCurrentIndex -=1
        if
         (pacmanCurrentIndex === 364 ){
            pacmanCurrentIndex = 391
          }
        
      console.log('pressed left')
    break
    case 39:
      // ???
      if(
        !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair') &&
        !squares[pacmanCurrentIndex +1].classList.contains('wall')&&
        pacmanCurrentIndex % width < 28 -1
        ) pacmanCurrentIndex +=1
        if(pacmanCurrentIndex === 391){
          pacmanCurrentIndex = 364
        }
      console.log('pressed right')
    break
  }
  // adding pacman css as he moves forward on the keys pressed
  squares[pacmanCurrentIndex].classList.add('pacman')
  eatPacdot()
}

document.addEventListener('keyup', control)

function eatPacdot(){
  if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
    squares[pacmanCurrentIndex].classList.remove('pac-dot')
    score++;
    scoreDisplay.innerHTML = score
  }
}

class Ghost {
  constructor(className, startIndex, speed){
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerId = NaN;
  }
}

const ghosts = [
  new Ghost('blinky', 348, 250),
  new Ghost('pinky', 376, 400),
  new Ghost('inky', 351, 300),
  new Ghost('clyde', 379, 500)
]

// place ghosts on grid
ghosts.forEach(ghost => {
  squares[ghost.currentIndex].classList.add(ghost.className);
  squares[ghost.currentIndex].classList.add('ghost')
})


 // move ghosts 
ghosts.forEach(ghost => moveGhosts(ghost))

function moveGhosts(ghost){
  const directions = [-1, +1, -28, +28]
  let direction = directions[Math.floor(Math.random() * directions.length)]
  console.log(direction)

  // grabbing each ghost and applying their speed
  ghost.timerId = setInterval(function(){
    if(
      // pacman can't keep going in the direction if classes are wall/ghost
      !squares[ghost.currentIndex + direction].classList.contains('wall') &&
      !squares[ghost.currentIndex + direction].classList.contains('ghost')
      ) {
      
      squares[ghost.currentIndex].classList.remove(ghost.className)
      squares[ghost.currentIndex].classList.remove('ghost')
      
      ghost.currentIndex += direction
      squares[ghost.currentIndex].classList.add(ghost.className)
      squares[ghost.currentIndex].classList.add('ghost')
     
      } else direction = directions[Math.floor(Math.random() * directions.length)]

   
  }, ghost.speed)
}

// clearInterval(ghost.speed)