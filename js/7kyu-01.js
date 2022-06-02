function getCount(str) {
    let vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let arr = str.split('')

    vowels.forEach( (v) => {
        arr.forEach((l) => {
            if (l === v) {
                vowelsCount ++
            }
        })
    })

    return vowelsCount

}

console.log(getCount('ruslan pershin'))