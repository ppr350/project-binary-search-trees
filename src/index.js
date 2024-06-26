// import _, { find } from "lodash";
import "./style.css";
import balancedBST from './BalancedBST.jpg'

import { Tree } from "./tree";
import { mergeSort } from "./mergeSort";
import { randomArr } from "./driver";

console.log("Project Binary Search Trees")

const container = document.querySelector('#container')
const treeImage = new Image()
treeImage.src = balancedBST
treeImage.classList.add('tree-image')
container.appendChild(treeImage)