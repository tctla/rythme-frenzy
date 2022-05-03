"use strict";
let canvas;
let context;

let cercleY = 0;
let secondsPassed = 0;
let oldTimeStamp = 0;
let movingSpeed = 50;
let arrayEntityCercle = [];
let slow = 0;
let test = createCercle();
let key = document.getElementById("Letter");
let compteur = document.getElementById("compteur");
let erreur = document.getElementById("erreur");
let point = 0;
let lose = 5;
let button = document.getElementById("button");

arrayEntityCercle.push(test);

// window.onload = init;

button.onclick = init();
console.log(button.onclick)

function init() {
    // Get a reference to the canvas
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp) {
    // Calculate how much time has passed
    secondsPassed = (timeStamp - oldTimeStamp) / 100;
    oldTimeStamp = timeStamp;
    // Move forward in time with a maximum amount
    secondsPassed = Math.min(secondsPassed, 0.1);

    // Pass the time to the update
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawTab();
    draw(arrayEntityCercle);
    update(arrayEntityCercle);

    slow += 1;
    if (slow == 100) {
        let pouet = createCercle();
        arrayEntityCercle.push(pouet);
        slow = 0;
    }
    if (arrayEntityCercle[0].cercleY >= 700) {
        arrayEntityCercle.shift();
        lose -= 1;
        erreur.textContent = lose;
    }
    if (lose > 0) {
        window.requestAnimationFrame(gameLoop);
    } else {
        alert("null");
    }
}

document.addEventListener("keyup", (e) => {
    if (
        arrayEntityCercle[0].cercleY > 575 &&
        arrayEntityCercle[0].cercleY < 675
    ) {
        if (
            (e.key == "q" && arrayEntityCercle[0].cercleX == 50) ||
            (e.key == "s" && arrayEntityCercle[0].cercleX == 150) ||
            (e.key == "d" && arrayEntityCercle[0].cercleX == 250) ||
            (e.key == "k" && arrayEntityCercle[0].cercleX == 350) ||
            (e.key == "l" && arrayEntityCercle[0].cercleX == 450) ||
            (e.key == "m" && arrayEntityCercle[0].cercleX == 550)
        ) {
            point += 1;
            arrayEntityCercle.shift();
            compteur.textContent = point;
        }
    }
});

arrayEntityCercle;

function draw(arrayEntityCercle) {
    // Draw a cercle
    for (let i = 0; i < arrayEntityCercle.length; i++) {
        colorCercle(arrayEntityCercle[i]);
        context.beginPath();
        context.arc(
            arrayEntityCercle[i].cercleX,
            arrayEntityCercle[i].cercleY,
            35,
            0,
            2 * Math.PI
        );
        context.fill();
        context.strokeStyle = "black";
        context.stroke();
    }
}

function update(arrayEntityCercle) {
    for (let i = 0; i < arrayEntityCercle.length; i++) {
        cercleY += movingSpeed * secondsPassed;
        arrayEntityCercle[i].cercleY += (movingSpeed * secondsPassed) / 2;
    }
}

function drawTab() {
    context.beginPath();
    context.moveTo(100, 0);
    context.lineTo(100, 650);
    context.stroke();

    context.beginPath();
    context.moveTo(200, 0);
    context.lineTo(200, 650);
    context.stroke();

    context.beginPath();
    context.moveTo(300, 0);
    context.lineTo(300, 650);
    context.stroke();

    context.beginPath();
    context.moveTo(400, 0);
    context.lineTo(400, 650);
    context.stroke();

    context.beginPath();
    context.moveTo(500, 0);
    context.lineTo(500, 650);
    context.stroke();

    context.beginPath();
    context.moveTo(0, 550);
    context.lineTo(600, 550);
    context.stroke();

    context.beginPath();
    context.fillStyle = "#FF0000";
    context.arc(50, 600, 35, 0, 2 * Math.PI);
    context.fill();
    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();
    context.fillStyle = "#FAFF00";
    context.arc(150, 600, 35, 0, 2 * Math.PI);
    context.fill();
    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();
    context.fillStyle = "#24FF00";
    context.arc(250, 600, 35, 0, 2 * Math.PI);
    context.fill();
    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();
    context.fillStyle = "#00F0FF";
    context.arc(350, 600, 35, 0, 2 * Math.PI);
    context.fill();
    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();
    context.fillStyle = "#001AFF";
    context.arc(450, 600, 35, 0, 2 * Math.PI);
    context.fill();
    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();
    context.fillStyle = "#BD00FF";
    context.arc(550, 600, 35, 0, 2 * Math.PI);
    context.fill();
    context.strokeStyle = "black";
    context.stroke();
}

function randCercleX() {
    var X = [50, 150, 250, 350, 450, 550];
    var rand = X[(Math.random() * X.length) | 0];
    return rand;
}

function colorCercle(arrayEntityCercle) {
    if (arrayEntityCercle.cercleX == 50) {
        context.fillStyle = "#FF0000";
    } else if (arrayEntityCercle.cercleX == 150) {
        context.fillStyle = "#FAFF00";
    } else if (arrayEntityCercle.cercleX == 250) {
        context.fillStyle = "#24FF00";
    } else if (arrayEntityCercle.cercleX == 350) {
        context.fillStyle = "#00F0FF";
    } else if (arrayEntityCercle.cercleX == 450) {
        context.fillStyle = "#001AFF";
    } else {
        context.fillStyle = "#BD00FF";
    }
}

function createCercle() {
    let cercleX = randCercleX();
    var cercle = {
        cercleY: 0,
        cercleX: cercleX,
    };
    return cercle;
}
