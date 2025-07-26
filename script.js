let number_generator = Math.ceil(Math.random() * 10);
let sub = document.getElementById("btn");
let input = document.getElementById("number");
let mess = document.querySelector(".mess");
let bestScoreDisplay = document.getElementById("best-score");
let counter = 0;

let storedBest = localStorage.getItem("highScore");
bestScoreDisplay.textContent = `High Score is in: ${storedBest || "--"} attempt`;

sub.addEventListener("click", () => {
    let guess = Number(input.value);
    counter++;

    if (guess === number_generator) {
        mess.textContent = `🎉 Congratulations! You guessed it in ${counter} attempt(s)!`;
        mess.style.color = "green";

        let currentBest = Number(localStorage.getItem("highScore"));

        if (!currentBest || counter < currentBest) {
            localStorage.setItem("highScore", counter);
            bestScoreDisplay.textContent = `Best Score: ${counter}`;
            mess.textContent += " 🏆 New High Score!";
        }

        input.disabled = true;
        sub.disabled = true;
    } else if (guess < number_generator) {
        mess.textContent = "📉 Too low... Try again!";
        mess.style.color = "red";
    } else if (guess > number_generator) {
        mess.textContent = "📈 Too high... Try again!";
        mess.style.color = "red";
    }

    input.value = ""; 
});

// Reset game
document.getElementById("reset").addEventListener("click", () => {
    number_generator = Math.ceil(Math.random() * 10);
    counter = 0;
    input.disabled = false;
    sub.disabled = false;
    mess.textContent = "";
    input.value = "";
});
