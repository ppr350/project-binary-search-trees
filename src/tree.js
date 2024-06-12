// Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree
import { Node } from "./nodeGenerator"

class Tree {
    constructor(array) {

        this.start = 0
        this.end = array.length
        this.root = this.buildTree(array, this.start, this.end - 1)
        this.print = this.prettyPrint(this.root)
    }

    buildTree(array, start, end) {
        console.log(array, start, end)
        if (start > end) {
            return null
        }
        const mid = parseInt((start + end) / 2)
        const node = new Node(array[mid])
        node.left = this.buildTree(array, start, mid - 1)
        node.right = this.buildTree(array, mid + 1, end)
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