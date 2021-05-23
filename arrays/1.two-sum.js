
const twoSum = (nums, target) => {
  let store = {};
 
  for(let k=0; k<nums.length; k++){
    let complement = target - nums[k];
    if(complement in store){
      return [nums.indexOf(complement), k]
    }
    
    store[nums[k]] = k
  }
}


console.log(twoSum([2,7,11,15], 9)); //[0, 1];