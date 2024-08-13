
// let board;
// let boardWidth = 600;
// let boardHeight = 180;

// let ctx;

// let dinoWidth = 40;
// let dinoHeight = 40;
// let dinoX = 25;
// let dinoY = boardHeight - dinoHeight;
// let dinoImg;

// let dino = {
//     x: dinoX,
//     y: dinoY,
//     width: dinoWidth,
//     height: dinoHeight
// };

// let catArr = [];
// let cat1Width = 30;
// let cat2Width = 30;

// let catHeight = 60;
// let catX = 600;
// let catY = boardHeight - catHeight;

// let cat1Img;
// let cat2Img;

// let velocityX = -8;
// let velocityY = 0;
// let gravity = 0.4;

// let gameOver = false;
// let score = 0;
// let highScore = localStorage.getItem("highScore") || 0;

// window.onload = function() {
//     board = document.getElementById("board");
//     board.height = boardHeight;
//     board.width = boardWidth;

//     ctx = board.getContext("2d");

//     dinoImg = new Image();
//     dinoImg.src = "./assets/Angry_Bird_red-pixelicious-removebg-preview.png";
//     dinoImg.onload = function() {
//         ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
//     };

//     cat1Img = new Image();
//     cat1Img.src = "assets/47a3c3b21f187b6ab55a0a71869bd6de.jpg_720x720q80-removebg-preview.png";

//     cat2Img = new Image();
//     cat2Img.src = "assets/47a3c3b21f187b6ab55a0a71869bd6de.jpg_720x720q80-removebg-preview.png";
//     setInterval(placeCat, 1000);
//     requestAnimationFrame(update);
   
//     document.addEventListener("keydown", moveDino);
// };

// function update() {
//     requestAnimationFrame(update);
//     if (gameOver) {
//         displayGameOver();
//         return;
//     }
//     ctx.clearRect(0, 0, board.width, board.height);

//     // Update dino position with gravity
//     velocityY += gravity;
//     dino.y = Math.min(dino.y + velocityY, dinoY);

//     // Draw dino
//     ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

//     // Update and draw cats
//     for (let i = 0; i < catArr.length; i++) {
//         let catcus = catArr[i];
//         catcus.x += velocityX;
//         ctx.drawImage(catcus.img, catcus.x, catcus.y, catcus.width, catcus.height);

//         if (coll(dino, catcus)) {
//             gameOver = true;
//         }
//     }

//     // Draw score
//     ctx.fillStyle = "black";
//     ctx.font = "18px courier";
//     score++;
//     ctx.fillText("Score: " + score, 480, 20);
//     ctx.fillText("High Score: " + highScore, 270, 20);
// }

// function moveDino(e) {
//     if (gameOver) {
//         return;
//     }
//     if ((e.code === "Space" || e.code === "ArrowUp") && dino.y === dinoY) {
//         velocityY = -10
        
//         ;
//     }
// }

// function placeCat() {
//     if (gameOver) {
//         return;
//     }
//     let catcus = {
//         img: null,
//         x: catX,
//         y: catY,
//         width: null,
//         height: catHeight
//     };

//     let placeCatChan = Math.random();

//     if (placeCatChan > 0.90) {
//         catcus.img = cat2Img;
//         catcus.width = cat2Width;
//         catArr.push(catcus);
//     } else if (placeCatChan > 0.60) {
//         catcus.img = cat1Img;
//         catcus.width = cat1Width;
//         catArr.push(catcus);
//     } else if (placeCatChan > 0.30) {
//         catcus.img = cat2Img;
//         catcus.width = cat2Width;
//         catArr.push(catcus);
//     }
//     if (catArr.length > 5) {
//         catArr.shift();
//     }
// }

// function coll(a, b) {
//     return a.x < b.x + b.width && a.x + a.width > b.x &&
//            a.y < b.y + b.height && a.y + a.height > b.y;
// }

// function displayGameOver() {
//     ctx.fillStyle = "red";
//     ctx.font = "30px";
//     ctx.fillText("Game Over", boardWidth / 2 - 100, boardHeight / 2);

//     // Display replay button
//     ctx.fillStyle = "black";
//     ctx.font = "13px ";
//     ctx.fillText("Press Enter", boardWidth / 2 - 100, boardHeight / 2 +30);
// }

// document.addEventListener("keydown", function(e) {
//     if (e.code === "Enter" && gameOver) {
//         resetGame();
//     }
// });

// function resetGame() {

//     if (score > highScore) {
//         highScore = score;
//         localStorage.setItem("highScore", highScore);
//     }
//     // Reset game state
//     gameOver = false;
//     score = 0;
//     catArr = [];
//     dino.y = dinoY;
//     velocityY = 0;

//     // Start game loop again
//     requestAnimationFrame(update);
// }

