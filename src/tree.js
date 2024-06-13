// Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree
import { Node } from "./nodeGenerator"

class Tree {
    constructor(array) {

        this.start = 0
        this.end = array.length
        this.root = this.buildTree(array, this.start, this.end - 1)
        this.print = this.prettyPrint(this.root)
    }

    // Write a buildTree(array) function that takes an array of data and turns it into a balanced binary tree full of Node objects appropriately placed
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

    // Write an insert(data) that insert the given data
    insert(data) {

    }
    
    // Write a deleteItem(data) that delete the given data
    deleteItem(data) {

    }

    // Write a find(data) function that returns the node with the given data
    find(data) {

    }

    // Write a levelOrder(callback) that accepts an optional callback function as its parameter
    // levelOrder should traverse the tree in breadth-first level order and provide each node as an argument to the callback
    // As a result, the callback will perform an operation on each node following the order in which they're traversed
    // levelOrder may be implemented using either iteration or recursion
    // The method should return an array of values if no callback is given as an argument
    // Tip: You will want to to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list
    levelOrder(callback) {
        
    }

    // Write inOrder(callback), preOrder(callback), and postOrder(callback) functions that also accept an optional callback as a parameter
    // Each of these should traverse the tree in their respective depth-first order and yield each node to the provided callback
    // The functions should return an array of values if no callback is given as an argument
    inOrder(callback) {

    }

    preOrder(callback) {

    }

    postOrder(callback) {

    }

    // Write a height(node) function that returns the given node's height
    // Height is defined as the number of edges in the longest path from a given node to a leaf node
    height(node) {

    }

    // Write a depth(node) function that returns the given node's depth
    // Depth is defines as the number of edges in the path from a given node to the tree's root node
    depth(node) {

    }

    // Write an isBalanced function that checks if the tree is balanced
    // A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1
    isBalanced() {

    }

    // Write a rebalance function that rebalances an unbalanced tree
    // Tip: You'll want to use a traversal method to provide a new array to the buildTree function
    rebalance() {

    }

    // Visualize your binary tree
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