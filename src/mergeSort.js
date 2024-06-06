function mergeSort(unsortedArr) {
    if (unsortedArr.length <= 1) {
        return unsortedArr
    }
    let middle = Math.floor(unsortedArr.length / 2)
    let left = unsortedArr.slice(0, middle)
    let right = unsortedArr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
        if (left[0] == right[0]) {
            left.shift()
        } else if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}


export { mergeSort }