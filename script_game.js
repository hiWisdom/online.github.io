//create variables to get the div in html 
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
var playGame = document.querySelector(".play_game");
var pauseGame = document.querySelector(".pause_game");
var opponents = document.querySelector("#cactus");
//create a jump function and call the css class of jump inside an if conditional


//click event listener to start game
playGame.addEventListener("click", function(){

    //alert
    alert("Game will start once the Ok button is click!");

    //opponents start working
    opponents.style.animationPlayState="running";

    function jump() {
        if(dispatchEvent.classList != "jump") {
            dino.classList.add("jump");
            setTimeout(function() {
                dino.classList.remove("jump");
            }, 300)
        }
    }

    let checkAlive = setInterval( function() {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143) {
            dino.style.animationPlayState = "paused";
            cactus.style.animationPlayState = "paused";
            alert("Whoops! Game Over:(click ok to restart)");
            window.location.reload();
        }
    }, 10);

    document.addEventListener("keydown", function(event){
        jump();
    });


    console.log("Play Button Working");
});


pauseGame.addEventListener("click", function(){

    //alert
    alert("Paused");

    //opponents start working
    opponents.style.animationPlayState="paused";

    function jump() {
        if(dispatchEvent.classList != "jump") {
            dino.classList.add("jump");
            setTimeout(function() {
                dino.classList.remove("jump");
            }, 0)
        }
    }

    let checkAlive = setInterval( function() {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143) {
            dino.style.animationPlayState = "paused";
            cactus.style.animationPlayState = "paused";
            alert("Whoops! Game Over:(click ok to restart)");
            window.location.reload();
        }
    }, 10);

    document.addEventListener("keydown", function(event){
        jump();
    });


    console.log("Paused Button Working");
});