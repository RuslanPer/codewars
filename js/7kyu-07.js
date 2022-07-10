function DNAStrand(dna){
    const arr = dna.split('').map(el => {
        switch (el) {
            case 'A':
                return 'T'
            case 'T':
                return 'A'
            case 'G':
                return 'C'
            case 'C':
                return 'G'
        }
    })

    return arr.join('')
}

console.log(DNAStrand('ATTGC'))