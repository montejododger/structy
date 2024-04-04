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

var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i === s.length;
};

////////////////////////////////////////////////////////
//! MEDIUM

/*

figure out the base case, in this case at last thing we want to return or what we want to start with is '1'

recursively call till base case
create an emoty string variable
init a count starting at 1 cause there will always be one

loop thru the recursive call return, which is a string with a for loop

check if i is at least 2 index away from the end and check if the current and current + 1 match, increment count if so

otherwise concate to newStr the count and the current index off the returned string from the previous call
*/

//! Count snd Say 38

//recursive

var countAndSay = function (n) {
    if (n === 1) return "1"; // Base case

    const prev = countAndSay(n - 1); // Recursive call to get the (n-1)th term
    let results = ""; // Initialize an empty string to build the nth term
    let count = 1; // Initialize count

    for (let i = 0; i < prev.length; i++) {
        // Iterate through the (n-1)th term
        if (i < prev.length - 1 && prev[i] === prev[i + 1]) {
            // this check is important as we need to go to the last number but also need to check if they are the same

            count++; // If the current and next characters are the same, increment count
        } else {
            results += String(count) + prev[i]; // Append the count and character to results
            count = 1; // Reset count for the next character
        }
    }

    return results; // Return the constructed string
};

// iterative

var countAndSay = function (n) {
    // base case will be the same
    if (n === 1) return "1";

    // create the initial string
    let prev = "1";

    // starting at 2 go up till n
    for (let i = 2; i <= n; i++) {
        //new str and count variable
        let newStr = "";
        let count = 1;

        // this is to check for consecutives
        for (let j = 1; j < prev.length; j++) {
            if (prev[j] === prev[j - 1]) {
                count++;
            } else {
                newStr += String(count) + prev[j - 1];
                count = 1;
            }
        }

        // this is a catch for any duplicates that wold get added since we started at 1 in the loop above
        newStr += String(count) + prev[prev.length - 1];
        prev = newStr;
    }

    return prev;
};

var countAndSay = function (n) {
    if (n === 1) return "1";

    let prev = "1";

    for (let i = 1; i < n; i++) {
        let j = 0;
        let k = 0;
        let newPrev = "";

        while (k <= prev.length) {
            if (prev[j] === prev[k]) {
                k++;
            } else {
                const num = k - j;
                newPrev += num + prev[j];
                j = k;
            }
        }

        prev = newPrev;
    }

    return prev;
};
////////////////////////////////////////////////////////

//! Minimize Result by Adding Parentheses to Expression 2232

/*
find the plus sign
two variables for the lowest sum and the expression of lowest sum


loop thru the first part till the plus sign
    nested loop and from plus sign to the end

    create pieces for each opart of the expression
        be mindful of beginning and end and have them set to 1

        create the expression to find the new sum
        check if new sum is lower then any prev sum

            if new sum is lower
                make lowest sum = to new sum
                and change the expression to the new expression


    return new lowest expression
*/

var minimizeResult = function (expression) {
    const plusIndex = expression.indexOf("+");

    let minVal = Infinity;
    let minExp = "";

    for (let i = 0; i < plusIndex; i++) {
        for (let j = expression.length; j > plusIndex + 1; j--) {
            let A = i === 0 ? 1 : Number(expression.slice(0, i));
            let B = Number(expression.slice(i, plusIndex));
            let C = Number(expression.slice(plusIndex + 1, j));
            let D = j === expression.length ? 1 : Number(expression.slice(j));
            const newVal = A * (B + C) * D;

            if (newVal < minVal) {
                const firstPart =
                    expression.slice(0, i) +
                    "(" +
                    expression.slice(i, plusIndex);
                const secondPart =
                    expression.slice(plusIndex, j) + ")" + expression.slice(j);
                minVal = newVal;
                minExp = `${firstPart}${secondPart}`;
            }
        }
    }

    return minExp;
};

