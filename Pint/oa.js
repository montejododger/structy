//LeetCode 32, 416

//  Q1 type problems
//  LeetCode 238. Product of Array Except Self
//  LeetCode 140. Word Break II

//  Q2 type problems
//  LeetCode 32. Longest Valid Parentheses
//  LeetCode 416. Partition Equal Subset Sum

//  Q3

//  Q4 type problems

/*
238. Product of Array Except Self
Solved
Medium
Topics
Companies
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.



Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]


Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)



*/

// prefix ans suffix approach // divid the problem into small sub problems

var productExceptSelf = function (nums) {
    const length = nums.length;

    const leftProducts = Array(length).fill(1);
    const rightProducts = Array(length).fill(1);
    const sums = Array(length);

    let leftProd = 1;
    for (let i = 0; i < len; i++) {
        leftProducts[i] = leftProd;
        leftProd *= nums[i];
    }
};

var wordBreak = function (s, wordDict) {};

wordBreak("leetcode", ["leet", "code"]);

var wordBreak = function (s, wordDict) {
    // Initialize the DP array, with dp[0] being true
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    // Convert wordDict to a Set for faster lookup
    let wordSet = new Set(wordDict);

    // Start iterating through the string 's'
    for (let i = 1; i <= s.length; i++) {
        // Check each substring ending at 'i'
        for (let j = 0; j < i; j++) {
            // If dp[j] is true and the substring from j to i is in wordDict...
            console.log(s.substring(j, i));

            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true; // Mark dp[i] as true and break the inner loop
                break;
            }
        }
    }

    // The last element in dp will indicate if the whole string can be segmented
    return dp[s.length];
};

var removeDuplicates = function (s, k) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const currChar = s[i];
        const peek = stack[stack.length - 1];

        if (stack.length === 0 || peek[0] !== currChar) {
            stack.push([currChar, 1]);
        } else {
            peek[1]++;
            if (peek[1] === k) stack.pop();
        }
    }

    console.log(stack);

    let newStr = "";
    for (let [char, count] of stack) {
        newStr += char.repeat(count);
    }

    return newStr;
};
var removeElement = function (nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
};

var removeElement = function (nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
};

//  nums = [3,2,2,3], val = 3

//   j
//     i
//  [3,2,2,3]
// i = 0
// j = 0
// nums[2] !== val -> nums[j] = nums[i]
//

/*
        Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.

        Given an array of integers numbers, your task is to check all the triples of its consecutive elements for being a zigzag. More formally, your task is to construct an array of length numbers.length - 2, where the ith element of the output array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.

        Example

        For numbers = [1, 2, 1, 3, 4], the output should be solution(numbers) = [1, 1, 0].

        (numbers[0], numbers[1], numbers[2]) = (1, 2, 1) is a zigzag, because 1 < 2 > 1;
        (numbers[1], numbers[2] , numbers[3]) = (2, 1, 3) is a zigzag, because 2 > 1 < 3;
        (numbers[2], numbers[3] , numbers[4]) = (1, 3, 4) is not a zigzag, because 1 < 3 < 4;
        For numbers = [1, 2, 3, 4], the output should be solution(numbers) = [0, 0];

        Since all the elements of numbers are increasing, there are no zigzags.

        For numbers = [1000000000, 1000000000, 1000000000], the output should be solution(numbers) = [0].

        Since all the elements of numbers are the same, there are no zigzags.

        Input/Output

        [execution time limit] 4 seconds (js)

        [memory limit] 1 GB

        [input] array.integer numbers

        An array of integers.

        Guaranteed constraints:
        3 ≤ numbers.length ≤ 100,
        1 ≤ numbers[i] ≤ 109.

        [output] array.integer

        Return an array, where the ith element equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.
    */

function solution(numbers) {
    let count = [];
    let i = 0;

    // Adjust the loop condition to ensure we check the last triple
    while (i <= numbers.length - 3) {
        const a = numbers[i];
        const b = numbers[i + 1];
        const c = numbers[i + 2];
        if ((a < b && b > c) || (a > b && b < c)) {
            count.push(1);
        } else {
            count.push(0);
        }
        i++;
    }

    return count;
}

