// create a new object to store each num
// iterate thru nums
// check if it exist and if it does return true
// if it doesnt exist twice then return false with a late return

var containsDuplicate = function (nums) {
    const numObj = {};

    for (let num of nums) {
        if (numObj[num]) return true;
        numObj[num] = 1;

        // if(numObj[num]){
        //     return true
        // } else {
        //     numObj[num] = 1
        // }
    }

    return false;
};

//////////////////////////////////////////////////////////////////////////////////////////////////
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const freqS = {};
    const freqT = {};

    for (const char of s) {
        freqS[char] = (freqS[char] || 0) + 1;
    }

    for (const char of t) {
        freqT[char] = (freqT[char] || 0) + 1;
    }

    for (const char in freqS) {
        if (freqS[char] !== freqT[char]) {
            return false;
        }
    }

    return true;
};

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const freq = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        freq[charS] = (freq[charS] || 0) + 1;
        freq[charT] = (freq[charT] || 0) - 1;
    }

    for (let char in freq) {
        if (freq[char] !== 0) {
            return false;
        }
    }

    return true;
};
//////////////////////////////////////////////////////////////////////////////////////////////////

/*
    brute force - nested loop

*/

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};

/*
    optomized solution - use an object
    create an object store complimentary number and their indicie
    loop thru nums, find comp number, if it doesnt exist then add the number as a key and the indicie as the value
    if it does exist then return i and the value of the key-value pair
*/
var twoSum = function (nums, target) {

    const complement = {};
    for(let i = 0; i < nums.length; i++){
        const num = nums[i]
        const comp = target - num;
        if(comp in complement) return [complement[comp], i]
        complement[num] = i;
    }
};


/////////////////////////////////////////////////
