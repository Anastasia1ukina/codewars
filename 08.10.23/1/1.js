var number = function (array) {
    let newArr = [];
    array.map((e, i) => {
        e = `${i + 1}: ${e}`
        newArr.push(e)
    })
    return newArr;
}

const number = array => array.map((n, i) => `${i + 1}: ${n}`);