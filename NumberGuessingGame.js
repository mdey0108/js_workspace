// Number Guessing Game in JavaScript

function numberGuessingGame() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const numberToGuess = Math.floor(Math.random() * 20) + 1;
    let numberOfTries = 0;
    let hasGuessedCorrectly = false;

    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 1 and 20.");
    console.log("You have 5 attempts to guess it.");

    const askGuess = () => {
        if (numberOfTries >= 5) {
            console.log("Sorry, you've used all your attempts. The number was " + numberToGuess + ".");
            calculateScore();
            rl.close();
            return;
        }

        rl.question("Enter your guess: ", (input) => {
            const guess = parseInt(input, 10);
            numberOfTries++;

            if (guess < numberToGuess) {
                console.log("Your guess is too low. Try again.");
                askGuess();
            } else if (guess > numberToGuess) {
                console.log("Your guess is too high. Try again.");
                askGuess();
            } else {
                hasGuessedCorrectly = true;
                console.log("Congratulations! You've guessed the number in " + numberOfTries + " tries.");
                calculateScore();
                rl.close();
            }
        });
    };

    const calculateScore = () => {
        let score = (hasGuessedCorrectly ? 100 : 0) - (numberOfTries * 20);
        score = Math.max(score, 0); // Ensure the score is not negative
        console.log("Your score: " + score + "%");
    };

    askGuess();
}

numberGuessingGame();
