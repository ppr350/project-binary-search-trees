// Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree
// import { buildTree } from "./buildTree"
import { mergeSort } from "./mergeSort"
import { Node } from "./nodeGenerator"

class Tree {
    constructor(array) {
        this.start = 0
        this.end = array.length
        this.root = this.buildTree(array, this.start, this.end)

    }

    buildTree(array, start, end) {
        let sortedArr = mergeSort(array)
        // let start = 0
        // let end = sortedArr.length
        console.log(sortedArr, start, end)
        if (start > end) {
            return null
        }
        const mid = parseInt((start + end) / 2)
        const node = new Node(sortedArr[mid])
        node.left = this.buildTree(sortedArr)
        // console.log(node.left)
        
    }
    



}



export { Tree }