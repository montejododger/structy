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

let anagrams = (s1, s2) => {
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
