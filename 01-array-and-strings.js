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
