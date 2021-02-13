
const d = document;
let x = 0,
    y = 0;

export function moveBall(e, ball, space) {
    const $ball = d.querySelector(ball),
        $space = d.querySelector(space),
        limitsBall = $ball.getBoundingClientRect(),
        limitsSpace = $space.getBoundingClientRect();

    // console.log(e.keyCode);
    // console.log(limitsBall, limitsSpace);
    // console.log(e.key);

    // const move = (direction) => {};

    switch (e.keyCode) {
        case 37:
            // move("left");
            if (Math.trunc(limitsBall.left) > limitsSpace.left) {
                e.preventDefault(); //Apagar los componentes del teclado
                x--;
            }
            break;
        case 38:
            // move("up");
            if (limitsBall.top > limitsSpace.top) {
                e.preventDefault(); //Apagar los componentes del teclado
                y--;
            }
            break;
        case 39:
            // move("right");
            if (limitsBall.right < limitsSpace.right) {
                e.preventDefault(); //Apagar los componentes del teclado
                x++;
            }
            break;
        case 40:
            // move("down");
            if (limitsBall.bottom < limitsSpace.bottom) {
                e.preventDefault(); //Apagar los componentes del teclado
                y++;
            }
            break;

        default:
            break;
    }

    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
    if ((e.key === "a") && (e.altKey)) {
        alert("Haz lanzado una alerta con el teclado.");
    }

    if ((e.key === "c") && (e.altKey)) {
        confirm("Haz lanzado una confirmación con el teclado.");
    }

    if ((e.key === "p") && (e.altKey)) {
        prompt("Haz lanzado una aviso con el teclado.");
    }
}