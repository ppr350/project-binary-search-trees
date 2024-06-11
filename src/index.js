import _ from "lodash";
import "./style.css";
import { buildTree } from "./buildTree";
import { Tree } from "./tree";

// const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr = [2, 5, 7, 1, 12, 16, 17, 3, 4, 6, 6]
let end = arr.length
let newTree = new Tree(arr)

console.log("Project Binary Search Trees");
