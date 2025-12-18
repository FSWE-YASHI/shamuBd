var x = 0;

function showMessage(y) {

    x += y;

    if (x == 1) {
        document.getElementById("message").style.display = "block";
        document.getElementById("circle").style.display = "block";

        var song = document.getElementById("mySong");
        song.currentTime = 1.4;
        song.play();

        balloonInterval = setInterval(createBalloon, 500);

    } else {
        document.getElementById("message").style.display = "none";
        document.getElementById("circle").style.display = "none";

        var song = document.getElementById("mySong");
        song.pause();
        clearInterval(balloonInterval);

        x = 0;
    }

}


function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    balloon.style.left = Math.random() * 100 + "vw";


    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 5000);
}

