//Template sudoku grid game
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

const getRow = (array, idx) =>{
    return array[idx];
}

const getColumn = (array, idx) =>{
    let column = [];
    for (let i = 0; i < array.length; i++){
        let currentArray = array[i];
        column.push(currentArray[idx]);
    }
    return column;
}

const getSection = (array, idxX, idxY) =>{
    let result = [];
    if (idxY === 0){
        for (let i = 0; i < 3; i++){
            let currentRow = array[i];
            if (idxX === 0){
                for (let j = 0; j < 3; j++){
                    result.push(currentRow[j]);
                }
            } else if (idxX === 1){
                for (let j = 3; j < 6; j++){
                    result.push(currentRow[j]);
                }
            } else {
                for (let j = 6; j < 9; j++){
                    result.push(currentRow[j]);
                }
            }
        }
    } else if (idxY === 1){
        for (let i = 3; i < 6; i++){
            let currentRow = array[i];
            if (idxX === 0){
                for (let j = 0; j < 3; j++){
                    result.push(currentRow[j]);
                }
            } else if (idxX === 1){
                for (let j = 3; j < 6; j++){
                    result.push(currentRow[j]);
                }
            } else {
                for (let j = 6; j < 9; j++){
                    result.push(currentRow[j]);
                }
            }
        }
    } else {
        for (let i = 6; i < 9; i++){
            let currentRow = array[i];
            if (idxX === 0){
                for (let j = 0; j < 3; j++){
                    result.push(currentRow[j]);
                }
            } else if (idxX === 1){
                for (let j = 3; j < 6; j++){
                    result.push(currentRow[j]);
                }
            } else {
                for (let j = 6; j < 9; j++){
                    result.push(currentRow[j]);
                }
            }
        }
    }
    return result;
}