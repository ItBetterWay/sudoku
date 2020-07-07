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

const isValid = (array) =>{
    let valid = true;
    for (let i = 0; i < array.length; i++){
        for (let j = i; j < array.length; j++){
            if(array[i] > array[j]){
                let tempElem = array[i];
                array[i] = array[j];
                array[j] = tempElem;
            }
        }
    }
    for (let i = 1; i <= 9; i++){
        if(i !== array[i - 1]){
            valid = false;
        }
    }
    return valid;
}

const isSame = (arrOne, arrTwo) =>{
    let same = true;

    for (let i = 0; i < arrOne.length; i++){
        let arrOneRow = arrOne[i];
        let arrTwoRow = arrTwo[i];

        for (let j = 0; j < arrOneRow.length; j++){
            if (arrOneRow[j] !== arrTwoRow[j]){
                same = false;
            }
        }
    }
    return same;
}