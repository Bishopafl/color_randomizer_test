# Color Guessing Game
This is a simple color guessing game built using JavaScript. The game randomly selects a color from a predefined array of colors and prompts the user to guess the correct color. The user is given hints based on the alphabetical order of their guess compared to the correct color.

## Game Rules
The game randomly selects a color from the following array:

`const COLORS_ARRAY = [
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
];`

### The user is prompted to guess the correct color.
If the user's guess is correct, the game displays the number of attempts taken to guess the correct color and changes the background color of the document body to the correct color.
If the user's guess is incorrect, the game provides a hint based on the alphabetical order of the user's guess compared to the correct color.
The game continues to prompt the user for another guess until the user guesses the correct color.

## Game Logic
### The game logic is as follows:

1. A random decimal is generated.
2. The random decimal is adjusted to the length of the array.
3. The adjusted decimal is multiplied by the number of items in the array to generate a random number.
4. The random number is used to select a random color from the array based on the index of the array keys.

### Game Hints
The game provides hints based on the alphabetical order of the user's guess compared to the correct color. The hints are as follows:

- If the user's guess is not in the array, the game prompts the user to enter a valid color from the list.
- If the user's guess is alphabetically higher than the correct color, the game provides a hint that the user's guess is alphabetically higher.
- If the user's guess is alphabetically lower than the correct color, the game provides a hint that the user's guess is alphabetically lower.

### Game Controls
The game is controlled using the following HTML element:

`<button id="startGameBtn">Start Game</button>`
When the button is clicked, the `runGame()` function is called to start the game.

### Game Setup
To set up the game locally download the repo and open the index.html file in the browser of your choice.

Click the button to start the game.
`<button id="startGameBtn">Start Game</button>`
