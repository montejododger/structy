////////////////////////////////////////////////////////
//! EASY
//! Is Subsequence 392
/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false


Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.


Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
*/

var isSubsequence = function (s, t) {
    let i = 0;

    for (let char of t) {
        if (i === s.length) return true;
        if (char === s[i]) i++;
    }
    return i === s.length;
};
// one pointer to keep track of char in S
// loop thru t

////////////////////////////////////////////////////////
//! MEDIUM

//! Count snd Say 38

////////////////////////////////////////////////////////

//! Minimize Result by Adding Parentheses to Expression 2232

////////////////////////////////////////////////////////

//! Reorganize String 767
////////////////////////////////////////////////////////

//! Jump Game III 1306
/*

breath or depth

check if adding or subtracting will put you out of bounds 0 <  || < arr.length
change value of current index to -1 after moving

base case -1  false
base case 0 true

go in either direction + or -
recursively call fn with start being add or subtracted
    checking the value to return true or false;
    make sure it stays in bounds
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
////////////////////////////////////////////////////////

//! String Compression 443
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
////////////////////////////////////////////////////////

//! Meeting Rooms II 253
////////////////////////////////////////////////////////

//! Unique Paths II 63
////////////////////////////////////////////////////////

//! Letter Combination of a Phone Number 17
////////////////////////////////////////////////////////

//! HARD
//!

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

//!

////////////////////////////////////////////////////////
