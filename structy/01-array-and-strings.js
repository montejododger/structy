// 01. Array and String
// ############################################################################################################################################

// uncompress("2c3a1t"); // -> 'ccaaat'
// uncompress("4s2b"); // -> 'ssssbb'
// uncompress("2p1o5p"); // -> 'ppoppppp'
// uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
// uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'

// GAME PLAN
/*
    2 pointers!

    create a str of numbers
    create an emoty arr
    create two pointers ( i , j )
    iterate thru the string
    check is current ele is a number, continue if so
    when ele is not a number grab the number(s) a nd turn it into a number
    create a for loop that runs number amount of times pushing the current ele into arr
    increment j and make i = j to catch the 2 pointers up
    return a joined arr
*/

const uncompress = (s) => {
    const numbers = "0123456789";

    let unpressed = [];
    let i = 0;
    let j = 0;

    while (j < s.length) {
        if (numbers.includes(s[j])) {
            j++;
            continue;
        } else {
            const num = Number(s.slice(i, j));
            for (let count = 0; count < num; count++) {
                unpressed.push(s[j]);
            }

            j++;
            i = j;
        }
    }

    return unpressed.join("");
};

// ############################################################################################################################################

/*  TESTS
compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
-> '127y'
*/

/*  GAME PLAN

    2 pointers!

    create a new arr
    create two pointers
    while loop to iterate thru (s)
    check if i === j
    if it doesnt check if num === 1
    push char into new arr if === 1
    else push num and char into arr
    return a joined new arr
*/

const compress = (s) => {
    const newWord = [];

    let i = 0;
    let j = 0;

    while (j < s.length) {
        if (s[i] === s[j]) {
            j++;
        } else {
            const num = j - i;
            if (num === 1) {
                newWord.push(s[i]);
            } else {
                newWord.push(String(num), s[i]);
            }

            i = j;
        }
    }

    return newWord.join("");
};

// ############################################################################################################################################

/*  TESTS

anagrams('restful', 'fluster'); // -> true
anagrams('cats', 'tocs'); // -> false
anagrams('monkeyswrite', 'newyorktimes'); // -> true
anagrams('paper', 'reapa'); // -> false
anagrams('elbow', 'below'); // -> true
anagrams('tax', 'taxi'); // -> false
anagrams('taxi', 'tax'); // -> false
anagrams('night', 'thing'); // -> true
anagrams('abbc', 'aabc'); // -> false
anagrams('po', 'popp'); // -> false
anagrams('pp', 'oo') // -> false

*/

/* GAME PLAN

    compare lengths and return out if not equal
    create 2 object of the 2 strings
    check if the 2 objects are the same or different

*/

const anagrams = (s1, s2) => {
    if (s1.length !== s2.length) return false;

    const str1 = {};
    const str2 = {};

    for (const char of s1) {
        str1[char] = (str1[char] || 0) + 1;
    }

    for (const char of s2) {
        str2[char] = (str2[char] || 0) + 1;
    }

    for (const key in str1) {
        if (!str2[key]) return false;
        if (str1[key] !== str2[key]) return false;
    }

    return true;
};

// ############################################################################################################################################

/*  TESTS

mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar("riverbed"); // -> 'r'

*/

/*  GAME PLAN

break the word down into an object
compare each objects value to another and return the one with the most

*/

const mostFrequentChar = (s) => {
    const charCount = {};
    let letter = "";
    let count = 0;

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // console.log(charCount);

    for (const key in charCount) {
        if (charCount[key] > count) {
            count = charCount[key];
            letter = key;
        }
    }

    return letter;
};

// ############################################################################################################################################

/* TESTS

pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
pairSum([1, 6, 7, 2], 13); // -> [1, 2]
pairSum([9, 9], 18); // -> [0, 1]
pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]


*/

/*  GAME PLAN

    iterarte thru numbers array
    grab the number and find the compliment number that would make the target sum

    check is compliment number is in object and if so return that and i

    else

    add the number to the object with the value as the index
*/