function merge(intervals) {
    // Step 1: Sort the intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Initialize a new array to hold the merged intervals
    const merged = [];
    for (let i = 0; i < intervals.length; i++) {
        // If the merged array is empty or the current interval does not overlap with the last interval in merged
        if (
            merged.length === 0 ||
            merged[merged.length - 1][1] < intervals[i][0]
        ) {
            merged.push(intervals[i]);
        } else {
            // There is an overlap, so merge the current interval with the last interval in merged
            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                intervals[i][1]
            );
        }
    }

    // Step 3: Return the merged intervals
    return merged;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q2

function calculateTotalDifferenceAndRotate(nums1, nums2) {
    let results = [];
    const n = nums1.length; // Assuming nums1 and nums2 are of the same length

    for (let rotation = 0; rotation < n; rotation++) {
        // Calculate the total absolute difference
        let totalDifference = 0;
        for (let i = 0; i < n; i++) {
            totalDifference += Math.abs(nums1[i] - nums2[i]);
        }
        results.push(totalDifference);

        // Rotate nums2 by moving the last element to the front
        nums2.unshift(nums2.pop());
    }

    return results;

    /////////////////////////////////////////////////////////////////////////
    //  Q3

    //

    function isValidWord(matrix, word) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        // Helper function to check if the next position is valid
        function isValid(x, y) {
            return x >= 0 && x < rows && y >= 0 && y < cols;
        }

        // DFS search that tracks direction and checks for direction change
        function search(x, y, index, prevDirection, directionChanged) {
            if (index === word.length) return directionChanged; // Found valid word with direction change
            if (!isValid(x, y) || matrix[x][y] !== word[index]) return false;

            // Directions: Right (0, 1), Down (1, 0)
            const directions = [
                [0, 1],
                [1, 0],
            ];
            for (let [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                const newDirection = dx === 0 ? "H" : "V"; // Horizontal or Vertical
                const hasDirectionChanged =
                    prevDirection && prevDirection !== newDirection
                        ? true
                        : directionChanged;

                if (
                    search(
                        newX,
                        newY,
                        index + 1,
                        newDirection,
                        hasDirectionChanged
                    )
                ) {
                    return true;
                }
            }

            return false;
        }

        // Iterate through each cell in the matrix as a potential starting point
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] === word[0]) {
                    // Word start match
                    if (search(i, j, 0, null, false)) {
                        return true; // Found valid path for this word
                    }
                }
            }
        }

        return false;
    }

    function countValidWords(matrix, words) {
        let count = 0;
        for (let word of words) {
            if (isValidWord(matrix, word)) {
                count++;
            }
        }
        return count;
    }

    // Example usage
    const matrix = [
        ["a", "c", "d"],
        ["s", "a", "b"],
        ["h", "t", "s"],
    ];
    const words = ["cat", "cats", "dog", "ash"];

    console.log(countValidWords(matrix, words));
}
//////////////////////////////////////////////////////////////////////////////////////

//  Q4

function longestCommonPrefixAnyPair(arr1, arr2) {
    // Convert numbers to string representations
    const strs1 = arr1.map(String);
    const strs2 = arr2.map(String);

    let longestPrefix = "";

    // Function to find the common prefix between two strings
    const findPrefix = (s1, s2) => {
        let prefix = "";
        for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
            if (s1[i] === s2[i]) {
                prefix += s1[i];
            } else {
                break; // Exit loop on first non-match
            }
        }
        return prefix;
    };

    // Compare each string in arr1 with each string in arr2 to find the longest prefix
    strs1.forEach((s1) => {
        strs2.forEach((s2) => {
            const currentPrefix = findPrefix(s1, s2);
            if (currentPrefix.length > longestPrefix.length) {
                longestPrefix = currentPrefix;
            }
        });
    });

    // Return the longest common prefix found, or 0 if none
    return longestPrefix.length ? longestPrefix : "0";
}

// Example usage
const arr1 = [2, 22, 2225, 25534, 2209];
const arr2 = [2, 2222, 255552];
console.log(longestCommonPrefixAnyPair(arr1, arr2));

//////////////////////////////////////////////////////////////////////////////////////////////////////

