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
      if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
        merged.push(intervals[i]);
      } else {
        // There is an overlap, so merge the current interval with the last interval in merged
        merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
      }
    }

    // Step 3: Return the merged intervals
    return merged;
  }



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
}


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
    strs1.forEach(s1 => {
        strs2.forEach(s2 => {
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
