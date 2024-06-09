// Write a buildTree(array) function that takes an array of data, and turns it into a balance binary tree full of Node objects appropriately place
// The buidTree function should return the level-0 root node

import { mergeSort } from "./mergeSort";
import { Node } from "./nodeGenerator";
import { Tree } from "./tree";

function buildTree(arr) {

    // function to sort unsorted array and remove duplicates
    let sortedArr = mergeSort(arr)
    let start = 0
    let end = sortedArr.length
    // console.log(end)
    // if (start > end) {
    //     return null
    // }
    // const mid = parseInt((start + end) / 2)
    // const node = new Node(sortedArr[mid])
    // // console.log(mid, node, sortedArr)
    // node.left = buildTree(sortedArr)
    const root = parseInt((start + end) / 2)
    console.log(sortedArr, root)
    const tree = new Tree(sortedArr, root)
    tree.showInfo()
}


// export { buildTree }