//! TECH Interview
/*

    Julie goes to a bank to open up an account.

    When she arrives at the bank, there are N agents (number 1 to N) who are not serving any customer, and M customers have already arrived before Julie (Julie is at position M+1 in the line).

    This particular bank follows the rule of first-come-first-serve.

    If more than 1 agent can serve a customer at any time, the customer will always choose the one with the lowest agent number.

    For agents, each of them has a constant serving time that the i-th agent will take times[i] minutes to serve a customer.

    Assume Julie arrived at time 0, and all the agents are idle and start to serve the customers.

    We would like to know how many minutes Julie has to wait before meeting with an agent?
*/

function calculateWaitTime(M, N, times) {
    // Initialize the agents' next available times as an array of objects
    let agents = Array.from({ length: N }, (_, i) => ({
        nextAvailableTime: 0,
        agentId: i,
    }));

    // Function to serve a customer
    const serveCustomer = (time) => {
        // Sort agents by their next available time, then by agent ID
        // console.log(agents)
        agents.sort(
            (a, b) =>
                a.nextAvailableTime - b.nextAvailableTime ||
                a.agentId - b.agentId
        );
        // Get the soonest available agent
        const soonestAgent = agents[0];
        // Update the soonest agent's next available time
        soonestAgent.nextAvailableTime += time;
    };

    // Serve all customers ahead of Julie
    let j = 0;
    for (let i = 0; i < M; i++) {
        serveCustomer(times[j]);
        j++;
    }

    // After serving all customers ahead, the soonest available agent will serve Julie
    // Sort one more time to find the next available agent for Julie
    agents.sort(
        (a, b) =>
            a.nextAvailableTime - b.nextAvailableTime || a.agentId - b.agentId
    );
    // Julie's wait time is the next available time of the agent who will serve her
    return agents[0].nextAvailableTime;
}

// Example usage
let M = 5; // Customers ahead of Julie
let N = 3; // Number of agents
let times = [2, 1, 3, 5, 9, 2]; // Serving times for each agent
console.log(calculateWaitTime(M, N, times)); // Output Julie's wait time

/////////////////////////////////

//none heap way

function timeToMeetAgent(agents, times, M) {
    // Initialize availability times for each agent
    let agentAvailability = new Array(agents).fill(0);

    // Assign customers to agents
    for (let customer = 0; customer < M; customer++) {
        // Find the earliest available agent for the next customer
        let minTime = agentAvailability[0];
        let agentIndex = 0;
        for (let i = 1; i < agents; i++) {
            if (agentAvailability[i] < minTime) {
                minTime = agentAvailability[i];
                agentIndex = i;
            }
        }
        // Update the availability time for the chosen agent
        agentAvailability[agentIndex] += times[agentIndex];
    }

    // Now it's Julie's turn, find the earliest available agent for Julie
    let julieWaitTime = Math.min(...agentAvailability);
    return julieWaitTime;
}

////////////////////////////////////////////////////////////////////////////////////

// At Pinterest, an effective way to increase user engagement is by sending emails with trending topics the user might be interested in.
//Assume we are provided with an ML-based recommendation system generating personalized topics for each user.
// In order to maximize the email open rate, we want to auto-generate a personalized subject line for each user based on a list of topics recommended for them.

// PART 1
// Write a function that takes in a list of Pin topics and returns a string representing the English-formatted conjunction of those topics.

// For example, given these topics: [‘Animals’, ‘Baking’, ‘Cooking’, ‘Dogs’]
// The output would be: “Animals, Baking, Cooking and Dogs”

// PART 2:
// Now let’s add a new argument called `limit`. This controls the maximum number of topics that should be displayed. Any remaining items are “summarized” using the string “and # more topics”.

// For example, given these topics: [‘Animals’, ‘Baking’, ‘Cooking’, ‘Dogs’] and limit: 2
// The output would be “Animals, Baking and 2 more topics”

// PART 3
// Now assume there is a maximum character length recommended for the email subject line.

//Let’s replace `limit` with a new argument `max_chars`. This argument strictly limits the length of the output string to a maximum of `max_chars`.

// Given a list `topics` and the maximum output length `max_chars`, write a function that returns a formatted string that contains as many topics as it can fit, and the remaining topics “summarized” using the string “and # more topics”.

