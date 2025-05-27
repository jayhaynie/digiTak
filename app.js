const startButton = document.getElementById("startButton");
const bodyElement = document.getElementById("bodyElement");
const gameBoard = document.getElementById("gameBoard");
const gameBoardDiv = document.getElementById("gameBoardDiv");

const lightPathIcon = document.getElementById("lightPathIcon");
const lightWallIcon = document.getElementById("lightWallIcon");
const lightCapIcon = document.getElementById("lightCapIcon");
const darkPathIcon = document.getElementById("darkPathIcon");
const darkWallIcon = document.getElementById("darkWallIcon");
const darkCapIcon = document.getElementById("darkCapIcon");
const lightInfoIcon = document.getElementById("lightInfoIcon");
const darkInfoIcon = document.getElementById("darkInfoIcon");
const darkStoneAmount = document.getElementById("darkStoneAmount");
const lightStoneAmount = document.getElementById("lightStoneAmount");
const darkCapAmount = document.getElementById("darkCapAmount");
const lightCapAmount = document.getElementById("lightCapAmount");
const lightStoneAmountDiv = document.getElementById("lightStoneAmountDiv");
const darkStoneAmountDiv = document.getElementById("darkStoneAmountDiv");
const lightCapAmountDiv = document.getElementById("lightCapAmountDiv");
const darkCapAmountDiv = document.getElementById("darkCapAmountDiv");


startButton.addEventListener("click", function () {
  bodyElement.style.backgroundImage = "url('images/background.png')";
  document.getElementById("selectDarkTeam").style.display = "none";
  document.getElementById("selectDarkTeamText").style.display = "none";
  document.getElementById("selectLightTeam").style.display = "none";
  document.getElementById("selectLightTeamText").style.display = "none";
  document.getElementById("boardSizeDiv").style.display = "none";
  document.getElementById("startButton").style.display = "none";
  document.getElementById("gameBoardDiv").style.display = "block";

  lightPathIcon.style.display = "block";
  lightWallIcon.style.display = "block";
  lightCapIcon.style.display = "block";
  darkPathIcon.style.display = "block";
  darkWallIcon.style.display = "block";
  darkCapIcon.style.display = "block";
  lightInfoIcon.style.display = "block";
  darkInfoIcon.style.display = "block";
  lightStoneAmountDiv.style.display = "block";
  darkStoneAmountDiv.style.display = "block";
  lightCapAmountDiv.style.display = "block";
  darkCapAmountDiv.style.display = "block";

  if (boardSelect.three === 1) {
    gameBoard.src = "images/grid3.png";
    lightStoneAmount.textContent = "x12";
    darkStoneAmount.textContent = "x12";

    for (let i = 1; i < 10; i++) {
      const place = document.createElement('img');
      place.src = "images/placementSquare.png";
      place.id = `image-${i + 1}`;
      place.className = "placeSquare"

      gameBoardDiv.appendChild(place);

      if (i < 4) {
        // positioning for first 3 left to right
        place.style.height = "100px";
        place.style.width = "100px";
        place.style.left = `${180 + (231 * (i - 1))}px`;
        place.style.top = "180px";
      } else if (i < 7) {
        // positioning for second 3 left to right
        place.style.height = "100px";
        place.style.width = "100px";
        place.style.left = `${180 + (231 * (i - 4))}px`;
        place.style.top = "411px";
      } else {
        // positiong for third 3 left to right
        place.style.height = "100px";
        place.style.width = "100px";
        place.style.left = `${180 + (231 * (i - 7))}px`;
        place.style.top = "642px";
      }
    }
  };
  if (boardSelect.four === 1) {
    gameBoard.src = "images/grid4.png";
  };
  if (boardSelect.five === 1) {
    gameBoard.src = "images/grid5.png";
  };
  if (boardSelect.six === 1) {
    gameBoard.src = "images/grid6.png";
  };
  if (boardSelect.seven === 1) {
    gameBoard.src = "images/grid7.png";
  };
  if (boardSelect.eight === 1) {
    gameBoard.src = "images/grid8.png";
  };

  console.log(teamSelect);
  console.log(boardSelect);
});

const selectDarkTeam = document.getElementById("selectDarkTeam");
const selectDarkTeamText = document.getElementById("selectDarkTeamText");
const selectLightTeam = document.getElementById("selectLightTeam");
const selectLightTeamText = document.getElementById("selectLightTeamText");

let teamSelect = {
  dark: 1,
  light: 0
};

selectDarkTeam.addEventListener("click", function() {
  selectDarkTeam.style.border = "4px solid aqua";
  selectLightTeam.style.border = "transparent";

  teamSelect.dark = 1;
  teamSelect.light = 0;

  console.log(teamSelect);
});

