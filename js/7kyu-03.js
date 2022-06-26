function highAndLow(numbers){
    const arr = numbers.split(' ')
    const NumArr = arr.map(el => Number(el))
    let max = Math.max(...NumArr).toString()
    let min = Math.min(...NumArr).toString()
    return [max, min].join(' ')
}

console.log(highAndLow("1 2 3 4 5"))