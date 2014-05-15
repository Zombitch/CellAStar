/* 
 * Representation of a node (used by A* algorithm).
 */
 
 function AstarNode(){
 
 	this.x = null;
 	this.y = null;
 	this.value = null; // <- The value is needed to tell if it's a walkable node or if it's a forbidden node
 	this.parent = null;
 };
