# Tic Tac Toe (JavaScript)

A simple Tic Tac Toe game built with vanilla JavaScript as part of a learning project focused on **factory functions**, **closures**, and the **module pattern**.

The game logic is implemented first in the console, with a clear separation between game state and display logic.

---

## Features

- Gameboard stored in a private module
- Player objects created using factory functions
- Game controller module to manage turns and game flow
- Win detection for all possible 3-in-a-row combinations
- Tie detection using a round counter
- Prevention of invalid moves
- Game state reset functionality

---

## Project Structure

- **Gameboard**  
  Manages the board state and controls access to it.

- **Player**  
  Factory function that creates player objects with a name and marker.

- **GameController**  
  Controls turn order, round count, win/tie logic, and overall game flow.

---

## Technologies Used

- HTML
- CSS
- JavaScript (ES6)

---

## Learning Goals

- Practice encapsulation and minimizing global variables
- Understand closures and the module pattern
- Organize logic into clear, reusable components
- Build game logic before working with the DOM

---

## Future Improvements

- Add a graphical user interface
- Allow players to enter their names
- Add a restart button
- Display current player and game result on the screen