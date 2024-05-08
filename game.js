const COLORS_ARRAY = [
  "orange",
  "gray",
  "green",
  "white",
  "gold",
  "yellow",
  "cyan",
  "blue",
  "magenta",
  "red",
];
let randomColor; // Stores the selected color persistently so mutiple attempts can be made
let attempts = 0;

function runGame() {
  /**
   * Logic is performing the following randomization:
   * - Generate a random decimal first
   * - Adjust the random decimal to the length of the array
   * - then, multiplying the decimal number by the number of items,
   *   a random number is generated and selected based on the
   *   index of the array keys
   *
   */
  let randomColor = COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)];

  // set the attemp count when the game starts
  attempts = 0;
  checkGuess(randomColor);
}

function checkGuess(correctColor) {
  let userInput = prompt(
    "Enter a color from the list: " +
      COLORS_ARRAY.join(", ").trim().toLowerCase()
  );
  attempts++; // increment the number of attempts

  // Lets handle blank inputs
  if (userInput === null || userInput === "") {
    alert("Game Over... Continue?");
    return;
  }

  console.log(correctColor);
  // check if the users guess is correct
  if (userInput === correctColor) {
    alert(
      "Congratulations! You guessed the correct color in " +
        attempts +
        " tries."
    );
    document.body.style.backgroundColor = correctColor;
  } else {
    /**
     * lets give them hints...
     *
     * Explaination of logic:
     * indexOf(userInput) gets the index of the users input in the sorted array
     *
     * indexOf(correctColor.toLowerCase()) does the same for the correct color, after converting to lower case
     *
     * If the userInput is greater than the index of correctColor, the userInput appears later in the alphabet than correct color.
     *
     * If none of the conditions are met, the index of userInput is less than the index of correctColor and is alphabetically lower than correctColor
     */
    const userInputIndex = COLORS_ARRAY.indexOf(userInput);
    const correctColorIndex = COLORS_ARRAY.indexOf(correctColor);

    if (userInputIndex === -1) {
      alert("Please enter a valid color from the list.");
    } else if (userInputIndex > correctColorIndex) {
      alert("Hint: Your guess is alphabetically higher... Very close");
    } else {
      alert("Hint: Your guess is alphabetically lower than the correct color");
    }
    checkGuess(correctColor); // prompt the user to guess again
  }
}

// Add listener to the Start Game button
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("startGameBtn").addEventListener("click", runGame);
});
