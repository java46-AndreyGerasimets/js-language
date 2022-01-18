// Task 1

const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
arHw.sort((a, b) => {return a % 2 == 0 ? (b % 2 == 0 ? a - b : -1) : (b % 2 == 0 ? 1 : b - a);});
console.log(arHw);


// Task 2

const matrix = [[1, 2], [3, 4], [5, 6]];

console.log(matrixTransp(matrix));

function matrixTransp(matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
        newMatrix.push([]);
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            newMatrix[j].push(matrix[i][j]);
        }
    }

    return newMatrix;
}