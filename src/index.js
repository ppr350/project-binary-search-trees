import _ from "lodash";
import "./style.css";

import { Tree } from "./tree";
import { mergeSort } from "./mergeSort";

console.log("Project Binary Search Trees")
const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr = [2, 5, 7, 1, 12, 16, 17, 3, 4, 6, 6]

let sortArr = mergeSort(arr)
// sortArr.insert(5)
let newTree = new Tree(sortArr)

newTree.insert(10)
newTree.delete(10)

