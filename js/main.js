/* ==============            Welcome the user to the Quiz Ninja              ============ */

alert("Welcome to Quiz Ninja!");

/* ==========          Questions and Answers        =============== */

const quiz = new Map([
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Dianna Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
]);

/* ==============         Start of the Quiz         ============= */

function start(quiz) {

    // Initialize score
    let score = 0

    // Main game loop
    for (const [question, answer] of quiz.entries()) {

        // Get answer from user
        const response = ask(question);
        // Check if answer is correct
        check(response, answer);
    }
    // End of main game loop

    gameOver();

    /* =========      Function declarations      ========== */

    function ask(question) {
        // Ask the question
        return prompt(question);
    }

    function check(response, answer) {
        // Check if answer is correct
        if (response === answer) {
            // Increase score by 1
            score++;
            alert(`Correct! Your score is ${score}`);
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver() {
        // At the end of the game, report the player's score
        alert(`Game over, you scored ${score} point${score !== 1 ? 's' : ''}`); // If ${score} is plural this condition (${score !==1 ? 's' : ''}) will add a 's' at the end
    }
}

start(quiz);