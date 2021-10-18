function draw() {
    const field = document.getElementById("field").getContext('2d');

    const I = {
        color: 'red',
        shape: [
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]

    }

    const O = {
        color: 'orange',
        shape: [
            [1, 1],
            [1, 1]
        ]
    }

    const T = {
        color: 'blue',
        shape: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0]
        ]
    }

    const J = {
        color: 'green',
        shape: [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ]
    }

    const L = {
        color: 'grey',
        shape: [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 0]
        ]
    }

    const S = {
        color: 'black',
        shape: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0],
        ]
    }

    const Z = {
        color: 'purple',
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ]
    }

    const pieces = [I, O, T, J, L, S, Z]

    function renderTetramino(piece) {

        field.fillStyle = piece.color;

        for (let i = 0; i < piece.shape.length; i++) {
            for (let j = 0; j < piece.shape[i].length; j++) {
                if (piece.shape[j][i] === 1) {
                    field.fillRect(i * 40, j * 40, 40, 40)
                }
            }
        }
    }

    renderTetramino(pieces[Math.floor(Math.random() * 7)]);
}

draw();