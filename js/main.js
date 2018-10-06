//==============            Welcome the user to the Quiz Ninja              ============

alert("Welcome to Quiz Ninja!");

/*  ==========          Questions and Answers        =============== */

const quiz = new Map([
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Dianna Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
]);

//-----------------         Looping the Questions of the Quiz         -----------------

let score = 0 // Initialize score

for (const [question, answer] of quiz.entries()) {

    // get answer from user
    const response = prompt(question);
    // check if answer is correct
    if (response === answer) {
        // increase score by 1
        score++;
        alert(`Correct! Your score is ${score}`);
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

// At the end of the game, report the player's score
alert(`Game over, you scored ${score} point${score !== 1 ? 's' : ''}`); // If ${score} is plural this condition (${score !==1 ? 's' : ''}) will add a 's' at the end