var minimizeResult = function (expression) {
    const [leftPart, rightPart] = expression.split("+");
    let minValue = Infinity;
    let answer = "";

    for (let i = 0; i < leftPart.length; i++) {
        for (let j = 0; j < rightPart.length; j++) {
            const a = i === 0 ? 1 : Number(leftPart.substring(0, i));
            const b = Number(leftPart.substring(i));
            const c = Number(rightPart.substring(0, j + 1));
            const d =
                j === rightPart.length - 1
                    ? 1
                    : Number(rightPart.substring(j + 1));

            const currentSum = a * (b + c) * d;
            // console.log(`${a} * (${b} + ${c}) * ${d}`)
            // console.log(`currentSum = ${currentSum}`)
            // console.log(`a = ${a}`)
            // console.log(`d = ${d}`)

            if (currentSum < minValue) {
                minValue = currentSum;
                answer = `${leftPart.substring(0, i)}(${leftPart.substring(
                    i
                )}+${rightPart.substring(0, j + 1)})${rightPart.substring(
                    j + 1
                )}`;
            }
        }
    }

    return answer;
};
////////////////////////////////////////////////////////

/*
get a count of all chars in s

sort chars by there count

create an empty array and a new pointer at 0

loop thru a deconstructed sorted chars array

    check if and of the counts are more then half of the length of s
        early return if so

        start placing chars in new array at pointer and increment point by 2
        if point goes out of bound or equals lenth of s reset to 1

return thr new array joined to make a string;

*/

//! Reorganize String 767

var reorganizeString = function (s) {
    let count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    const sortedChars = Object.entries(count).sort((a, b) => b[1] - a[1]);

    const results = [];

    let index = 0;
    for (const [char, freq] of sortedChars) {
        if (freq > Math.floor((s.length + 1) / 2)) return "";

        for (let j = 0; j < freq; j++) {
            if (index >= s.length) index = 1; // this loops it back to 1 after its filled the even number of spaces

            results[index] = char;
            index += 2;
        }
    }

    return results.join("");
};

var reorganizeString = function (s) {
    let count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    let sortedChars = Object.entries(count).sort((a, b) => b[1] - a[1]);

    let i = 0;
    let newStr = new Array(s.length);

    // only need ot check the first time not every single time
    if (sortedChars[0][1] > Math.floor(s.length + 1) / 2) return "";

    for (let [char, freq] of sortedChars) {
        // changed from a for loop to a while loop, which can feel simplier
        while (freq > 0) {
            if (i >= s.length) i = 1;
            newStr[i] = char;
            freq--;
            i += 2;
        }
    }

    return newStr.join("");
};
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

