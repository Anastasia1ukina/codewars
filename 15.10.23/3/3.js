function comp(array1, array2) {
    if (array1 === null || array2 === null) return false;

    for (let i = 0; i < array2.length; i++) {
        const idxA1 = array1.indexOf(Math.sqrt(array2[i]))
        if (idxA1 === -1) return false;
        array1[idxA1] = null;
    }


    return true;
}

function comp(array1, array2) {
    if (array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}