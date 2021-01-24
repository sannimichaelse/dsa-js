const closestValueInBst = (tree, target, closest = Infinity) =>{
  
  let currentNode = tree;
  
  while(currentNode.value != null){
    if(Math.abs(currentNode.value - target) < Math.abs(closest - target)){
      closest = currentNode.value;
    }else if(currentNode.value < target){
      currentNode = currentNode.left // move to the left substree
    }else if(currentNode.value > target){
      currentNode = currentNode.right // move to the right subtree
    }else{
      break;
    }
  }
  
  return closest;
  
}


const findClosestValueInBst = (tree,target) => {
    let newTree = tree
    let closest = Infinity // we will set our cloest high as we can, so we use Infinity
    return findClosestHelper(newTree,target,closest) // we will use a helper function which will be a recursion function, we will pass the tree, our target, and our closest
}

const findClosestHelper = (tree,target,closest) => {
    if(!tree){
        return closest // we check if the tree is currently null, if so we know that we have reached the end of our tree so we will return our closest, this is know as our base case
    }
    let value = tree.value // save our current tree value as value so we dont have to type tree.value everyime
    if(Math.abs(target - closest) > Math.abs(target - value)){ // we compare our the current absoulte value of closest and our current value. If our value is smaller we will change our closest to value
        closest = value
    }
    // now we will need to pick which side of the tree we want to go to, we know that all of the number on the left side of the tree is smaller then the root and all the numbers on the right are equal or greater the the root. With that being said if target is smaller then the root we know we have a better chance of getting a closer value by going down the left, and if target is greater we have a better change of getting a closer value by going right
    if(value > target){ 
        return findClosestHelper(tree.left, target,closest)
    }else if (value < target){
        return findClosestHelper(tree.right,target,closest)
    }else { // if the value is equal to our target, we will just return closest because the diffrence is 0
        return closest
    }
}


var tree = {
  left: {
    left: {
      value: 1
    },
    right: {
      value: 3
    },
    value: 2
  },
  right: {
    left: {
      value: 6
    },
    right: {
      value: 9
    },
    value: 7
  },
  value: 4
}

console.log(findClosestValueInBst(tree, 10));// 9