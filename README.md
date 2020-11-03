# Working with binary search trees

## 1) Draw a BST

* Given the data 3,1,4,6,9,2,5,7, if you were to insert this into an empty binary search tree, what would the tree look like? (Draw the tree, no coding needed here.)

````
                    3
                /       \
               1         4
                \         \
                 2          6
                          /  \
                         5    9
                             /
                            7  
````

* Draw the BST with the keys - E A S Y Q U E S T I O N

````
                  E
                /   \
               A     S
                    /  \ 
                   Q     Y
                 /      /
                E      U
                 \    /
                  I  S
                   \   \
                    O   T
                   /
                  N
````

## 2) Remove the Root

Show how the above trees would look like if you deleted the root of each tree. (Draw the trees, no coding needed here.)

````
                         4
                       /   \
                     1       6
                      \     /  \
                       2   5    9
                               /
                              7  
```` 

````

                  E
                /   \
               A     S
                    /  \ 
                   Q     Y
                 /      /
                I       U
                 \    /
                  O  S
                 /     \
                N       T
````

## 3) Create a BST class

Walk through the binary search tree code in the curriculum and understand it well. Then write a BinarySearchTree class with its core functions (insert(), remove(), find()) from scratch.

* Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. Compare your result with the result from the 1st exercise.

````
A: Same as #1
````

* Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. Compare your result with the result from the 1st exercise.

````
A: Same as #1
````

## 4) What does this program do?

Without running this code in your code editor, explain what the following program does. Show with an example the result of executing this program. What is the runtime of this algorithm?

````
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}
````

````
A: 

The function takes the values from the left of the tree, adds them to the root, and then adds the values from the right of the tree.  Anytime it runs into a "null" as it sums the values, it returns a zero.
````

## 5) Height of a BST

Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?

````
Solution 1

function heightOfTree(tree) {
    let treeHeight = 0

    if (!tree) {
        return 0
    }

    if (!tree.left && !tree.right) {
        return 1
    }
    
    if (tree.right) {
        let heightRight =  1 + heightOfTree(tree.right)

        if (heightRight > treeHeight) {
            treeHeight = heightRight
        }
    }

    if (tree.left) {
        let heightLeft = 1 + heightOfTree(tree.left)

        if (heightLeft > treeHeight) {
            treeHeight = heightLeft
        }
    }

    return treeHeight
}
````

````
Solution 2

function findHeight(tree) {
    if (!tree) return 0
    let left = findHeight(tree.left)
    let right = findHeight(tree.right)

    return Math.max(left, right) + 1
}
````

## 6 Is it a BST?

Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.

````
function isBST(tree) {
    if (!tree.value) {
        return false
    }

    if (tree.left) {
        if (tree.left.value >= tree.value) {
            return false
        } else {
            isBST(tree.left)
        }
    }

    if (tree.right) {
        if (tree.right.value < tree.value) {
            return false
        } else {
            isBST(tree.right)
        }
    }
    return true
}
````

## 7) 3rd largest node

Write an algorithm to find the 3rd largest node in a binary search tree.

````
function thirdLargest(bst) {
    if (!bst) return null;
    let checked = [];
    function check(node) {
        if (node.left) {
            check(node.left)
        }
      
        checked.push(node.value);

        if (node.right) {
            check(node.right);
        }
    }

    check(bst);
    checked = checked.sort();

    return checked[checked.length - 3];
}
````

## 8) Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).

````
function balancedTree(tree) {
    let balanced = true

    function _height(tree) {
        if (!tree) {
            return 0
        }

        let leftHeight = _height(tree.left)
        let rightHeight = _height(tree.right)
        let heightDiff = 0

        if (leftHeight > rightHeight) {
            heightDiff = leftHeight - rightHeight
        } else {
            heightDiff = rightHeight - leftHeight
        }
    
        if (heightDiff > 1) {
            balanced = false
            return
        } else {
            return Math.max(leftHeight, rightHeight) + 1
        }
    }

    _height(tree)
    return balanced
}
````

## 9) Are they the same BSTs?

You are given two arrays which represent two sequences of keys that are used to create two binary search trees. Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree. You may use another data structure such as an array or a linked list but don't construct the BST. What is the time complexity of your algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will create the exact same BSTs and your program should return true.

````
function sameTree(arr1, arr2) {
    if (arr1.length !== arr2.length || arr1[0] !== arr2[0]) {
        return false
    }

    if (arr1.length === 0 || arr2.length === 0) {
        return true;
    }

    let right1 = []
    let right2 = []
    let left1 = []
    let left2 = []

    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] > arr1[0]) {
            right1.push(arr1[i])
        } else {
            left1.push(arr1[i])
        }
    }

    for (let i = 1; i < arr2.length; i++) {
        if (arr2[i] > arr2[0]) {
            right2.push(arr2[i])
        } else {
            left2.push(arr2[i])
        }
    }

    return (
        sameTree(right1, right2) && sameTree(left1, left2)
    )
}
````