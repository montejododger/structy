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

var depthFirstValues = root => {
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

var depthFirstValues = root => {
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
var breadthFirstValues = root => {
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

var treeSum = root => {
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

var treeSum = root => {
    if (!root) return 0;

    return root.val + treeSum(root.left) + treeSum(root.right);
};
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

var treeIncludes = (root, target) => {
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

var treeIncludes = (root, target) => {
    if (!root) return false;
    if (root.val === target) return true;

    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
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

var treeMinValue = root => {
    const queue = [root];
    let min = root.val;

    while (queue.length > 0) {
        const current = queue.shift();
        min = current.val < min ? current.val : min;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return min;
};

// recursive

var treeMinValue = root => {
    if (!root) return null;

    let min = root.val;

    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);

    return Math.min(min, leftMin, rightMin);
};
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

base case
    return root.val
*/

var maxPathSum = root => {
    if (!root) return -Infinity;
    if (!root.left && !root.right) return root.val;

    return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

    2 Base Cases
    If no more leafs or if oot equals target

    recursively go thru the left and right
    check left and right if they dont equal null
    return left or right with - unshift root.val


    lastly return null if nothing found

*/

// const pathFinder = (root, target) => {
//     const result = pathFinderHelper(root, target);

//     if (!result) return null;
//     if (result) return result.reverse();
// };

var pathFinder = (root, target) => {
    if (!root) return null;
    if (root.val === target) return [root.val];

    const left = pathFinder(root.left, target);
    const right = pathFinder(root.right, target);

    if (left) {
        left.unshift(root.val);
        return left;
    }

    if (right) {
        right.unshift(root.val);
        return right;
    }

    return null;
};
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

var treeValueCount = (root, target) => {
    if (!root) return 0;

    const match = root.val === target ? 1 : 0;

    return (
        match +
        treeValueCount(root.left, target) +
        treeValueCount(root.right, target)
    );
};
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

var howHigh = node => {
    if (!node) return -1;

    const left = howHigh(node.left);
    const right = howHigh(node.right);

    return 1 + Math.max(left, right);
};
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

    Breadth First
    store all values

    start the queue with root

    while loop
        shift the first element and add to values
        add left and right to queue

    return the last value
*/

var bottomRightValue = root => {
    const values = [];
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        values.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return values.pop();
};
// ############################################################################################################################################

/* TESTS
 */

/*  GAME PLAN
 */

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// recursive
var allTreePaths = root => {
    // if node is null return out
    if (!root) return [];
    // if node has no left or right return the root val
    if (!root.left && !root.right) return [[root.val]];

    // a collection of all the paths
    const paths = [];

    // progress down the left part of the tree
    const left = allTreePaths(root.left);
    //  [
    //    [b, d],
    //    [b, e]
    //  ]

    // iterate thru all the paths returned and add the root in front
    // push into paths collection
    for (let path in left) {
        paths.push(root.val, ...path);
    }

    // same as left
    const right = allTreePaths(root.right);
    //  [
    // [c, f]
    //  ]

    for (const path in right) {
        paths.push(root.val, ...path);
    }

    //return all paths

    return paths;
};
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/
// Depth First

var treeLevels = root => {
    // edge case
    if (!root) return [];

    // create a 2-D array to store levels and return
    const levels = [];

    // create a astack with an object in it to help figure out the levels
    const stack = [{ node: root, levelNum: 0 }];

    // while loop till empty
    while (stack.length > 0) {
        // deconstruct the last object o nthe stack
        const { node, levelNum } = stack.pop();

        // check if the length equals the level; if it does then it doesnt exist and we need to create the sub array
        // if it doesnt then we need to add the node the sub array that already exist
        levels.length === levelNum
            ? (levels[levelNum] = [node.val])
            : levels[levelNum].push(node.val);

        if (node.right)
            stack.push({ node: node.right, levelNum: levelNum + 1 });
        if (node.left) stack.push({ node: node.left, levelNum: levelNum + 1 });
    }
    return levels;
};

// BFS
var treeLevels = root => {
    if (root === null) return [];

    const levels = [];
    const queue = [{ node: root, levelNum: 0 }];
    while (queue.length > 0) {
        const { node, levelNum } = queue.shift();

        levels.length === levelNum
            ? levels.push([node.val])
            : levels[levelNum].push(node.val);

        if (node.left) queue.push({ node: node.left, levelNum: levelNum + 1 });

        if (node.right)
            queue.push({ node: node.right, levelNum: levelNum + 1 });
    }

    return levels;
};

// RECURSIVE
let tree_levels = root => {
    const levels = [];
    _treeLevels(root, levels, levelNum);

    return levels;
};

let _treeLevels = (root, levels, levelNum) => {
    if (!root) return [];

    levels.length === levelNum
        ? (levels[levelNum] = [root.val])
        : levels[levelNum].push(root.val);

    _treeLevels(root.left, levels, levelNum + 1);
    _treeLevels(root.right, levels, levelNum + 1);
};

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/
const levelAverage = root => {
    const levels = [];
    fillLevels(root, levels, 0);

    const avgs = [];
    for (let level of levels) {
        avgs.push(avg(level));
    }
    return avgs;
};

const fillLevels = (root, levels, levelNum) => {
    if (!root) return [];

    // if (levels.length === levelNum) {
    //     levels[levelNum] = [root.val];
    // } else {
    //     levels[levelNum].push(root.val);
    // }

    levels.length === levelNum
        ? (levels[levelNum] = [root.val])
        : levels[levelNum].push(root.val);

    fillLevels(root.left, levels, levelNum + 1);
    fillLevels(root.right, levels, levelNum + 1);
};

const avg = level => {
    const sum = level.reduce((acc, curr) => acc + curr, 0);
    return sum / array.length;
};
// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

var leafList = root => {
    if (root === null) return [];
    const leaves = [];
    const stack = [root];
    while (stack.length) {
        const current = stack.pop();
        if (current.left === null && current.right === null)
            leaves.push(current.val);

        if (current.right !== null) stack.push(current.right);
        if (current.left !== null) stack.push(current.left);
    }
    return leaves;
};

// RECURSIVE

var leafList = root => {
    const leafs = [];
    fillLeafs(root, leafs);

    return leafs;
};

const fillLeafs = (root, leafs) => {
    if (!root) return [];

    if (!root.left && !root.right) leafs.push(root.val);

    fillLeafs(root.left, leafs);
    fillLeafs(root.right, leafs);
};
