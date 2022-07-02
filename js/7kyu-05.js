function accum(s) {
    const arr = s.split('')
    const newArr = []

    arr.map((el, i) => {
        for (let j = 0; j < i+1; j++) {
            if(j===0) {
                newArr.push(el.toUpperCase())
            }else {
                newArr.push(el.toLowerCase())
            }
        }
        if(i!==arr.length-1){
            newArr.push('-')
        }

    })

    return newArr.join('')
}

console.log(accum('abcd'))