// Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree

class Tree {
    constructor(array, root) {
        this.array = array
        this.root = root
    }

    console(array, root) {
        console.log(array, root)
    }
}



export { Tree }