// For example, given these topics: [‘Animals’, ‘Baking’, ‘Cooking’, ‘Dogs’] and max_chars: 30
// The output would be “Animals and 3 more topics”.

// The candidate is allowed to use the solutions from Part 1 & 2 as helper functions.

/*







function (pins)
 if empty return null or ""
 no order or sorting FiFi
 no extra formatting needed

 max and min = infinite;

create a new str variable

loop thru pins using index or i
  check if i is second to last
    if it is concat "and" instead of ","
      else
    concat pin + ","


return a newStr
*/

let pinTopics = (pins) => {
    if (pins.length === 0) return "";
    if (pins.length === 1) return pins[0];

    let newStr = "";

    // [‘Animals’, ‘Baking’, ‘Cooking’, ‘Dogs’]
    // for(let i = 0; i < pins.length; i++){
    //   if( i === pins.length - 2){
    //     newStr += pins[i] + " and "
    //   } else if (i === pins.length - 1){
    //     newStr += pins[i];
    //   } else {
    //     newStr += pins[i] + ", ";
    //   }
    // }

    for (let i = 0; i < pins.length - 2; i++) {
        newStr += pins[i] + ", ";
    }

    newStr += pins[pins.length - 2] + " and " + pins[pins.length - 1];

    return newStr;
};

// console.log(pinTopics(['Animals']));
// console.log(pinTopics(['Animals', "Baking"]));
// console.log(pinTopics(['Animals', 'Baking', 'Cooking', 'Dogs']));

// PART 2:
// Now let’s add a new argument called `limit`. This controls the maximum number of topics that should be displayed. Any remaining items are “summarized” using the string “and # more topics”.

// For example, given these topics: [‘Animals’, ‘Baking’, ‘Cooking’, ‘Dogs’] and limit: 2
// The output would be “Animals, Baking and 2 more topics”

/*

  2 base cases for empty or singular

  initialize a newStr

  do a check to see if limit is above the the lenght of pins
    if limit is above call original function
  else
    loop thru till limit and find the difference
      concat ` and ${difference} + "more topics"
  */

let pinLimit = (pins, limit) => {
    if (pins.length === 0) return "";
    if (pins.length === 1) return pins[0];

    let newStr = "";

    if (limit > pins.length) {
        return pinTopics(pins);
    } else {
        for (let i = 0; i < limit - 1; i++) {
            newStr += pins[i] + ", ";
        }
        const difference = pins.length - limit;

        if (difference === 1) {
            return (newStr += `${
                pins[limit - 1]
            } and ${difference} more topic`);
        }

        return (newStr += `${pins[limit - 1]} and ${difference} more topics`);
    }
};

// console.log(pinTopics(['Animals']));
// console.log(pinTopics(['Animals', "Baking"]));
let topics = ["Animals", "Baking", "Cooking", "Dogs"];
// console.log(pinLimit(topics, 2));

// PART 3
// Now assume there is a maximum character length recommended for the email subject line.

//Let’s replace `limit` with a new argument `max_chars`. This argument strictly limits the length of the output string to a maximum of `max_chars`.

// Given a list `topics` and the maximum output length `max_chars`, write a function that returns a formatted string that contains as many topics as it can fit, and the remaining topics “summarized” using the string “and # more topics”.

// For example, given these topics: [‘Animals’, ‘Baking’, ‘Cooking’, ‘Dogs’] and max_chars: 30
// The output would be “Animals and 3 more topics”.

// The candidate is allowed to use the solutions from Part 1 & 2 as helper functions.

/*
   and 3 more topics === 18 count

   return "" if max_chars === 0
   return "" if max chars < pins[0]


  add 5 to the last if using first
  loop thru pins
    minus pin length + 1 from max chars
    if that reaches a count of 18
      call second method with running count as limit

  */

var pinTopics = (pins) => {
    if (pins.length === 0) return "";
    if (pins.length === 1) return pins[0];

    let newStr = "";

    for (let i = 0; i < pins.length - 2; i++) {
        newStr += pins[i] + ", ";
    }

    newStr += pins[pins.length - 2] + " and " + pins[pins.length - 1];

    return newStr;
};

