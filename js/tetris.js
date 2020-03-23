var playground = createPlayground();

console.log(playground);

// will add object positions to the emply playground array
function renderPositions() {
  objects.forEach( object => {
    object.position.forEach( ([rowIndex, cellIndex]) => {
      playground[rowIndex][cellIndex] = TYPE_COLORS[object.type]
    })
  });
}

function moveDown(obj) {
  console.log('moving down')
  // 1. get current object - done
  let currentObject = getCurrentObject();

  // 2. re-define objects - done
  let canMove = lowest(currentObject)[0][0] > 0 && !somethingLower(currentObject)
  currentObject.position.forEach(position => (canMove && (position[0] -= 1)))

  if (!canMove) {
    currentObject.state = 'static'
    let nextObj = TYPES[Math.floor(Math.random() * TYPES.length)]
    objects.push({type: nextObj, state: 'falling', position: INITIAL_POSITIONS[nextObj]})
  }

  playground = createPlayground();
  renderPlayground()
}

function moveRight(obj) {
  console.log('moving right')
  let currentObject = getCurrentObject();
  console.log(rightest(currentObject))
  let canMove = rightest(currentObject)[0][1] < playground[0].length-1 && !somethingRighter(rightest(currentObject))
  currentObject.position.forEach(position => (canMove && (position[1] += 1)))
  playground = createPlayground();
  renderPlayground()
}

function moveLeft(obj) {
  console.log('moving left')
  let currentObject = getCurrentObject();
  let canMove = leftest(currentObject)[0][1] > 0 && !somethingLefter(leftest(currentObject))
  currentObject.position.forEach(position => (canMove && (position[1] -= 1)))
  playground = createPlayground();
  renderPlayground()
}

function pauseGame() {
  console.log('pausing the game')
  clearInterval(gameInterval);
}

// function createObj() {}

// Events
// 1. move to bottom
// 2. move right
// 3. move left
// 4. pause
// 5. game over
// 6. (re)render playground

renderPlayground()

// interval 1 second
var gameInterval = setInterval(() => {
  moveDown();
}, 4000);