function matrixZeros(mat) {
    let n = mat.length;
    let m = mat[0].length;
    let c0 = 1;

    for (let i = 0; i <= n - 1; i++) {
        for (let j = 0; j <= m - 1; j++) {
            if (mat[i][j] === 0) {
                mat[i][0] = 0;

                if (j === 0) c0 = 0;
                else mat[0][j] = 0;
            }
        }
    }

    for (let i = 1; i <= n - 1; i++) {
        for (let j = 1; j <= m - 1; j++) {
            if (mat[i][0] === 0 || mat[0][j] === 0) {
                mat[i][j] = 0;
            }
        }
    }

    if (mat[0][0] === 0) {
        for (j = 0; j <= m - 1; j++) {
            mat[0][j] = 0;
        }
    }

    if (c0 == 0) {
        for (let i = 0; i <=n-1; i++) { 
            mat[i][0] = 0;
        }
    }

    return mat;
}
console.log(matrixZeros([
    [0, 1, 2, 0],
    [3, 4, 0, 2],
    [1, 3, 1, 5]
]));