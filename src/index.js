// import _, { find } from "lodash";
import "./style.css";
import balancedBST from './BalancedBST.jpg'

import { Tree } from "./tree";
import { mergeSort } from "./mergeSort";

console.log("Project Binary Search Trees")

const container = document.querySelector('#container')
const treeImage = new Image()
treeImage.src = balancedBST
treeImage.classList.add('tree-image')
container.appendChild(treeImage)

// const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr = [2, 5, 7, 1, 12, 16, 17, 3, 4, 6, 6]

let sortArr = mergeSort(arr)
// sortArr.insert(5)
let newTree = new Tree(sortArr)

// newTree.insert(10)
// newTree.insert(11)
// newTree.delete(4)
// newTree.delete(5)
newTree.levelOrder()
// newTree.levelOrder(function(node) {
//     console.log(node.data)
// })
newTree.inOrder()
// newTree.inOrder(function(node) {
//     console.log(node.data)
// })
// newTree.preOrder(function(node) {
//     console.log(node.data)
// })
// newTree.preOrder()
// newTree.postOrder()
// newTree.height(1)
// console.log(" height of binary tree using recursive approach is ",
//     newTree.height(3)); 
// newTree.depth(2)
console.log(newTree.isBalanced(5))