function descendingOrder(n){
    let arr = [...n.toString()].map(Number);
    arr.sort((a, b) => b - a);
    return Number(arr.join(''));
}