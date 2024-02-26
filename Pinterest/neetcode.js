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
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const comp = target - num;
        if (comp in complement) return [complement[comp], i];
        complement[num] = i;
    }
};

/////////////////////////////////////////////////

// this leverages the fact that anagrams are the same letters just different order
// you will sort them and create a key with the sorted str
// push the orginal str into the values arr
// return the values of the object

var groupAnagrams = function (strs) {
    //create an object to store sorted strs as keys and an array as its value that you will push words that match into
    const collection = {};

    // iterate thru the strs
    for (let str of strs) {
        // split sort and join each str
        const sorted = str.split("").sort().join("");

        //check if the sorted word is already in the object, if not create a key-value- pair with an empty [] as its value
        if (!collection[sorted]) collection[sorted] = [];

        //push non-sorted str into the key it matches
        collection[sorted].push(str);
    }

    // grab the values only of the object and return those
    return Object.values(collection);
};

/////////////////////////////////////////////////


 //create an object to store key value pairs
 // iterate thru the nums
 // create key value pairs for each integer

 var topKFrequent = function(nums, k) {

    // intialize an object to get a count of all nums and have a quick looks up time
    const count = {};

    //iterate thru the nums array adding it to object
    for (let num of nums){
        count[num] = (count[num] || 0) + 1;
    }

    // intialize an array to hold k values in it
    const results = [];
    // create an array of key value pairs and sort them by their values from biggest to lowest
    // push k amount of times into result array
    // you can slice or not slice, not sure it matters, also could just map over it and grab the key of each pair
    const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]) //.slice(0,k).map(pair => pair[0])
    // console.log(sorted)
    for(let i = 0; i < k; i++){
        const pair = sorted[i];
        results.push(pair[0])
    }

    // return results array
    return results;
};

/////////////////////////////////////////////////
