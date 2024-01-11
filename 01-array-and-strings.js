// 01. Array and String

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

// ############################################################################################################################################
