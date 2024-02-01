// 3. BINARY TREE

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// ############################################################################################################################################

// STACK

/* TESTS

*/

/*  GAME PLAN

*/

// ITERIVE

let depthFirstValues = (root) => {
    if (root === null) return [];

    const values = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        values.push(node.val);

        // adding the right first puts the left at the top of stack
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return values;
};

/*
                [a]  -> [c, b] -> [c, e, d] -> [c, e] -> [c]    ->  [f]
                pops a  pops b -> pops d    -> pops e -> pops c ->

                -> ['a', 'b', 'd', 'e', 'c', 'f']
     a
   /   \
  b     c
 / \     \
d   e     f


*/

// RECURSIVELY

let depthFirstValues = (root) => {
    if (!root) return [];
    const left = depthFirstValues(root.left);
    const right = depthFirstValues(root.right);

    return [root.val, ...left, ...right];
};

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

// ITERATIVE
const breadthFirstValues = (root) => {
    const values = [];
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        values.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return values;
};
/*

     a
   /   \
  b     c
 / \     \
d   e     f


            [a] -> [b, c] -> [c, d, e] -> [d, e] -> [e] -> [f]

            a -> b -> c -> d -> e -> f

*/

//    -> ['a', 'b', 'c', 'd', 'e', 'f']

// RECURSIVELY

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

// iterive

const treeSum = (root) => {
    if (!root) return 0;

    let sum = 0;
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        const val = node.val;

        sum += val;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return sum;
};

// recursive

const treeSum = (root) => {
    if (!root) return 0;

    return root.val + treeSum(root.left) + treeSum(root.right);
};
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

const treeIncludes = (root, target) => {
    if (!root) return false;

    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val === target) return true;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return false;
};

const treeIncludes = (root, target) => {
    if (!root) return false;
    if (root.val === target) return true

    return treeIncludes(root.left, target) || treeIncludes(root.right, target)
};
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

Initialize a queue with root
set min variable to the root.val

while queue is not empty
    remove first node from queue and call it current
    update min to be the smaller of min and the val of current
    if current has left child add to queue
    if current has right child add to queue

After loop return min


while loop
*/

const treeMinValue = (root) => {
    const queue = [root]
    let min = root.val

    while (queue.length > 0) {
        const current = queue.shift()
        min = current.val < min ? current.val : min

        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }

    return min
}


// recursive

const treeMinValue = (root) => {
    if (!root) return null

    let min = root.val

    const leftMin = treeMinValue(root.left)
    const rightMin = treeMinValue(root.right)

    return Math.min(min, leftMin, rightMin)
}
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/
