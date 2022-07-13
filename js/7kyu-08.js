function maskify(cc) {
    let arr = cc.split('')
    let newArr = []
    for (let i = 0; i < arr.length-4; i++) {
        newArr.push('#')
    }
    for (let i = arr.length-4; i < arr.length; i++) {
        newArr.push(arr[i])
    }

    return newArr.join('')
}

console.log(maskify("4556364607935616"))