// if(gameOver==true){
//     dinoImg.src="assets/angry-bird-angry-birds-are-amazing-32024326-1024-768-removebg-preview.png"
//     dinoImg.onload=function(){
//         ctx.drawImage(dinoImg,dino.x,dino.y,dino.width,dino.height)
//     }}

// let board;
// let boardWidth = 600;
// let boardHeight = 180;

// let ctx;

// let dinoWidth = 40;
// let dinoHeight = 40;
// let dinoX = 25;
// let dinoY = boardHeight - dinoHeight;
// let dinoImg;

// let dino = {
//     x: dinoX,
//     y: dinoY,
//     width: dinoWidth,
//     height: dinoHeight
// };

// let catArr = [];
// let cat1Width = 30;
// let cat2Width = 30;

// let catHeight = 60;
// let catX = 600;
// let catY = boardHeight - catHeight;

// let cat1Img;
// let cat2Img;

// let velocityX = -8;
// let velocityY = 0;
// let gravity = 0.4;

// let gameOver = false;
// let score = 0;
// let highScore = localStorage.getItem("highScore") || 0;

// let animationFrameId;

// window.onload = function() {
//     board = document.getElementById("board");
//     board.height = boardHeight;
//     board.width = boardWidth;

//     ctx = board.getContext("2d");

//     dinoImg = new Image();
//     dinoImg.src = "./assets/Angry_Bird_red-pixelicious-removebg-preview.png";
//     dinoImg.onload = function() {
//         ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
//     };

//     cat1Img = new Image();
//     cat1Img.src = "assets/47a3c3b21f187b6ab55a0a71869bd6de.jpg_720x720q80-removebg-preview.png";

//     cat2Img = new Image();
//     cat2Img.src = "assets/47a3c3b21f187b6ab55a0a71869bd6de.jpg_720x720q80-removebg-preview.png";
//     setInterval(placeCat, 1000);
//     requestAnimationFrame(update);

//     document.addEventListener("keydown", moveDino);
// };

// function update() {
//     if (gameOver) {
//         displayGameOver();
//         return;
//     }

//     ctx.clearRect(0, 0, board.width, board.height);

//     // Update dino position with gravity
//     velocityY += gravity;
//     dino.y = Math.min(dino.y + velocityY, dinoY);

//     // Draw dino
//     ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

//     // Update and draw cats
//     for (let i = 0; i < catArr.length; i++) {
//         let catcus = catArr[i];
//         catcus.x += velocityX;
//         ctx.drawImage(catcus.img, catcus.x, catcus.y, catcus.width, catcus.height);

//         if (coll(dino, catcus)) {
//             gameOver = true;
//         }
//     }

//     // Draw score
//     ctx.fillStyle = "black";
//     ctx.font = "18px courier";
//     score++;
//     ctx.fillText("Score: " + score, 480, 20);
//     ctx.fillText("High Score: " + highScore, 270, 20);

//     // Request the next frame
//     animationFrameId = requestAnimationFrame(update);
// }

// function moveDino(e) {
//     if (gameOver) {
//         return;
//     }
//     if ((e.code === "Space" || e.code === "ArrowUp") && dino.y === dinoY) {
//         velocityY = -10;
//     }
// }

// function placeCat() {
//     if (gameOver) {
//         return;
//     }
//     let catcus = {
//         img: null,
//         x: catX,
//         y: catY,
//         width: null,
//         height: catHeight
//     };

//     let placeCatChan = Math.random();

//     if (placeCatChan > 0.90) {
//         catcus.img = cat2Img;
//         catcus.width = cat2Width;
//         catArr.push(catcus);
//     } else if (placeCatChan > 0.60) {
//         catcus.img = cat1Img;
//         catcus.width = cat1Width;
//         catArr.push(catcus);
//     } else if (placeCatChan > 0.30) {
//         catcus.img = cat2Img;
//         catcus.width = cat2Width;
//         catArr.push(catcus);
//     }
//     if (catArr.length > 5) {
//         catArr.shift();
//     }
// }

// function coll(a, b) {
//     return a.x < b.x + b.width && a.x + a.width > b.x &&
//            a.y < b.y + b.height && a.y + a.height > b.y;
// }

// function displayGameOver() {
//     ctx.fillStyle = "red";
//     ctx.font = "30px";
//     ctx.fillText("Game Over", boardWidth / 2 - 101, boardHeight / 2);

//     // Display replay button
//     ctx.fillStyle = "black";
//     ctx.font = "18px ";
//     ctx.fillText("Press Enter", boardWidth / 2 - 100, boardHeight / 2 +30);
// }

// document.addEventListener("keydown", function(e) {
//     if (e.code === "Enter" && gameOver) {
//         resetGame();
//     }
// });

// function resetGame() {
//     // Cancel the previous animation frame
//     cancelAnimationFrame(animationFrameId);

//     if (score > highScore) {
//         highScore = score;
//         localStorage.setItem("highScore", highScore);
//     }
//     // Reset game state
//     gameOver = false;
//     score = 0;
//     catArr = [];
//     dino.y = dinoY;
//     velocityY = 0;

