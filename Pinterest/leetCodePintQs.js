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


var isSubsequence = function(s, t) {

    let i = 0;
    for(let char of t){
        if(i === s.length) return true;
        if(char === s[i]) i++;
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

    for (let digit of digits) { // digits = "23"
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

///////////////////////////////////////////////////////////////////////

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

 var shortestWay = function(source, target) {
    // t1s = "abc"
    // t1t = "abcbc"

    let j = 0;
    let count = 0;

    while(j < target.length){ // j = 3   target length = 5
        count++; // count = 2

        let flag = false;
        for(let i = 0; i < source.length; i++){ // 2
            if(source[i] === target[j]) { // a = a abc = abc
                j++; // j = 5
                flag = true;
            }
        }

        if(!flag) return -1;
    }
    return count;
};
