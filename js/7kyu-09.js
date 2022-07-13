function longest(s1, s2) {
    let arr = (s1 + s2).split('').sort((a,b) => a.localeCompare(b))
    let setArr = new Set(arr)
    return [...setArr].join('')
}

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'))