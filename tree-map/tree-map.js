/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */

// var Tree = function(value) {
//   this.value = value;
//   this.children = []; 
// };

// Tree.prototype.addChild = function(){
//    var chaild = Tree(value);
//   return this.children.push(chaild);
//   // return this.children;
// };
// Tree.prototype.contains = function(target){
  
//     return  this.chaild.hasOwnProperty(target);
//   // for(var i = 0 ; this.children.length; i ++){
//   //   if(this.children[i] === target){

//   //   }
//   // }
// };
// Tree.prototype.traverses = function(){

// }

// var newTree = Tree(1);

var Tree = function(value) {
  var newtree = Object.create(treeMethod);
  newtree.value = value;
  newtree.children = []; 
   return newtree;
};

var treeMethod = {};

treeMethod.addChild = function(){
   var chaild = Tree(value);
  return this.children.push(chaild);
  // return this.children;
};
treeMethod.contains = function(target){
    return  this.children.hasOwnProperty(target);
};
treeMethod.traverses = function(){
  // 
}





