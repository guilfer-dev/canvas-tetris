function draw() {

    //get field from html
    const field = document.getElementById("field").getContext('2d');

    //define pieces shape, color and limits for blank field **LIMITS MUST BE CHANGED everytime
    //the field changes
    const I = {
        color: 'lightblue',
        shape: [
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        limitH: 6,
        limitV: 19

    }

    const O = {
        color: 'yellow',
        shape: [
            [1, 1],
            [1, 1]
        ],
        limitH: 8,
        limitV: 18
    }

    const T = {
        color: 'magenta',
        shape: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0]
        ],
        limitH: 7,
        limitV: 18
    }

    const J = {
        color: 'darkblue',
        shape: [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ],
        limitH: 8,
        limitV: 17
    }

    const L = {
        color: 'orange',
        shape: [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 0]
        ],
        limitH: 8,
        limitV: 17
    }

    const S = {
        color: 'green',
        shape: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0],
        ],
        limitH: 7,
        limitV: 18
    }

    const Z = {
        color: 'red',
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        limitH: 7,
        limitV: 18
    }

    //define array of pieces to better handle the pieces generation
    const pieces = [I, O, T, J, L, S, Z];

    // render tetramino based on shape and accepts the position on the field as x and y parameters

    function renderTetramino(piece, x, y) {

        for (let i = 0; i < piece.shape.length; i++) {
            for (let j = 0; j < piece.shape[i].length; j++) {
                if (piece.shape[j][i] === 1) {
                    field.fillStyle = piece.color;
                    field.fillRect((x + i) * 100, (y + j) * 100, 90, 90);
                }
            }
        }

    }


    // x up to 10 positions
    // y up to 20 positions
    let horizontal = 0;
    let vertical = 0;
    let testPiece = 0;
    let rotation = 0;
    let piece = 0;

    const testPieceHandler = e => {

        switch (e.key) {
            case '.':
                if (testPiece >= 0 && testPiece < 6) {
                    testPiece++
                }

                break;
            case ',':
                if (testPiece > 0 && testPiece <= 6) {
                    testPiece--
                }
                break;

            default:
                break;
        }
        piece = pieces[testPiece];
    }

    const handleKeyboardInput = (e) => {
        dropPiece(1);
        playerMovePiece(e, piece);
    }

    const playerMovePiece = (e, piece) => {

        e.preventDefault();

        field.clearRect(0, 0, 1000, 2000);


        switch (e.key) {

            case 'ArrowRight': {
                if (horizontal >= 0 && horizontal < piece.limitH) horizontal++;
                // horizontal++;
                break
            }
            case 'ArrowLeft': {
                // horizontal--;
                if (horizontal > 0 && horizontal <= piece.limitH) horizontal--;
                break

            }
            // for tests only, need to be removed
            case 'ArrowUp': {
                vertical--;
                break
            }

            case 'ArrowDown': {
                if (vertical < piece.limitV) vertical++;
                // vertical++;
                break

            }

            case ' ': {
                if (rotation == 270) {
                    rotation = 0;
                } else rotation += 90;
                console.log(rotation);
                break

            }
            default: break;
        }

        console.log(e.key, horizontal, vertical);

        renderTetramino(piece, horizontal, vertical);

    }

    let dropPiece = (speed) => {

        dropPiece = () => { };

        setInterval(() => {
            field.clearRect(0, 0, 1000, 2000);
            if (vertical < piece.limitV) vertical++;
            renderTetramino(piece, horizontal, vertical);
        }, 500 * 1 / speed)
    }

    document.addEventListener('keydown', handleKeyboardInput);

    //for tests only
    document.addEventListener('keydown', testPieceHandler);
}

draw();