var canReach = function (arr, start) {
    const queue = [start];

    while (queue.length > 0) {
        // console.log(`queue = ${queue}`);
        // console.log(`arr = ${arr}`);
        const curr = queue.shift();

        if (arr[curr] === 0) return true;

        const jumpDistance = arr[curr];
        arr[curr] = -1;

        const forward = curr + jumpDistance;
        const backwards = curr - jumpDistance;

        if (forward < arr.length && arr[forward] !== -1) queue.push(forward);

        if (backwards >= 0 && arr[backwards] !== -1) queue.push(backwards);
    }

    return false;
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

var compress = function (chars) {
    let i = 0;
    let j = 0;

    while (j < chars.length) {
        let currChar = chars[i];

        while (currChar === chars[j]) {
            j++;
        }

        const num = j - i;
        chars[i] = currChar;
        i++;

        if (num > 1) {
            const numStr = String(num);
            for (let num of numStr) {
                chars[i] = num;
                i++;
            }
        }
    }

    return i;
};
////////////////////////////////////////////////////////

//! Meeting Rooms II 253
/*
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Explanation:

You need two meeting rooms.
Room 1 could be booked for the meeting from 0 to 30.
Room 2 can be used for the meetings from 5 to 10 and then from 15 to 20.

Input: intervals = [[7,10],[2,4]]
Output: 1
Explanation:

Only one meeting room is needed.
The room can be used for the first meeting from 2 to 4 and then for the second meeting from 7 to 10.

Input: intervals = [[13,15],[1,13]]
Output: 1
Explanation:

Only one meeting room is required because the meetings don't overlap in time.
*/

// intervals = [[0, 30], [5, 10], [15, 20]]

function minMeetingRooms(intervals) {
    if (intervals.length === 0) return 0;

    // Step 1: Sort the intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(`intervals = ${intervals}`);

    // Initialize a min heap (using an array to simulate)
    let minHeap = [intervals[0][1]]; // Add the end time of the first meeting
    console.log(`minHeap = ${minHeap}`);

    // Step 2: Iterate through the sorted intervals
    for (let i = 1; i < intervals.length; i++) {
        // If the current meeting starts after the earliest ending meeting, reuse the room
        console.log(`intervals[i][0] = ${intervals[i][0]}`);
        if (intervals[i][0] >= minHeap[0]) {
            minHeap.shift(); // Remove the earliest ending meeting
        }

        // Add the current meeting's end time to the heap
        minHeap.push(intervals[i][1]);
        // Keep the heap sorted (min heap based on end times)
        minHeap.sort((a, b) => a - b);
    }

    // The size of the heap represents the number of rooms needed
    return minHeap.length;
}

////////////////////////////////////////////////////////

//! Unique Paths II 63

var uniquePathsWithObstacles = function (obstacleGrid) {
    const rowL = obstacleGrid.length;
    const colL = obstacleGrid[0].length;
    const [lastRow, lastCol] = [
        obstacleGrid.length - 1,
        obstacleGrid[0].length - 1,
    ];

    if (obstacleGrid[0][0] === 1 || obstacleGrid[lastRow][lastCol] === 1)
        return 0;

    function search(x, y) {
        if (x >= rowL || y >= colL || obstacleGrid[x][y] === 1) return 0;

        if (x === lastRow && y === lastCol) return 1;

        return search(x + 1, y) + search(x, y + 1);
    }

    return search(0, 0);
};
////////////////////////////////////////////////////////

//! Letter Combination of a Phone Number 17

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

    // starts with length of 1
    let queue = [""]; // Start with an empty string to build upon
    // console.log(queue.length)

    for (let digit of digits) {
        let levelSize = queue.length; // Number of combinations to expand
        // console.log(levelSize)
        for (let i = 0; i < levelSize; i++) {
            // console.log(levelSize)
            let currentCombination = queue.shift(); // Take the first combination off the queue
            for (let letter of digitsToLetters[digit]) {
                queue.push(currentCombination + letter); // Create new combinations and add them to the queue
            }
        }
    }

    return queue; // The queue now contains all possible combinations
};

var letterCombinations = function (digits) {
    if (!digits) return [];
    let combos = [""];

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

    for (let digit of digits) {
        const possibleChars = digitsToLetters[digit];
        combos = combos.flatMap((prefix) =>
            possibleChars.split("").map((letter) => prefix + letter)
        );
    }

    return combos;
};
////////////////////////////////////////////////////////
// Description
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Given two strings source and target, return the minimum number of subsequences of source such that their concatenation equals target. If the task is impossible, return -1.

// example 1
// Input: source = "abc", target = "abcbc"
// Output: 2
// Explanation: The target "abcbc" can be formed by "abc" and "bc", which are subsequences of source "abc".

// example 2
// Input: source = "abc", target = "acdbc"
// Output: -1
// Explanation: The target string cannot be constructed from the subsequences of source string due to the character "d" in target string.

// example 3
// Input: source = "xyz", target = "xzyxz"
// Output: 3
// Explanation: The target string can be constructed as follows "xz" + "y" + "xz".

// Constraints:

// 1 <= source.length, target.length <= 1000
// source and target consist of lowercase English letters.

var shortestWay = function (source, target) {};

////////////////////////////////////////////////////////

//! HARD
//!

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

//!

////////////////////////////////////////////////////////
