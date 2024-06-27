# project-binary-search-trees

## JavaScript Binary Search Trees
This is a project to create JavaScript Binary Search Tree. It has several useful methods to add data, traverse the tree, find data, re-organise the tree etc.

A binary search tree is a data structure used in computer science for sorting and storing data in a sorted manner. Each node’s left child has a lower value, and Rach node’s right child has a higher value. An advantage of using Binary Search Trees is speed when carry out operations such as search, delete and insert.

An example of Binary Search Tree:

				15
               /  \
              /    \
	  	    8       18
		   / \     /  \
		  3   9   16   20
				  /
				 19

- The size of a tree is the number of nodes in it (n).
- A subtree starts from one of the nodes in the tree as a local root, and consists of that and all its descendants.
- The descendants of a node are all the child nodes of that node, and all their child nodes.
- The node’s height is the maximum number of edges between that node and a leaf node.
- A node’s in order successor is the node that comes after it if we were to do in-order traversal. In-order traversal of the BST above would result in node 15 coming before node 16, so the successor of node 15 is node 16.

The above bullet points are sourced from W3 School’s DSA Binary Search Trees.

Balanced Binary Search Trees (BST)
Balanced Binary Search Trees take in a sorted array, find the middle of the array and make it the root of the tree, then carry out the same operation as regular Binary Search Trees. This structure allows for efficient searching, insertion and deletion operations on the data stored in the tree.

Steps to achieve this method:
- Set the middle element of the array as root
- Carry out the same operation for the left half and right half
    - Find the middle of the left half and make it the left child of the root created in step 1
    - Find the middle of the right half and make it the right child of the root created in step 2

The above bullet points are sourced from Geeks for Geeks’ Sorted Array to Balanced BST

## Full list of methods:
- buildTree
- insert
- delete
- find
- levelOrder
- inOrder
- preOrder
- postOrder
- height
- depth
- isBalanced
- rebalance
- prettyPrint

The Big O notation for Binary Search Trees O(log N).

## On Start Up
driver.js kicks in and run once it loads and does the following in that order:
- Create a binary search tree from an array of random numbers
- Confirms that the tree is balanced by calling isBalanced
- Print out all elements in level, pre, post, and in order
- Unbalance the tree by adding several number > 100
- Confirm that the tree is unbalanced by calling isBalanced
- Balance the tree by calling rebalance
- Confirm that the tree is balanced by calling isBalanced
- Print out all elements in level, pre, post, and in order

![binary search tree](https://github.com/ppr350/project-binary-search-trees/blob/main/src/BalancedBST.jpg?raw=true)

# Special Thanks
The Odin Project for providing this free course

User Mao && Don't rush learning! on The Odin Projects for explaining what the project's optional callback is looking for.

[Binary Search Tree: Traversal & Height - Beau teaches JavaScript by FreeCodeCamp](https://youtu.be/Aagf3RyK3Lw?si=Pm43L4u0980WvAEK)

[Implementation of Binary Search Tree in Javascript by Geeks for Geeks](https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/)

[Binary Search Tree on JavaScript, Traversals Breadth and Depth first search by Elena Litvinova](https://www.youtube.com/watch?v=dRqk5jvZ9TA&t=1187s)

[Big O Notation for Binary Search Trees by Persis Randolph](https://persis-randolph.medium.com/big-o-notation-for-binary-search-trees-8f0f50b016ef)

[W3 School’s DSA Binary Search Trees](https://www.w3schools.com/dsa/dsa_data_binarysearchtrees.php)