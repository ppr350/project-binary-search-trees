// Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree
import { takeWhile } from "lodash"
import { Node } from "./nodeGenerator"

class Tree {
    constructor(array) {

        this.start = 0
        this.end = array.length
        this.root = this.buildTree(array, this.start, this.end - 1)
        // this.print = this.prettyPrint(this.root)
        // console.log(this.root)
    }

    // Write a buildTree(array) function that takes an array of data and turns it into a balanced binary tree full of Node objects appropriately placed
    buildTree(array, start, end) {
        // base case
        if (start > end) {
            return null
        }

        const mid = parseInt((start + end) / 2)
        const node = new Node(array[mid])
        node.left = this.buildTree(array, start, mid -1)
        node.right = this.buildTree(array, mid + 1, end)
        return node
    }

    // Write an insert(data) that insert the given data
    insert(data) {
        this.root = this._insertData(this.root, data)
        this.prettyPrint(this.root)
    }

    _insertData(root, data) {
        // base case
        if (root == null) {
            root = new Node(data)
            return root
        }

        if (root.data > data) {
            root.left = this._insertData(root.left, data)
        } else if (root.data < data) {
            root.right = this._insertData(root.right, data)
        }
        return root
    }
    
    // Write a deleteItem(data) that delete the given data
    delete(data) {
        this.root = this._deleteData(this.root, data)
        this.prettyPrint(this.root)
    }

    _deleteData(root, data) {
        // Base case
        if (root == null) {
            return root
        }

        // If the data to be deleted is lesser than the root data, then it's in the left subtree
        if (root.data > data) {
            root.left = this._deleteData(root.left, data)
        // If the data to deleted is greater than the root data, then it's in the right subtree
        } else if (root.data < data) {
            root.right = this._deleteData(root.right, data)
        // If key is same as root data
        } else {
            // Node with only one child or no child
            if (root.left === null) {
                return root.right
            } else if (root.right === null) {
                return root.left
            }
            // Node with two children, we need to get the inorder successor (smallest in the right subtree)
            root.data = this.minValue(root.right)
            // Delete the inoder successor
            root.right = this._deleteData(root.right, root.data)
        }
        return root
    }

    minValue(node) {
        let minv = node.data
        while (node.left !== null) {
            minv = node.left.data
            node = node.left
        }
        return minv
    }

    // Write a find(data) function that returns the node with the given data
    find(data) {
        let root = this.root
        while (root !== null) {
            if (data < root.data) {
                root = root.left
            } else if (data > root.data) {
                root = root.right
            } else if (data === root.data) {
                console.log(`found ${data}`)
                return root
            }
        }
        return null
    }

    // Write a levelOrder(callback) that accepts an optional callback function as its parameter
    // levelOrder should traverse the tree in breadth-first level order and provide each node as an argument to the callback
    // As a result, the callback will perform an operation on each node following the order in which they're traversed
    // levelOrder may be implemented using either iteration or recursion
    // The method should return an array of values if no callback is given as an argument
    // Tip: You will want to to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list
    levelOrder(callback) { // Breadth First Search
        if (this.root == null) {
            return []
        }

        const queue = [this.root]
        const result = []
        // console.log(result)

        while (queue.length > 0) {
            const node = queue.shift()
            if (callback) {
                callback(node)
            } else {
                result.push(node.data)
            }

            if (node.left != null) {
                queue.push(node.left)
            }
            if (node.right != null) {
                queue.push(node.right)
            }
        }
        if (!callback) {
            return result
        }
    }

    // Write inOrder(callback), preOrder(callback), and postOrder(callback) functions that also accept an optional callback as a parameter
    // Each of these should traverse the tree in their respective depth-first order and yield each node to the provided callback
    // The functions should return an array of values if no callback is given as an argument
    inOrder(callback, node = this.root, result = []) {
        if (node == null) {
            return
        }

        this.inOrder(callback, node.left, result)
        if (callback) {
            callback(node)
        }
        result.push(node.data)
        this.inOrder(callback, node.right, result)
        // console.log(result) // Array(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
        return result
    }

    preOrder(callback, node = this.root, result = []) {
        if (node == null) {
            return
        }

        if (callback) {
            callback(node)
        }
        result.push(node.data)
        this.preOrder(callback, node.left, result)
        this.preOrder(callback, node.right, result)
        // console.log(result) // Array(10) [ 5, 2, 1, 3, 4, 8, 6, 7, 9, 10 ]
        return result
    }

    postOrder(callback, node = this.root, result = []) {
        if (node == null) {
            return
        }

        this.postOrder(callback, node.left, result)
        this.postOrder(callback, node.right, result)
        if (callback) {
            callback(node)
        }
        result.push(node.data)

        // console.log(result) // Array(10) [ 1, 4, 3, 2, 7, 6, 10, 9, 8, 5 ]
        return result
    }

    // Write a height(node) function that returns the given node's height
    // Height is defined as the number of edges in the longest path from a given node to a leaf node
    height(node) {
        if (node == null) 
            return -1
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        // console.log(Math.max(leftHeight, rightHeight) + 1)
        return Math.max(leftHeight, rightHeight) + 1;
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