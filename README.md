# X-marks-the-spot
GA Tic Tac Toe (Unit 1 project)
https://gist.github.com/imaginetheheadline/756776a6495a76f58f7576d8818e1667


## User Interface Planning

Title
- Game rules
- Game setup options (starting game, choosing which player is X or O) via HTML/JS

3x3 board
- the board should be clickable / click to place mark via JS
- "Current player" status via JS/DOM
- while hovering over grid, cursor will be the player's mark via CSS/JS

![image](https://user-images.githubusercontent.com/9695019/142712895-bc208f41-e154-4e4b-be4e-6b282d024d89.png)


## Functionalities Planning

Game play
- Should display a message informing a player when it’s their turn via JS/DOM
- Should display a message informing us who won the game via JS/DOM
- Should update game in real time via JS/DOM
- Should check for winner after every move via JS/DOM

Winning
- Any player's mark 3 in a row horizontally, vertically, or diagonally

Limitations
- Invalid moves: if box is already filled via JS


## Bonus Planning

- Design X and O via CSS
- Keep track of multiple game rounds with a win counter via JS
- LocalStorage or SessionStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
