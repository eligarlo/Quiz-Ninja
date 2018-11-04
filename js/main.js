/* ==============            Welcome the user to the Quiz Ninja              ============ */

alert("Welcome to Quiz Ninja!");

/* ==========          Questions and Answers        =============== */

const quiz = [
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonderwoman", realName: "Dianna Prince"},
    {name: "Batman", realName: "Bruce Wayne"}
];

/* ==============         Start of the Quiz         ============= */

const game = {
    start(quiz) {

        this.questions = [...quiz];
        // Initialize score
        this.score = 0

        // Main game loop
        for (const question of this.questions) {

            // Get answer from user
            this.question = question;
            // Asks and Checks if answer is correct
            this.ask();
        }
        // End of main game loop

        this.gameOver();
    },
        /* =========      Function declarations      ========== */

        ask() {
            // Ask the question
            const question = `What is ${this.question.name}'s real name?`;
            // Gets response
            const response = prompt(question);
            // Checks the response
            this.check(response);
        },

        check(response) {
            // Check if answer is correct
            const answer = this.question.realName;
            if (response === answer) {
                // Increase score by 1
                this.score++;
                alert(`Correct! Your score is ${this.score}`);
            } else {
                alert(`Wrong! The correct answer was ${answer}`);
            }
        },

        gameOver() {
            // At the end of the game, report the player's score
            alert(`Game over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`); // If ${score} is plural this condition (${score !==1 ? 's' : ''}) will add a 's' at the end
        }
}


game.start(quiz);