selectDarkTeamText.addEventListener("click", function() {
  selectDarkTeam.style.border = "4px solid aqua";
  selectLightTeam.style.border = "transparent";

  teamSelect.dark = 1;
  teamSelect.light = 0;

  console.log(teamSelect);
});

selectLightTeam.addEventListener("click", function() {
  selectDarkTeam.style.border = "transparent";
  selectLightTeam.style.border = "4px solid aqua";

  teamSelect.light = 1;
  teamSelect.dark = 0;

  console.log(teamSelect);
});

selectLightTeamText.addEventListener("click", function() {
  selectDarkTeam.style.border = "transparent";
  selectLightTeam.style.border = "4px solid aqua";

  teamSelect.light = 1;
  teamSelect.dark = 0;

  console.log(teamSelect);
});

const boardSizeButton3 = document.getElementById("boardSizeButton3");
const boardSizeButton4 = document.getElementById("boardSizeButton4");
const boardSizeButton5 = document.getElementById("boardSizeButton5");
const boardSizeButton6 = document.getElementById("boardSizeButton6");
const boardSizeButton7 = document.getElementById("boardSizeButton7");
const boardSizeButton8 = document.getElementById("boardSizeButton8");

let boardSelect = {
  three: 1,
  four: 0,
  five: 0,
  six: 0,
  seven: 0,
  eight: 0
};

boardSizeButton3.addEventListener("click", function() {
  boardSizeButton3.style.borderColor = "aqua";
  boardSizeButton4.style.borderColor = "buttonborder";
  boardSizeButton5.style.borderColor = "buttonborder";
  boardSizeButton6.style.borderColor = "buttonborder";
  boardSizeButton7.style.borderColor = "buttonborder";
  boardSizeButton8.style.borderColor = "buttonborder";

  boardSelect.three = 1;
  boardSelect.four = 0;
  boardSelect.five = 0;
  boardSelect.six = 0;
  boardSelect.seven = 0;
  boardSelect.eight = 0;

  console.log(boardSelect);
});

boardSizeButton4.addEventListener("click", function() {
  boardSizeButton3.style.borderColor = "buttonborder";
  boardSizeButton4.style.borderColor = "aqua";
  boardSizeButton5.style.borderColor = "buttonborder";
  boardSizeButton6.style.borderColor = "buttonborder";
  boardSizeButton7.style.borderColor = "buttonborder";
  boardSizeButton8.style.borderColor = "buttonborder";

  boardSelect.three = 0;
  boardSelect.four = 1;
  boardSelect.five = 0;
  boardSelect.six = 0;
  boardSelect.seven = 0;
  boardSelect.eight = 0;

  console.log(boardSelect);
});

boardSizeButton5.addEventListener("click", function() {
  boardSizeButton3.style.borderColor = "buttonborder";
  boardSizeButton4.style.borderColor = "buttonborder";
  boardSizeButton5.style.borderColor = "aqua";
  boardSizeButton6.style.borderColor = "buttonborder";
  boardSizeButton7.style.borderColor = "buttonborder";
  boardSizeButton8.style.borderColor = "buttonborder";

  boardSelect.three = 0;
  boardSelect.four = 0;
  boardSelect.five = 1;
  boardSelect.six = 0;
  boardSelect.seven = 0;
  boardSelect.eight = 0;

  console.log(boardSelect);
});

boardSizeButton6.addEventListener("click", function() {
  boardSizeButton3.style.borderColor = "buttonborder";
  boardSizeButton4.style.borderColor = "buttonborder";
  boardSizeButton5.style.borderColor = "buttonborder";
  boardSizeButton6.style.borderColor = "aqua";
  boardSizeButton7.style.borderColor = "buttonborder";
  boardSizeButton8.style.borderColor = "buttonborder";

  boardSelect.three = 0;
  boardSelect.four = 0;
  boardSelect.five = 0;
  boardSelect.six = 1;
  boardSelect.seven = 0;
  boardSelect.eight = 0;

  console.log(boardSelect);
});

boardSizeButton7.addEventListener("click", function() {
  boardSizeButton3.style.borderColor = "buttonborder";
  boardSizeButton4.style.borderColor = "buttonborder";
  boardSizeButton5.style.borderColor = "buttonborder";
  boardSizeButton6.style.borderColor = "buttonborder";
  boardSizeButton7.style.borderColor = "aqua";
  boardSizeButton8.style.borderColor = "buttonborder";

  boardSelect.three = 0;
  boardSelect.four = 0;
  boardSelect.five = 0;
  boardSelect.six = 0;
  boardSelect.seven = 1;
  boardSelect.eight = 0;

  console.log(boardSelect);
});

