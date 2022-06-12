function squareDigits(num){

    let arr = String(num).split('');
    let newArr = arr.map(n => Math.pow(n,2))

    return Number(newArr.join(''))
}

console.log(squareDigits(12))