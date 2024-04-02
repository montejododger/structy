// EASY

var isSubsequence = function (s, t) {
    let i = 0;

    for (let j = 0; j < t.length; j++) {
        if (i === s.length) return true;
        if (s[i] === t[j]) {
            i++;
        }
    }

    return i === s.length;
};

var isSubsequence = function (s, t) {
    let i = 0;
    for (let char of t) {
        if (i === s.length) return true;
        if (char === s[i]) i++;
    }

    return i === s.length;
};

// MEDIUM

var countAndSay = function (n) {
    let results = "1";

    for (let i = 2; i <= n; i++) {
        // console.log(`results = ${results}`)
        let curr = "";
        let count = 1;
        for (let j = 0; j < results.length; j++) {
            if (results[j] === results[j + 1]) {
                count++;
            } else {
                curr += String(count) + results[j];
                count = 1;
            }
            // console.log(`curr = ${curr}`)
        }

        results = curr;
    }

    return results;
};

///////////////////////////////////////////////////////////////
//* MEDIUM
//! HIGH LEVEL OVERVIEW

// find the plus sign
// init two variables to keep track of min value and min expression
// loop thru from 0 to plus sign
// nested loop to loop thru the nest num after plus sign

//create variable for the expression A B C D

// check the value of the expression
// if expression is less the  min update min and min expression

// return min expression

var minimizeResult = function (expression) {
    // find the index of plus sign to know where to split the parenthesis
    let index = expression.indexOf("+");
    // console.log(index, expression.length)
    let min = Infinity; // init a variable to store min value
    let response = ""; // init a variable to store the string that would yield the min

    for (let i = 0; i < index; i++) {
        for (let j = index + 2; j <= expression.length; j++) {
            // console.log(`j = ${j}`)
            // edge case for A is if its at the very beginning AKA 0, make A = 1

            let A = i === 0 ? 1 : Number(expression.slice(0, i));
            // console.log(A) // 1
            let B = Number(expression.slice(i, index)); // 0, 3
            // console.log(B) // 999
            let C = Number(expression.slice(index + 1, j)); // 3 + 1, 5 -> 4, 5
            // console.log(C) // 9
            // the edge case for D is that if it is equal to the end then make d = 1
            let D = j === expression.length ? 1 : Number(expression.slice(j)); // 5
            // console.log(`D = ${D}`) // 99
            // console.log('break')
            let result = A * (B + C) * D; // 1 * (999 * 9) * 99
            // console.log(`result = ${result}`)

            if (result < min) {
                // Construct the expression using the current slices
                let firstPiece = expression.substring(0, i); // "" remember the edge cases
                let middlePiece = expression.substring(i, j); // (247+3)
                let lastPiece = expression.substring(j); // 8  remember the edge cases
                // console.log(`firstPiece = ${firstPiece}`)
                let newExp = firstPiece + "(" + middlePiece + ")" + lastPiece; // '' + '(' + '247+3' + ')' + '8'
                // console.log(`newExp = ${newExp}`)
                min = result;
                response = newExp;
            }
        }
    }
    return response;
};

///////////////////////////////////////////////////////////////

/*
767. Reorganize String
//* MEDIUM
Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.



Example 1:

Input: s = "aab"
Output: "aba"
Example 2:

Input: s = "aaab"
Output: ""


Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.
*/
//! HIGH LEVEL OVERVIEW
// create an array to place the char alternating
// get a count of all chars and store in an OBJ
// find the most freq char and the count of that char

// loop to place the most freq in alternating spots
// early check to see if value is 0 after check, for possible early return

// set freq chars count to 0
// loop thru the OBJ
// check the value of the current key
// check the value of i and reset if needed
// start placing the other chars in the array alternati g between the most freq

var reorganizeString = function (s) {
    const count = {};
    let newExp = Array(s.length);

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    // for(let char of s) count[char] = (count[char] || 0) + 1

    let freqChar;
    let maxVal = -Infinity;

    for (let char in count) {
        const val = count[char];
        if (val > maxVal) {
            freqChar = char;
            maxVal = val;
        }
    }

    let i = 0;
    while (maxVal > 0 && i < s.length) {
        newExp[i] = freqChar;
        maxVal--;
        i += 2;
    }

    if (maxVal !== 0) return "";

    count[freqChar] = 0;

    for (let key in count) {
        while (count[key] > 0) {
            i = i >= s.length ? 1 : i;
            newExp[i] = key;
            count[key] -= 1;
            i += 2;
        }
    }

    return newExp.join("");
};

///////////////////////////////////////////////////////////////

//! HIGH LEVEL OVERVIEW
//

// RECURSIVE
var letterCombinations = function (digits) {
    if (!digits) return [];

    digitsToLetters = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqr",
        8: "tuv",
        9: "wxyz",
    };
    const results = [];

    function backtrack(index, path) {
        if (path.length === digits.length) {
            results.push(path);
            return;
        }

        const possibleLetters = digitsToLetters[digits[index]];
        for (let i = 0; i < possibleLetters.length; i++) {
            backtrack(index + 1, path + possibleLetters[i]);
        }
    }

    backtrack(0, "");

    return results;
};

// ITERATIVE
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    const digitsToLetters = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };

    let queue = [""]; // Start with an empty string to build upon

    for (let digit of digits) {
        // digits = "23"
        let levelSize = queue.length; // Number of combinations to expand
        for (let i = 0; i < levelSize; i++) {
            let currentCombination = queue.shift(); // Take the first combination off the queue
            for (let letter of digitsToLetters[digit]) {
                queue.push(currentCombination + letter); // Create new combinations and add them to the queue
            }
        }
    }

    return queue; // The queue now contains all possible combinations
};
////////////////////////////////////////////////////////////////////////////

