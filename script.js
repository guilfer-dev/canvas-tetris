function draw() {
    const field = document.getElementById("field").getContext('2d');

    const I = {
        0: [0, 0],
        1: [40, 0],
        2: [80, 0],
        3: [120, 0]
    }
    const O = {
        0: [0, 0],
        1: [0, 40],
        2: [40, 0],
        3: [40, 40]
    }
    const T = {
        0: [0, 0],
        1: [40, 0],
        2: [80, 0],
        3: [40, 40]
    }
    const J = {
        0: [40, 0],
        1: [40, 40],
        2: [40, 80],
        3: [0, 80]
    }
    const L = {
        0: [0, 0],
        1: [0, 40],
        2: [0, 80],
        3: [40, 80]
    }
    const S = {
        0: [40, 0],
        1: [80, 0],
        2: [0, 40],
        3: [40, 40]
    }
    const Z = {
        0: [0, 0],
        1: [40, 0],
        2: [40, 40],
        3: [80, 40]
    }

    const pieces = [I, O, T, J, L, S, Z]

    function renderTetramino(piece, x, y) {

        field.fillStyle = 'red';
        for (square in piece) {
            field.fillRect(x + piece[square][0], y + piece[square][1], 40, 40)
        }
    }
    renderTetramino(pieces[Math.floor(Math.random() * 7)], 100, 200);

}

draw();