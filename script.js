let knight = (array) => {
    let movesMade = [];
    return { movesMade };
}

let moveOffsets = [
    [1, 2], [1, -2],
    [2, 1], [2, -1],
    [-1, 2], [-1, -2],
    [-2, 1], [-2, -1]
];

function knightMoves(inital, final) {
    //Check if inputs are valid
    if (!Array.isArray(inital) ||
        !Array.isArray(final) ||
        !(inital[0] > 0) ||
        !(inital[0] <= 8) ||
        !(inital[1] > 0) ||
        !(inital[1] <= 8) ||
        !(final[0] > 0 )||
        !(final[0] <= 8 )||
        !(final[1] > 0 )||
        !(final[1] <= 8 )
    ) return 'Invalid Inputs';

    let bestMoves = null;
    let queue = [];

    queue.push([inital, [inital]]);
    while (queue.length > 0) {
        let [current, path] = queue.shift();

        if (current[0] == final[0] && current[1] == final[1]) {
            bestMoves = path;
            return bestMoves;
        }

        let possibleMoves = [];

        moveOffsets.forEach((move) => {
            let newX = current[0] + move[0];
            let newY = current[1] + move[1];
            let array = [newX, newY];
            if (newX > 8 || newX < 0 || newY > 8 || newY < 0) return;
            if (!path.includes(array)) {
                possibleMoves.push(array);
                return;
            }
        })

        for (let positions of possibleMoves) {
            queue.push([positions, [...path, positions]]);
        }
    }
    return bestMoves;
}

function prettyPrint(moveArray) {
    console.log(`=> You made it in ${moveArray.length - 1} moves! Here's your path:`);
    moveArray.forEach((array) => {
        console.log(`[${array[0]}, ${array[1]}]`);
    })
}

prettyPrint(knightMoves([1, 8], [8, 1]));
