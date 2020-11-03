const BinarySearchTree = require('./DSA-BST')



let BST = new BinarySearchTree()
let BST2 = new BinarySearchTree()
let BST3 = new BinarySearchTree()
let BST4 = new BinarySearchTree()
let BST5 = new BinarySearchTree()
let BST6 = new BinarySearchTree()
let data1 = [3, 1, 4, 6, 9, 2, 5, 7]
let data2 = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N']
let data3 = [3]
let data4 = [ 4, 3, 2, 1, 5, 6, 7]
let data5 = [ 4, 3, 2, 5, 6]
let data6 = [ 4, 3, 2, 3, 5, 4, 6]

function main(key) {
    BST.insert(3, 3)
    BST.insert(1, 1)
    BST.insert(4, 4)
    BST.insert(6, 6)
    BST.insert(9, 9)
    BST.insert(2, 2)
    BST.insert(5, 5)
    BST.insert(7, 7)

    // BST.insert('E', 'E')
    // BST.insert('A', 'A')
    // BST.insert('S', 'S')
    // BST.insert('Y', 'Y')
    // BST.insert('Q', 'Q')
    // BST.insert('U', 'U')
    // BST.insert('E', 'E')
    // BST.insert('S', 'S')
    // BST.insert('T', 'T')
    // BST.insert('I', 'I')
    // BST.insert('O', 'O')
    // BST.insert('N', 'N')
}

// main()



function seedTree(tree, data) {
    for (let i = 0; i < data.length; i++) {
        tree.insert(data[i], data[i])
    }
}

seedTree(BST, data1)
seedTree(BST2, data2)
seedTree(BST3, data3)
seedTree(BST4, data4)
seedTree(BST5, data5)
seedTree(BST6, data6)


function displayTree(key) {
    if (key) {
        console.log(key)
        displayTree(key.left)
        displayTree(key.right)
    }
}

displayTree(BST)



function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

console.log(tree(BST))



function heightOfTree(tree) {
    let treeHeight = 0

    // no tree, no height
    if (!tree) {
        return 0
    }

    // if only root
    if (!tree.left && !tree.right) {
        return 1
    }
    
    if (tree.right) {
        // recursively find height of right side of the tree
        // assigning a value of 1 for each level
        let heightRight =  1 + heightOfTree(tree.right)

        // if the height on right is greater than treeHeight
        // set treeHeight to the height on the right
        if (heightRight > treeHeight) {
            treeHeight = heightRight
        }
    }

    if (tree.left) {
        // recursively find height of left side of the tree
        // assign a value of 1 for each level
        let heightLeft = 1 + heightOfTree(tree.left)

        // if the height on left is greater than treeHeight
        // set treeHeight to the height on the left
        if (heightLeft > treeHeight) {
            treeHeight = heightLeft
        }
    }

    return treeHeight
}

console.log(heightOfTree(BST))



function findHeight(tree) {
    if (!tree) return 0
    let left = findHeight(tree.left)
    let right = findHeight(tree.right)

    return Math.max(left, right) + 1
}

console.log(findHeight(BST))



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

console.log(isBST(3))
console.log(isBST([3, 4, 5]))
console.log(isBST(BST))
console.log(isBST(BST2))
console.log(isBST(BST3))


// Option 2: 
// function isBST(tree) {
//     if (!tree) {
//         return false;
//     }

//     if (tree.value) {
//         return true
//     }

//     if (tree.left && tree.left >= tree.value) {
//         return false;
//     }
    
//     if (tree.right && tree.right.value < tree.value) {
//         return false;
//     }

//     if (!isBST(tree.right) || !isBST(tree.left)) {
//         return false;
//     }

//     return true;
// }


// console.log(isBST(3))
// console.log(isBST([3, 4, 5]))
// console.log(isBST(BST))
// console.log(isBST(BST2))
// console.log(isBST(BST3))



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

console.log(thirdLargest(BST))



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

console.log(balancedTree(BST))   // false
console.log(balancedTree(BST2)) // false
console.log(balancedTree(BST3))  // true
console.log(balancedTree(BST4))  // false
console.log(balancedTree(BST5))  // true
console.log(balancedTree(BST6))  // true



function sameTree(arr1, arr2) {
    // arrays need to be same length, and have same root character
    if (arr1.length !== arr2.length || arr1[0] !== arr2[0]) {
        return false
    }

    if (arr1.length === 0 || arr2.length === 0) {
        return true;
    }

    // create variables to hold right and left tree values
    let right1 = []
    let right2 = []
    let left1 = []
    let left2 = []

    // // loop through, push the value to the correct array
    for (let i = 1; i < arr1.length; i++) {
        // compare the index to the 'root' value
        if (arr1[i] > arr1[0]) {
            right1.push(arr1[i])
        } else {
            left1.push(arr1[i])
        }
    }

    // repeat for array 2
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

console.log('sameTree', sameTree([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0]))
console.log('sameTree2', sameTree([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 0, 4]))
console.log('sameTree2', sameTree([3, 5, 4, 6, 1, 0, 2], [3, 1, 5, 2, 4, 6, 8]))