//! HIGH LEVEL OVERVIEW

var compress = function (chars) {
    // two pointers // sliding window ish
    let i = 0;
    let j = 0;

    // while loop to loop thru once
    while (j < chars.length) {
        // init a variable for char and count
        let char = chars[j];
        let count = 0;

        // check if chars are the same
        // while loop to increment j while they are the same char, also increasing count
        while (chars[j] === char) {
            j++;
            count++;
        }

        // assign current index i to char and increment i to next position
        chars[i] = char;
        i++;

        // check count if it more then 1
        // assign the value to the current index and increment
        if (count > 1) {
            const strCount = String(count);
            for (let char of strCount) {
                chars[i] = char;
                i++;
            }
        }
    }

    // return i, which is the total length of the new str

    return i;
};

///////////////////////////////////////////////////////////////////////
//! UNIQUE PATHS II 63

var uniquePathsWithObstacles = function (obstacleGrid) {};

// DFS SEARCH
//[[0,0,0],[0,1,0],[0,0,0]]

/*
grid is  M x N
tryung to get to the bottom right which is m - 1 && n - 1
they need t
base case
check value of current if 1 return false
if 0 then proceed with incrementing to the right or left


*/

///////////////////////////////////////////////////////////////////////////

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Given two strings source and target, return the minimum number of subsequences of source such that their concatenation equals target. If the task is impossible, return -1.

// Example 1:          i ->            j
// Input: source = "abc", target = "abcbc"

// Output: 2
// Explanation: The target "abcbc" can be formed by "abc" and "bc", which are subsequences of source "abc".

// Example 2:
// Input: source = "abc", target = "acdbc""
// Output: -1
// Explanation: The target string cannot be constructed from the subsequences of source string due to the character "d" in target string.

// Example 3:
// Input: source = "xyz", target = "xz y xz"
// Output: 3
// Explanation: The target string can be constructed as follows "xz" + "y" + "xz".

// one point for source char and one point for targer char

// create 2 point i and j
// init count = 0
// while loop until j gets to end  j < target.length
// increment count every for loop
// check value of source and target at i && j
// if they match incement both
// if not increment just i to check next char in source
// if target[j] is not found return -1

// return count

var shortestWay = function (source, target) {
    // t1s = "abc"
    // t1t = "abcbc"

    let j = 0;
    let count = 0;

    while (j < target.length) {
        // j = 3   target length = 5
        count++; // count = 2

        let flag = false;
        for (let i = 0; i < source.length; i++) {
            // 2
            if (source[i] === target[j]) {
                // a = a abc = abc
                j++; // j = 5
                flag = true;
            }
        }

        if (!flag) return -1;
    }
    return count;
};

var shortestWay = function (source, target) {
    let j = 0,
        count = 0;
    while (j < target.length) {
        let tempJ = j;
        for (let i = 0; i < source.length; i++) {
            if (j < target.length && source[i] === target[j]) j++;
        }
        if (tempJ === j) return -1; // No progress, character in target not found in source
        count++;
    }
    return count;
};

/////////////////////////////////////////////////////////////////////////////
//! JUMP GAME III 1306
//
// Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach any index with value 0.

// Notice that you can not jump outside of the array at any time.

// Example 1:
// Input: arr = [4,2,3,0,3,1,2], start = 5
// Output: true
// Explanation:
// All possible ways to reach at index 3 with value 0 are:
// index 5 -> index 4 -> index 1 -> index 3
// index 5 -> index 6 -> index 4 -> index 1 -> index 3

// Example 2:
// Input: arr = [4,2,3,0,3,1,2], start = 0
// Output: true
// Explanation:
// One possible way to reach at index 3 with value 0 is:
// index 0 -> index 4 -> index 1 -> index 3

// Example 3:
// Input: arr = [3,0,2,1,2], start = 2
// Output: false
// Explanation: There is no way to reach at index 1 with value 0.

/*

breath or depth

check if adding or subtracting will put you out of bounds 0 <  || < arr.length
change value of current index to -1 after moving

base case -1  false
// base case 0 true

go in either direction + or -
recursively call fn with start being add or subtracted
    checking the value to return true or false;
    // make sure it stays in bounds
    if arr[start] === 0 return true
const plus  =   start + arr[i]
const minus =   start - arr[j]

return (canReach(arr,minus) || canReach(arr,plus))

*/
// Example 1:
// Input: arr = [4,2,3,0,3,1,2], start = 5
// Output: true
// Explanation:
// All possible ways to reach at index 3 with value 0 are:
// index 5 -> index 4 -> index 1 -> index 3
// index 5 -> index 6 -> index 4 -> index 1 -> index 3

var canReach = function (arr, start) {
    // arr = [4,2,3,0,3,1,2] start = 5
    if (start < 0 || start >= arr.length || arr[start] === -1) return false;
    if (arr[start] === 0) return true;

    const plus = start + arr[start]; //  5 + 1, 6 + 2,
    const minus = start - arr[start]; // 5 - 1, 4 - 3,
    arr[start] = -1; // [4,2,3,0,3,-1,2]
    // [4,2,3,0,3,-1,2]
    // arr[start] = -1; // [4,2,3,0,3,-1,2]
    // [4,2,3,0,-1,-1,2]
    // start (on minus path)
    // [4,-1,3,0,3,-1,2]
    //min (on minus path)

    //(canReach(arr, 5 + 1)       (canReach(arr, 5 - 1)
    return canReach(arr, plus) || canReach(arr, minus);
};