var pinLimit = (pins, limit) => {
    if (pins.length === 0) return "";
    if (pins.length === 1) return pins[0];

    let newStr = "";

    if (limit > pins.length) {
        return pinTopics(pins);
    } else {
        for (let i = 0; i < limit - 1; i++) {
            newStr += pins[i] + ", ";
        }
        const difference = pins.length - limit;

        if (difference === 1) {
            return (newStr += `${
                pins[limit - 1]
            } and ${difference} more topic`);
        }

        return (newStr += `${pins[limit - 1]} and ${difference} more topics`);
    }
};

let pinCharLimit = (pins, max_chars) => {
    if (max_chars === 0) return "";
    if (max_chars > pins[0]) return "";

    let count = 0;
    let currLength = 0;
    let realLimit = max_chars - 18;

    for (let i = 0; i < pins.length; i++) {
        let currPin = pins[i];
        currLength += currPin.length;

        if (currLength >= realLimit) {
            return pinLimit(pins, i);
        } else {
            continue;
        }
    }
};

console.log(pinCharLimit(topics, 30));

///////////////////////////////////////////////////////////////////////////////////////////

function formatTopics(topics) {
    if (topics.length === 0) return ""; // no topics
    if (topics.length === 1) return topics[0]; // 1 topic
    if (topics.length === 2) return topics.join(" and "); // 2 topics
    return `${topics.slice(0, -1).join(", ")} and ${topics[topics.length - 1]}`; // 3+ topics
}

function formatTopicsWithLimit(topics, limit) {
    if (topics.length <= limit) {
        return formatTopics(topics);
    } else {
        const displayedTopics = topics.slice(0, limit);
        const remainingCount = topics.length - limit;
        return `${displayedTopics.join(
            ", "
        )} and ${remainingCount} more topics`;
    }
}

function formatTopicsWithMaxChars(topics, max_chars) {
    let formattedString = "";
    let index = 0;
    while (index < topics.length) {
        let testString =
            formattedString + (formattedString ? ", " : "") + topics[index];
        let remainingCount = topics.length - (index + 1);
        let additionalLength =
            remainingCount > 0
                ? `, and ${remainingCount} more topics`.length
                : 0;

        if (testString.length + additionalLength <= max_chars) {
            formattedString = testString;
        } else {
            if (formattedString.length === 0) {
                // Special case if the first topic is too long
                formattedString =
                    topics[index].substring(
                        0,
                        max_chars - additionalLength - 4
                    ) + "...";
                break;
            } else {
                formattedString += ` and ${remainingCount + 1} more topics`;
                break;
            }
        }
        index++;
    }

    // Adjusting the last comma to 'and' if no summarization was needed
    if (!formattedString.includes("more topics")) {
        let lastComma = formattedString.lastIndexOf(",");
        if (lastComma !== -1) {
            formattedString =
                formattedString.substring(0, lastComma) +
                " and" +
                formattedString.substring(lastComma + 1);
        }
    }

    return formattedString;
}

//////////////////////////////////////////////
//! FINAL ROUND

/* list of pins
  input 1:
  id, height


  example:
  pins = [
    {'id': 1, 'height':200},
    {'id': 2, 'height':150},
    {'id': 3, 'height':50},
    {'id': 4, 'height':100}
  ]

  input 2: total number of columns that will fit the browser/mobile interface

  number_columns = 2

step 1:
 _____
|    |  1 = 200px
| 1  |
|    |
|____|

step 2:

___________
|    |    |  left = 200px, right = 0
| 1  | 2  |  right = 150px
|    |____|
|____|

step 3:
___________
|    |    |  left = 200px, right = 150px
| 1  | 2  |  right = ??
|    |____|
|____|_3__|

  visually:
 _________
|    |    |  1 = 200px
| 1  | 2  |
|    |____|
|____|_3__|
|    |
|_4__|


  pins = [
    {'id': 1, 'height':200},
    {'id': 2, 'height':150},
    {'id': 3, 'height':50},
    {'id': 4, 'height':100}
  ]

  [1, 2]
  [4, 3]


    expected outcome from the function
  [
    # This list has the pins for the first column
      [ {'id': 1, 'height': 200}, {'id': 4, 'height': 100} ],

    # This list has the pins for the second column
      [ {'id': 2, 'height': 150}, {'id': 3, 'height': 50} ]
  ]
*/

