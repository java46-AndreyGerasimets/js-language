// Task 1

const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
arHw.sort((a, b) => {return a % 2 == 0 ? (b % 2 == 0 ? a - b : -1) : (b % 2 == 0 ? 1 : b - a);});
console.log(arHw);


// Task 2

let matrix = [[1, 2], [3, 4], [5, 6]];

console.log(matrixTransp(matrix));

function matrixTransp(matrix) {
    var newMatrix = [];
    for (var i = 0; i < matrix[0].length; i++) {
        newMatrix.push([]);
    }

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            newMatrix[j].push(matrix[i][j]);
        }
    }

    return newMatrix;
}