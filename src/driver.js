import { Tree } from "./tree";
import { mergeSort } from "./mergeSort";

// Write a driver script that does the following:

// 1. Create a binary search tree from an array of random numbers < 100. You can can create a function that returns an array of random numbers every time you call it if you wish
const randomArr = Array.from({length: 20}, () => Math.floor(Math.random() * 20));
console.log(`Randomly generated array ${randomArr}`)
let sortArr = mergeSort(randomArr)
console.log(`Use merge sort to sort the array and the result is ${sortArr}`)
let newTree = new Tree(sortArr)

// 2. Confirms that the tree is balanced by calling isBalanced
newTree.isBalanced()
// 3. Print out all elements in level, pre, post, and in order
let inOrderArr = newTree.inOrder()
console.log(`In Order: ${inOrderArr}`)

let preOrderArr = newTree.preOrder()
console.log(`Pre Order: ${preOrderArr}`)

let postOrderArr = newTree.postOrder()
console.log(`Post Order: ${postOrderArr}`)

// 4. Unbalance the tree by adding several number > 100
const BigNums = Array.from({length: 10}, () => Math.floor(Math.random() * 1000))
console.log(BigNums)
for (let i = 0; i < BigNums.length; i++) {
    newTree.insert(BigNums[i])
}

// 5. Confirm that the tree is unbalanced by calling isBalanced
newTree.isBalanced()

// 6. Balance the tree by calling rebalance
newTree.rebalance()

// 7. Confirm that the tree is balanced by calling isBalanced
newTree.isBalanced()

// 8. Print out all elements in level, pre, post, and in order
inOrderArr = newTree.inOrder()
console.log(`In Order: ${inOrderArr}`)

preOrderArr = newTree.preOrder()
console.log(`Pre Order: ${preOrderArr}`)

postOrderArr = newTree.postOrder()
console.log(`Post Order: ${postOrderArr}`)

export { randomArr }