const format = (pins) => {
    let left = [];
    let right = [];

    let leftHeight = 0;
    let rightHeight = 0;

    for (let i = 0; i < pins.length; i++) {
        const currPinHeight = pins[i].height;

        if (i === 0 || rightHeight === leftHeight || leftHeight < rightHeight) {
            leftHeight += currPinHeight;
            left.push(pins[i]);
        } else {
            rightHeight += currPinHeight;
            right.push(pins[i]);
        }
    }

    return [left, right];
};

const pins = [
    { id: 1, height: 200 },
    { id: 2, height: 150 },
    { id: 3, height: 50 },
    { id: 4, height: 100 },
];

console.log(format(pins));

/*

We are working on a project that requires us to print strings onto screens of various sizes. We want you to write a validator for this project. Given an arbitrary string, a font for that string, and the dimensions of the screen in pixels (width and height), you must write a function to determine whether or not the given string can fit on the screen without scrolling or zooming.
*/

// Let’s create a font interface that we can use to determine relevant display information about the string. The font interface should have two functions - getWidth and getHeight.

// getWidth takes in a character and returns the width of that character in pixels (for example, in non-monospaced fonts, the character ‘w’ might be 20 pixels and the character ‘i’ might only be 10).

// Fonts at Pinterest don’t have per-character height differences, so getHeight takes no arguments and returns the “line height”, or height of every single character in the font, in pixels.

//implement class FONT

// w = 20
// i = 10

var charKeys = {
    a: 5,
    b: 10,
    c: 15,
    i: 10,
    w: 20,
};

const getWidth = (charMap, char) => {
    return charMap[char];
};

const getHeight = (lineHeight) => {
    return lineHeight;
};

// getWidth(charKeys, "i");
// getHeight(10);

// Now that we have our font interface, let’s use it to create our validation function. Write a function that takes a string, a font, and a screen size in pixels (width and height) and returns true if the string can fit on the screen and false otherwise. For simplicity, you can create a monospaced font and use that in your test cases (i.e., where width is constant - say 10), but your solution should be able to handle non-monospaced fonts. You can also assume that the line height of any of the fonts we use in our test cases is 10 pixels.

// Example:
// [ text=’abc’ | width=100 | height=100 | font=Font(10) ] -> True
// [ text=’abc’ | width=1 | height=1 | font=Font(10) ] -> False

//  ----
// |exam| = true
// |ple |
//  -----

const validate = (str, width, height, charKeys, lineHeight) => {
    // screen size is width x height

    let lineWidth = 0;
    let currlineHeight;
    const lineCount = Math.floor(height / lineHeight);
    const totalwidth = width * lineCount;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        lineWidth += getWidth(charKeys, char);
        currlineHeight = getHeight(lineHeight);
    }

    return lineWidth <= totalwidth && currlineHeight <= height;
};

console.log(validate("abc", 15, 10, charKeys, 10)); //abc = 30
// console.log(validate('abc', 1, 1, charKeys, 10));

//! HOW IT WAS SUPPOSE TO BE DONE




class Font {
    constructor(charWidths, lineHeight) {
        this.charWidths = charWidths;
        this.lineHeight = lineHeight;
    }

    getWidth(char) {
        return this.charWidths[char] || this.charWidths.default;
    }

    getHeight() {
        return this.lineHeight;
    }
}

// Example usage with different fonts
const font1 = new Font({ w: 20, i: 10, default: 15 }, 18); // Default width for unlisted chars
const font2 = new Font({ a: 14, b: 16, default: 12 }, 20);

// You'd then pass these font instances to your ScreenValidator as before.
class ScreenValidator {
    constructor(width, height, font) {
        this.screenWidth = width;
        this.screenHeight = height;
        this.font = font;
    }

    canFitString(str) {
        let currentWidth = 0;
        let currentHeight = this.font.getHeight();

        for (let char of str) {
            let charWidth = this.font.getWidth(char);
            if (charWidth + currentWidth > this.screenWidth) {
                currentHeight += this.font.getHeight(); // Move to next line
                currentWidth = charWidth; // Start new line with current char
            } else {
                currentWidth += charWidth;
            }

            if (currentHeight > this.screenHeight) return false;
        }

        return true;
    }
}
