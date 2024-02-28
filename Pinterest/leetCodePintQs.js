// EASY


var isSubsequence = function(s, t) {

    let i = 0;

    for(let j = 0; j < t.length; j++){
        if(i === s.length) return true;
        if(s[i] === t[j]){
            i++
        }
    }

    return i === s.length;
};


// MEDIUM

var countAndSay = function(n) {

    let results = "1";

    for(let i = 2; i <= n; i++){
        // console.log(`results = ${results}`)
        let curr = "";
        let count = 1;
        for(let j = 0; j < results.length; j++){
            if(results[j] === results[j+1]){
                count++;
            } else {
                curr += String(count) + results[j]
                count = 1;
            }
            // console.log(`curr = ${curr}`)
        }

        results = curr
    }


    return results;
};


///////////////////////////////////////////////////////////////

var minimizeResult = function(expression) {
    // find the index of plus sign to know where to split the parenthesis
    let index = expression.indexOf("+");
    // console.log(index, expression.length)
    let max = Infinity; // init a variable to store max value
    let response = ""; // init a variable to store the string that would yield the min

    for (let i = 0; i < index; i++) {
        for (let j = index + 2; j <= expression.length; j++) {
            console.log(`j = ${j}`)
            // edge case for A is if its at the very beginning AKA 0, make A = 1
            let A = i === 0 ? 1 : Number(expression.slice(0, i));
            // console.log(A) // 1
            let B = Number(expression.slice(i, index)); // 0, 3
            // console.log(B) // 999
            let C = Number(expression.slice(index + 1, j)); // 3 + 1, 5 -> 4, 5
            // console.log(C) // 9
            // the edge case for D is that if it is equal to the end then make d = 1
            let D = j === expression.length ? 1 : Number(expression.slice(j)); // 5
            console.log(`D = ${D}`) // 99
            console.log('break')
            let result = A * (B + C) * D; // 1 * (999 * 9) * 99
            console.log(`result = ${result}`)

            if (result < max) {
                // Construct the expression using the current slices
                let firstPiece = expression.substring(0, i); // ""
                let middlePiece = expression.substring(i, j); // (247+3)
                let lastPiece = expression.substring(j) // 8
                console.log(`firstPiece = ${firstPiece}`)
                let newExp = firstPiece + "(" + middlePiece + ")" + lastPiece; // '' + '(' + '247+3' + ')' + '8'
                console.log(`newExp = ${newExp}`)
                max = result;
                response = newExp;
            }
        }
    }
    return response;
};
