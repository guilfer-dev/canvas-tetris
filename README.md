# CanvasTetris

 Implementation of the game "Tetris" in JS using Canvas to render the graphics.

 The ideia is to use HTML, CSS and JS, to make a functional Tetris game.
 No tetris game code will be consulted in this challenge.

 For being considered functional the game must have the following features:

- [X] Field with well defined edges.
- [ ] System of random spawning of pieces
- [ ] Pices must turn around itself, up to 360deg
- [ ] Pieces must interact with each other and with the edges of the the field
- [ ] After a line is completed, this line the blocks of this line must sease to exist and everithing from above fill the empity space
- [ ] The game must count different socore based on how many lines was cleaned
- [ ] Total must be shown to the player 

### Current State:

Currently the game doesn't do anything special, actualy the only thing implemented other than the field and rendering the pieces, is the automatic drop of one piece (only).
If you want to try, use any directional key to start. To change between different pieces, use "." or ",".
