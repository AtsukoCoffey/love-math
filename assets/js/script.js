// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });//button.addEventListener
    }//forLoop

    runGame("addition");
});//document.addEventListener

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {
    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
    }
}

/**
 * Checks the answer against the first element in the returned
 * calculateCorrectAnswer array[0]
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);//input->.value Not innerText
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right!");
    } else {
        alert(`Awww.. You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`);
    }
    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    // Make sure that to treat the number an integer [parseInt] By default, when JavaScript gets data from the dom
    // it returns it as a string but we can't do mathematical operations on a string
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

// Called from runGame() with num1, num2 arguments. This parameter operand1,2 are used only in this function
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";


}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}