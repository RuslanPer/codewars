function descendingOrder(n){
    const arr = n.toString().split('')
    const sortArr = arr.sort((a,b) => b-a)
    return Number(sortArr.join(''))
}

console.log(descendingOrder(42145))