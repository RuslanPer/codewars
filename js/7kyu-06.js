function XO(str) {
    let x = 0
    let o = 0
    const arr = str.toLowerCase().split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            x = x + 1
        }
        if (arr[i] === 'o') {
            o = o + 1
        }
    }

    return x === o

}

console.log(XO("zpzpzpp"))