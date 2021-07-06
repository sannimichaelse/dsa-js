// program to implement stack data structure
class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    push(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    pop() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}


function checkIfHtmlTagsAreBalanced(htmlTag){
  
  const stack = new Stack()
  const pattern = /<.*?>/g;
  const patternNotClose = /<\/.*?>/g;
  const tagList = htmlTag.match(pattern)
  
  let balanced = true
  let index = 0;
  
  while(index < tagList.length && balanced){
    const tag = tagList[index]
    
    if(htmlTag.match(patternNotClose).indexOf(tag) < 0){
      stack.push(tag)
    }else{
      if(stack.isEmpty() || tag.replace("/", "") != stack.peek()){
        balanced = false
      }else{
        stack.pop();
      }
    }
    
    index += 1;
  }
  
  if(balanced && stack.isEmpty()){
    return true;
  }
  
  const incompleteElement = stack.peek().substring(1,2)
  return incompleteElement;
}

console.log(checkIfHtmlTagsAreBalanced("<p><b>name</b>")) // p
console.log(checkIfHtmlTagsAreBalanced("<p><b>name</b></p>")) // true

