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

    for(let char of s){
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
