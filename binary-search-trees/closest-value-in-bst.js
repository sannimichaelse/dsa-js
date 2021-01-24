function closestValueInBst(tree, target, closest = Infinity){
  
  let currentNode = tree;
  
  while(currentNode.value != null){
    if(Math.abs(currentNode.value - target) < Math.abs(closest - target)){
      closest = currentNode.value;
    }else if(currentNode.value < target){
      currentNode = currentNode.left // move to the left substree
    }else if(currentNode.value > target){
      currentNode = currentNode.right // ,ove to the right subtree
    }else{
      break;
    }
  }
  
  return closest;
  
}

