function repeatStr (n, s) {

    let arr = s.split('')
    let newArr = []

    for (let i = 0; i < n; i++) {
        newArr.push(...arr)
    }

    return newArr.join('');
}

console.log(repeatStr(5, 'yo'))