// Rover Object Goes Here
// ======================
var rover = { 
    direction: 'N',
    x: 5,
    y: 5, 
    travelLog: []
  };
  // ======================
  const X_MAX = 9;
  const Y_MAX = 9;
  var directions = { 'N': 'North', 'E': 'East', 'S': 'South', 'W': 'West'};
  var obstacles = {'R': 'Rock', 'T': 'Tree'}
  var grid = [ 
    //0 . 1 . 2 . 3 . 4 . 5 . 6 . 7 . 8 . 9  
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],//0
    [' ',' ',' ',' ',' ','T',' ',' ',' ',' '],//1
    [' ',' ',' ',' ','T','T','T',' ',' ',' '],//2
    [' ','R','R',' ',' ',' ',' ',' ',' ',' '],//3
    [' ',' ','R',' ',' ',' ',' ',' ',' ',' '],//4
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],//5
    [' ',' ',' ',' ','T',' ',' ',' ',' ',' '],//6
    [' ',' ',' ',' ','T',' ',' ',' ',' ',' '],//7
    [' ',' ',' ',' ','T',' ',' ',' ',' ',' '],//8
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']//9
  ];
  
  function printTravelLog(rover){
    for (position of rover.travelLog) {
    console.log('['+position.x+','+position.y+']');
    }
  }
  
  function turnLeft(rover){
    console.log("turnLeft was called!");
    switch(rover.direction){
      case 'N': 
        rover.direction = 'W';
        break;
      case 'E': 
        rover.direction = 'N';
        break;
      case 'S': 
        rover.direction = 'E';
        break;
      case 'W': 
        rover.direction = 'S';
        break;
    }
    printStatus(rover);
  }
  
  function turnRight(rover){
    console.log("turnRight was called!");
    switch(rover.direction){
      case 'N': 
        rover.direction = 'E';
        break;
      case 'E': 
        rover.direction = 'S';
        break;
      case 'S': 
        rover.direction = 'W';
        break;
      case 'W': 
        rover.direction = 'N';
        break;
    }
    printStatus(rover);
  }
  
  function moveForward(rover){
    console.log("moveForward was called");
    switch(rover.direction){
      case 'N':
        if(rover.y < 1) {
          console.error('Illegal move!');
           break;
        }
        var obstacle = grid[rover.y - 1][rover.x ];
        if(obstacle != ' ') {
           console.error('Obstacle found: ' + obstacles[obstacle]);
          break;
        }
        rover.travelLog.push({x:rover.x,y:rover.y});
        rover.y -= 1;
        break;
      case 'E': 
        if(rover.x == X_MAX) {
          console.error('Illegal move!');
          break;
        }
        var obstacle = grid[rover.y][rover.x + 1];
        if(obstacle != ' ') {
           console.error('Obstacle found: ' + obstacles[obstacle]);
          break;
        }
        rover.travelLog.push({x:rover.x,y:rover.y});
        rover.x +=1;
        break;
      case 'S':
        if(rover.y == Y_MAX) {
          console.error('Illegal move!');
          break;
        }
        var obstacle = grid[rover.y + 1][rover.x];
        if(obstacle != ' ') {
           console.error('Obstacle found: ' + obstacles[obstacle]);
          break;
        }
        rover.travelLog.push({x:rover.x,y:rover.y});
        rover.y += 1;
        break;
      case 'W': 
        if(rover.x < 1) {
          console.error('Illegal move!');
          break;
        }
        var obstacle = grid[rover.y][rover.x - 1];
        if(obstacle != ' ') {
           console.error('Obstacle found: ' + obstacles[obstacle]);
          break;
        }
        rover.travelLog.push({x:rover.x,y:rover.y});
        rover.x -= 1;
        break;
    }
    printStatus(rover);
  }
  
  function moveBackward(rover){
    console.log("moveBackward was called");
    switch(rover.direction){
      case 'N':
        if(rover.y == Y_MAX) {
          console.error('Illegal move!');
           break;
        }
        var obstacle = grid[rover.y + 1][rover.x ];
        if(obstacle != ' ') {
           console.error('Obstacle found: ' + obstacles[obstacle]);
          break;
        }
        rover.travelLog.push({x:rover.x,y:rover.y});
        rover.y += 1;
        break;
      case 'E': 
        if(rover.y < 1) {
          console.error('Illegal move!');
          break;
        }
        var obstacle = grid[rover.y][rover.x - 1];
        if(obstacle != ' ') {
           console.error('Obstacle found: ' + obstacles[obstacle]);
          break;
        rover.travelLog.push({x:rover.x,y:rover.y});
        rover.x -=1;
        break;
      case 'S':
        if(rover.x < 1) {
          console.error('Illegal move!');
          break;
        }
        var obstacle = grid[rover.y - 1][rover.x];
        if(obstacle != ' ') {
           console.error('Obstacle found: ' + obstacles[obstacle]);
          break;
        }
        rover.travelLog.push({x:rover.x,y:rover.y});
        rover.y -= 1;
        break;
      case 'W': 
        if(rover.x == X_MAX) {
          console.error('Illegal move!');
          break;
        }
        var obstacle = grid[rover.y][rover.x + 1];
        if(obstacle != ' ') {
           console.error('Obstacle found: ' + obstacles[obstacle]);
          break;
        }
        rover.travelLog.push({x:rover.x,y:rover.y});
        rover.x += 1;
        break;
    }
    printStatus(rover);
    return 0;
  }
  
  function printStatus(rover) {
    console.log('Direction: ' + 
      directions[rover.direction]);
      console.log('Position: ' + rover.x + ',' + rover.y) 
  }
  
  function moveRover(commands) {
    for(command of commands) {
      switch(command){
          case 'r': 
        turnRight(rover);
        break;
          case 'l': 
        turnLeft(rover);
        break;
        case 'f': 
          moveForward(rover);
        break;
          case 'b': 
          moveBackward(rover);
        break;
        default:
          console.error('Illegal command: ' + command);
          break;
      }
    }
    //printTravelLog(rover);
    //printStatus(rover);
    return 'done!';
  }
  