class Node {

    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {

    constructor(){
        this.root = null;
    }

    insert(data){

        // Creating a node and initailising 
        // with data 
        const newNode = new Node(data);

        // root is null then node will
        // be added to the tree and made root.
        if(this.root === null){
            this.root = newNode
        }else {

            // find the correct position in the 
            // tree and add the node
            this.insertNode(this.root, newNode)
        }
    }

    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data 
    insertNode(currentNode, newNode){

        // if the data is less than the node
        // data move left of the tree 
        if(currentNode.data < newNode.data){

            // if left is null insert node here
            if(currentNode.left === null){
                currentNode.left = newNode;
            }else{
                 // if left is not null recurse until null is found
                this.insertNode(currentNode.left, newNode);
            }

        }else {
             // if right is null insert node here
            if(currentNode.right === null){
                currentNode.right = newNode;
            }else {

                 // if right is not null recurse until null is found
                this.insertNode(currentNode.right, newNode)
            }
        }
    }

    //  It searches the node with a value data in the entire tree
    search(node, data){
        if(node === null){
            return null;
        }else if(data < node.data){
            return this.search(node.left, data)
        }else if(data > node.data){
            return this.search(node.right, data)
        }else {
            return node
        }
    }

    //  It returns the root node of a tree
    getRootNode(){
        return this.root;
    }
}