// Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree
import { mergeSort } from "./mergeSort"
import { Node } from "./nodeGenerator"

// let root = null

class Tree {
    constructor(array) {
        // this.value = value
        this.start = 0
        this.end = array.length
        // root = this.buildTree(array, this.start, this.end)
        this.root = this.buildTree(array, this.start, this.end - 1)
        this.print = this.prettyPrint(this.root)
    }

    buildTree(array, start, end) {

        let sortedArr = mergeSort(array)
        console.log(sortedArr, start, end)
        if (start > end) {
            console.log('start > end')
            return null
        }
        const mid = parseInt((start + end) / 2)
        const node = new Node(sortedArr[mid])
        node.left = this.buildTree(sortedArr, start, mid - 1)
        node.right = this.buildTree(sortedArr, mid + 1, end)
        console.log(mid, node.left, node.right)
        // console.log(`Mid is ${mid}, Node Left is ${node.left}, Node right is ${node.right}`)
        return node
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        if (node === null) {
            return
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "|   " : "    "}`, false)
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`)
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
        }
    }

}




export { Tree }