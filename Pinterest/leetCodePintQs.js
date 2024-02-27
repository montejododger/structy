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
        console.log(`results = ${results}`)
        let curr = "";
        let count = 1;
        for(let j = 0; j < results.length; j++){
            if(results[j] === results[j+1]){
                count++;
            } else {
                curr += String(count) + results[j]
                count = 1;
            }
            console.log(`curr = ${curr}`)
        }

        results = curr
    }


    return results;
};


