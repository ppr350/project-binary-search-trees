import _ from "lodash";
import "./style.css";
import { buildTree } from "./buildTree";
import { Tree } from "./tree";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let end = arr.length
let newTree = new Tree(arr)
// newTree.buildTree(arr)

// console.log(result)

console.log("Project Binary Search Trees");
