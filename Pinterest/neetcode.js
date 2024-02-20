


// create a new object to store each num
// iterate thru nums
// check if it exist and if it does return true
// if it doesnt exist twice then return false with a late return

var containsDuplicate = function(nums) {
    const numObj = {};

    for(let num of nums){

        if(numObj[num]) return true;
        numObj[num] = 1;

        // if(numObj[num]){
        //     return true
        // } else {
        //     numObj[num] = 1
        // }
    }

    return false;
};