const pairSum = (numbers, targetSum) => {
    const indicies = {};

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const compliment = targetSum - num;

        if (compliment in indicies) return [indicies[compliment], i];

        indicies[num] = i;
    }
};

// ############################################################################################################################################

/*  TESTS

pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 6, 8, 2], 16); // -> [2, 3]

*/

/* GAME PLAN

    iterate thru the numbers
    find the number that would compliment current num
    return them if they equal target
    add to object if not

*/

let pairProduct = (numbers, targetProduct) => {
    const prevNums = {};

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const complement = targetProduct / num;

        if (complement in prevNums) return [prevNums[complement], i];

        comps[num] = i;
    }
};

// ############################################################################################################################################

/* TESTS

intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
intersection([2,4,6], [4,2]) // -> [2,4]
intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
intersection([0,1,2], [10,11]) // -> []

const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
    a.push(i);
    b.push(i);
}
intersection(a, b) // -> [0,1,2,3,..., 49999]
;;;/;;
*/

/* GAME PLAN

    create a new arr

    create a set out of one of the arguments
    iterate thru the other argument
    if item is in set then add to new arr
    return new arr

*/

const intersection = (a, b) => {
    let results = [];

    const setA = new Set(a);

    for (const item of b) {
        if (setA.has(item)) results.push(item);
    }

    return results;
};

// ############################################################################################################################################

/* TESTS

fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5]

fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]

fiveSort([5, 5, 5, 1, 1, 1, 4]);
// -> [4, 1, 1, 1, 5, 5, 5]

fiveSort([5, 5, 6, 5, 5, 5, 5]);
// -> [6, 5, 5, 5, 5, 5, 5]

fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]

const fives = new Array(20000).fill(5);
const fours = new Array(20000).fill(4);
const nums = [...fives, ...fours];
fiveSort(nums);
// twenty-thousand 4s followed by twenty-thousand 5s
// -> [4, 4, 4, 4, ..., 5, 5, 5, 5]

/* GAME PLAN

    create 2 points
    start at the edn and check if its 5 or not
    once its 5 then check if the start num i  5 and if so then swap and increment start
    if start isnt a 5, increment

*/

let fiveSort = (nums) => {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[j] === 5) {
            j--;
        } else if (nums[i] === 5) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        } else {
            i++;
        }
    }

    return nums;
};

// ############################################################################################################################################

//      LEETCODE PRACTICE
/*

38. Count and Say
Medium
Topics
Companies
Hint
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string "3322251":


Given a positive integer n, return the nth term of the count-and-say sequence.



Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"


Constraints:

1 <= n <= 30

@params {number}
@return {string}

*/



//  RECURSSIVE
var countAndSay = function (n) {
    // base case
    if (n === 1) return '1';

    // recursive call
    const prev = countAndSay(n - 1);//if n = 4, 1, 11, 21, 1211
    let results = '';
    let count = 1;

    for (let i = 0; i < prev.length; i++) {
        // this checks it if it is second to last so that you can check the next without error
        // keeps it in bounds
        if (i < prev.length - 1 && prev[i] === prev[i + 1]) {
            count++;
        } else {
            results += count.toString() + prev[i];
            count = 1;
        }
    }

    return results;
};

//  ITERATIVE

var countAndSay = function(n) {
    // base case
    if (n === 1) return '1';

    let prev = '1';

    // outer loop which goes from 2 all the way equal to (n)
    for(let i = 2; i <= n; i++){
        let newStr = '';
        let count = 1;

        for(let j = 1; j< prev.length; j++){
            if(prev[j] === prev[j - 1]){
                count++;
            } else {
                newStr += String(count) + prev[j - 1];
                count = 1;
            }
        }

        newStr += String(count) + prev[[prev.length - 1]];
        prev = newStr;
    }

    return prev;
}