boardSizeButton8.addEventListener("click", function() {
  boardSizeButton3.style.borderColor = "buttonborder";
  boardSizeButton4.style.borderColor = "buttonborder";
  boardSizeButton5.style.borderColor = "buttonborder";
  boardSizeButton6.style.borderColor = "buttonborder";
  boardSizeButton7.style.borderColor = "buttonborder";
  boardSizeButton8.style.borderColor = "aqua";

  boardSelect.three = 0;
  boardSelect.four = 0;
  boardSelect.five = 0;
  boardSelect.six = 0;
  boardSelect.seven = 0;
  boardSelect.eight = 1;

  console.log(boardSelect);
});

let clickedIcon = {
  lightPath: 1,
  lightWall: 0,
  lightCap: 0,
  lightInfo: 0,
  darkPath: 1,
  darkWall: 0,
  darkCap: 0,
  darkInfo: 0
};

lightInfoIcon.addEventListener("click", function() {
  if (clickedIcon.lightInfo === 0) {
    clickedIcon.lightInfo = 1;
    lightInfoIcon.style.border = "4px solid aqua";
    clickedIcon.darkInfo = 1;
    darkInfoIcon.style.border = "4px solid aqua";

    document.getElementById("infoPageDiv").style.display = "block";
  } else {
    clickedIcon.lightInfo = 0;
    lightInfoIcon.style.border = "transparent";
    clickedIcon.darkInfo = 0;
    darkInfoIcon.style.border = "transparent";

    document.getElementById("infoPageDiv").style.display = "none";
  };
  console.log(clickedIcon);
});
darkInfoIcon.addEventListener("click", function() {
  if (clickedIcon.darkInfo === 0) {
    clickedIcon.darkInfo = 1;
    darkInfoIcon.style.border = "4px solid aqua";
    clickedIcon.lightInfo = 1;
    lightInfoIcon.style.border = "4px solid aqua";

    document.getElementById("infoPageDiv").style.display = "block";
  } else {
    clickedIcon.darkInfo = 0;
    darkInfoIcon.style.border = "transparent";
    clickedIcon.lightInfo = 0;
    lightInfoIcon.style.border = "transparent";

   document.getElementById("infoPageDiv").style.display = "none";
  }; 
  console.log(clickedIcon);
});

lightPathIcon.addEventListener("click", function() {
  if (clickedIcon.lightPath === 0) {
    clickedIcon.lightPath = 1;
    clickedIcon.lightWall = 0;
    clickedIcon.lightCap = 0;

    lightPathIcon.style.border = "4px solid aqua";
    lightWallIcon.style.border = "transparent";
    lightCapIcon.style.border = "transparent";

    
  };
  console.log(clickedIcon);
});
lightWallIcon.addEventListener("click", function() {
  if (clickedIcon.lightWall === 0) {
    clickedIcon.lightPath = 0;
    clickedIcon.lightWall = 1;
    clickedIcon.lightCap = 0;

    lightPathIcon.style.border = "transparent";
    lightWallIcon.style.border = "4px solid aqua";
    lightCapIcon.style.border = "transparent";

    
  };
  console.log(clickedIcon);
});
lightCapIcon.addEventListener("click", function() {
  if (clickedIcon.lightCap === 0) {
    clickedIcon.lightPath = 0;
    clickedIcon.lightWall = 0;
    clickedIcon.lightCap = 1;

    lightPathIcon.style.border = "transparent";
    lightWallIcon.style.border = "transparent";
    lightCapIcon.style.border = "4px solid aqua";

    
  };
  console.log(clickedIcon);
});
darkPathIcon.addEventListener("click", function() {
  if (clickedIcon.darkPath === 0) {
    clickedIcon.darkPath = 1;
    clickedIcon.darkWall = 0;
    clickedIcon.darkCap = 0;

    darkPathIcon.style.border = "4px solid aqua";
    darkWallIcon.style.border = "transparent";
    darkCapIcon.style.border = "transparent";

    
  };
  console.log(clickedIcon);
});
darkWallIcon.addEventListener("click", function() {
  if (clickedIcon.darkWall === 0) {
    clickedIcon.darkPath = 0;
    clickedIcon.darkWall = 1;
    clickedIcon.darkCap = 0;

    darkPathIcon.style.border = "transparent";
    darkWallIcon.style.border = "4px solid aqua";
    darkCapIcon.style.border = "transparent";

    
  };
  console.log(clickedIcon);
});
darkCapIcon.addEventListener("click", function() {
  if (clickedIcon.darkCap === 0) {
    clickedIcon.darkPath = 0;
    clickedIcon.darkWall = 0;
    clickedIcon.darkCap = 1;

    darkPathIcon.style.border = "transparent";
    darkWallIcon.style.border = "transparent";
    darkCapIcon.style.border = "4px solid aqua";

    
  };
  console.log(clickedIcon);
});