//     // Start game loop again
//     requestAnimationFrame(update);
// }

// if (gameOver) {
//     dinoImg.src = "assets/angry-bird-angry-birds-are-amazing-32024326-1024-768-removebg-preview.png";
//     dinoImg.onload = function() {
//         ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
//     };
// }


let board;
let boardWidth = 800;
let boardHeight = 180;

let ctx;

let dinoWidth = 44;
let dinoHeight = 44;
let dinoX = 25;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
    x: dinoX,
    y: dinoY,
    width: dinoWidth,
    height: dinoHeight
};

let catArr = [];
let cat1Width = 30;
let cat2Width = 30;

let catHeight = 60;
let catX = 800;
let catY = boardHeight - catHeight;

let cat1Img;
let cat2Img;

let velocityX = -8;
let velocityY = 0;
let gravity = 0.4;

let gameOver = false;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;

let gameStarted = false;
let animationFrameId;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    ctx = board.getContext("2d");

    dinoImg = new Image();
    dinoImg.src = "./assets/Angry_Bird_red-pixelicious-removebg-preview.png";
    dinoImg.onload = function() {
        ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    };

    cat1Img = new Image();
    cat1Img.src = "assets/47a3c3b21f187b6ab55a0a71869bd6de.jpg_720x720q80-removebg-preview.png";

    cat2Img = new Image();
    cat2Img.src = "assets/47a3c3b21f187b6ab55a0a71869bd6de.jpg_720x720q80-removebg-preview.png";

    setInterval(placeCat, 1000);
    requestAnimationFrame(update);

    document.addEventListener("keydown", moveDino);
};

function update() {
    if (!gameStarted) {
        // Display a message or instruction to start the game
        ctx.clearRect(0, 0, board.width, board.height);
        ctx.fillStyle = "white";
        ctx.font = "25px courier";
        ctx.fillText("Press any key to start", boardWidth / 2 -160, boardHeight / 2);
        requestAnimationFrame(update);
        return;
    }

    if (gameOver) {
        displayGameOver();
        return;
    }

    ctx.clearRect(0, 0, board.width, board.height);

    // Update dino position with gravity
    velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY, dinoY);

    // Draw dino
    ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    // Update and draw cats
    for (let i = 0; i < catArr.length; i++) {
        let catcus = catArr[i];
        catcus.x += velocityX;
        ctx.drawImage(catcus.img, catcus.x, catcus.y, catcus.width, catcus.height);

        if (coll(dino, catcus)) {
            gameOver = true;
        }
    }

    // Draw score
    ctx.fillStyle = "white";
    ctx.font = "18px courier";
    score++;
    ctx.fillText("Score: " + score, 480, 20);
    ctx.fillText("High Score: " + highScore, 270, 20);

    // Request the next frame
    animationFrameId = requestAnimationFrame(update);
}

function moveDino(e) {
    if (!gameStarted) {
        gameStarted = true;
        // Start the game loop
        requestAnimationFrame(update);
    }

    if (gameOver) {
        return;
    }

    if ((e.code === "Space" || e.code === "ArrowUp") && dino.y === dinoY) {
        velocityY = -10;
    }
}

function placeCat() {
    if (gameOver) {
        return;
    }
    let catcus = {
        img: null,
        x: catX,
        y: catY,
        width: null,
        height: catHeight
    };

    let placeCatChan = Math.random();

    if (placeCatChan > 0.90) {
        catcus.img = cat2Img;
        catcus.width = cat2Width;
        catArr.push(catcus);
    } else if (placeCatChan > 0.60) {
        catcus.img = cat1Img;
        catcus.width = cat1Width;
        catArr.push(catcus);
    } else if (placeCatChan > 0.30) {
        catcus.img = cat2Img;
        catcus.width = cat2Width;
        catArr.push(catcus);
    }
    if (catArr.length > 5) {
        catArr.shift();
    }
}

function coll(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x &&
           a.y < b.y + b.height && a.y + a.height > b.y;
}

function displayGameOver() {
    ctx.fillStyle = "red";
    ctx.font = "30px Courier new";
    ctx.fillText("Game Over", boardWidth / 2 - 104, boardHeight / 2);

    // Display replay button
    ctx.fillStyle = "white";
    ctx.font = "20px Courier";
    ctx.fillText("Press Enter", boardWidth / 2 - 100, boardHeight / 2 + 30);
}

document.addEventListener("keydown", function(e) {
    if (e.code === "Enter" && gameOver) {
        resetGame();
    }
});

function resetGame() {
    // Cancel the previous animation frame
    cancelAnimationFrame(animationFrameId);

    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
    }
    // Reset game state
    gameOver = false;
    score = 0;
    catArr = [];
    dino.y = dinoY;
    velocityY = 0;

    // Start game loop again
    requestAnimationFrame(update);
}
