const addCompare = () => {
    let compare = localStorage.getItem('compare')
    if (!compare) {
        compare = []
        localStorage.setItem('compare', JSON.stringify(compare))
    }
}

const editCompareArray = (productToCompare) => {
    let compare = JSON.parse(localStorage.getItem('compare'))
    if (compare.length > 0) {
        let checkCompareProduct = compare.find((product) => product._id === productToCompare._id)
        if (checkCompareProduct) {
            compare = compare.filter((product) => product._id !== productToCompare._id)
        } else {
            compare.push(productToCompare)
        }
    } else {
        compare.push(productToCompare)
    }
    localStorage.setItem('compare', JSON.stringify(compare))
}

export { addCompare, editCompareArray }