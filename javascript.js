function togglePlayer() {
  if (currPlayer == 1) {
    currPlayer = 2;
    otherPlayer = 1;
  }
  else {
    currPlayer = 1;
    otherPlayer = 2;
  }
}


function addValue(cell) {
  cell.innerHTML = "X";
  if (cell.classList.contains("blank")) {
    cell.classList.replace("blank","notBlank");
  }
}


function getPos(cell) {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j] == cell) {
        return [j,i];
      }//if
    }//for
  }//for
}//getPos

function checkVictory(cell) {
  var cellX = getPos(cell)[0];
  var cellY = getPos(cell)[1];
  var lose = true;

  console.log("This is cell: ("+cellY+","+cellX+")");
  //check for coloumn
  for (let i = 0; i < 3; i++) {
    if (cells[i][cellX].classList.contains("blank")) {
      lose = false;
      break;
    }
  }

  if (lose) {
    alert("Player "+currPlayer+" has Lost!");
    resetBoard();
    return 0;
  }

  //check for rows
  lose = true;
  for (let i = 0; i < 3; i++) {
    if (cells[cellY][i].classList.contains("blank")) {
      // console.log("In X :"+i);
      lose = false;
      break;
    }
  }

  if (lose) {
    alert("Player "+currPlayer+" has Lost!");
    resetBoard();
    return 0;
  }

  //check for diagonal
  lose = true;
  if (cellX == cellY) {
    for (let i = 0; i < 3; i++) {
      if (cells[i][i].classList.contains("blank")) {
        // console.log("In X :"+i);
        lose = false;
        break;
      }
    }

    if (lose) {
      alert("Player "+currPlayer+" has Lost!");
      resetBoard();
      return 0;
    }
  }

  lose = true;
  if (cellX+cellY == 2) {
    for (let i = 0; i < 3; i++) {
      if (cells[i][2-i].classList.contains("blank")) {
        // console.log("In X :"+i);
        lose = false;
        break;
      }//if
    }//for

    if (lose) {
      alert("Player "+currPlayer+" has Lost!");
      resetBoard();
      return 0;
    }//if
  }//if
}//checkVictory

function resetBoard() {
  var count = 1;
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      cells[i][j].classList.replace("notBlank","blank");
      cells[i][j].innerHTML = "";
      count++;
    }
  }
}//resetBoard
