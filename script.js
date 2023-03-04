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
    if (!Array.isArray(inital) || !Array.isArray(final)) return 'Input Proper Values';
    let bestMoves = null;
    let movesMade = new Set();
    let queue = [];

    queue.push([inital, [inital]]);
    while (queue.length > 0) {
        let [current, path] = queue.shift();
        movesMade.add(current);

        if (current[0] == final[0] && current[1] == final[1]) {
            if (bestMoves === null) {
                bestMoves = path;
                return bestMoves;
            }

            if (bestMoves.length === Math.min(bestMoves.length, path.length)) return bestMoves;
            bestMoves = path;
            return bestMoves;
        }

        let possibleMoves = [];

        moveOffsets.forEach((move) => {
            let newX = current[0] + move[0];
            let newY = current[1] + move[1];
            let array = [newX, newY];
            if (newX > 8 || newX < 0 || newY > 8 || newY < 0) return;
            if (!movesMade.has(array)) {
                possibleMoves.push(array);
                return;
            }
        })

        for (let positions of possibleMoves) {
            if (!movesMade.has(positions)) {
                queue.push([positions, [...path, positions]]);
            }
        }
    }
    return bestMoves;
}


// function knightMoves(inital, final) {
//     if (!Array.isArray(inital) || !Array.isArray(final)) return 'Input Proper Values';
//     let bestMoves = [];
//     let movesMade = new Set();
//     let queue = [];

//     queue.push(inital);
//     while (queue.length > 0) {
//         let current = queue.shift();
//         movesMade.add(current);

//         if (current[0] == final[0] && current[1] == final[1]) {
//             if (bestMoves === null) {
//                 bestMoves = movesMade;
//                 return bestMoves;
//             }

//             if (bestMoves.length === Math.min(bestMoves.length, movesMade.length)) return bestMoves;
//             bestMoves = movesMade;
//             return bestMoves;
//         }

//         let possibleMoves = [];

//         moveOffsets.forEach((move) => {
//             let newX = current[0] + move[0];
//             let newY = current[1] + move[1];
//             let array = [newX, newY];
//             if (newX > 8 || newX < 0 || newY > 8 || newY < 0) return;
//             if (!movesMade.has(array)) {
//                 possibleMoves.push(array);
//                 return;
//             }
//         })

//         for (let positions of possibleMoves) {
//             if (!movesMade.has(positions)) {
//                 queue.push(positions);
//             }
//         }
//     }
//     return bestMoves;
// }

console.log(knightMoves([3, 3], [3, 4]));
