/* 
 * Representation of a node (used by A* algorithm).
 */
 
 function AstarNode(){
 
 	this.x = null;
 	this.y = null;
 	this.value = null; // <- The value is needed to tell if it's a walkable node or if it's a forbidden node
 	this.parent = null;
    this.distanceFromStart = null;
    this.distanceToEnd = null;
    this.totalDistance = null;
    
    //Init the node with some default values
    this.init = function(newX, newY, newValue){    
        this.distanceFromStart = 0;
        this.distanceToEnd = 0;
        this.totalDistance = 0;
        this.x = newX;
        this.y = newY;
        this.value = newValue;
    };
    
    /*List of all setter and getter*/
    this.getX = function(){
        return this.x;
    };
    
    this.setX = function(newX){
        this.x = newX;
    };
    
    this.getY = function(){
        return this.y;    
    };
    
    this.setY = function(newY){
        this.y = newY;    
    };
    
    this.getValue = function(){
        return this.value;    
    };
    
    this.setValue = function(newValue){
        this.value = newValue;    
    };
    
    this.getParent = function(){
        return this.parent;    
    };
    
    this.setParent = function(newParent){
        this.parent = newParent;    
    };
    
    this.getDistanceFromStart = function(){
        return this.distanceFromStart;       
    };
    
    this.setDistanceFromStart = function(newDistance){
        this.distanceFromStart = newDistance;       
    };
    
    this.getDistanceFromEnd = function(){
        return this.distanceFromEnd;       
    };
    
    this.setDistanceFromEnd = function(newDistance){
        this.distanceFromEnd = newDistance;       
    };
    
    this.getTotalDistance = function(){
        return this.totalDistance;
    };
    
    this.setTotalDistance = function(newDistance){
        this.totalDistance = newDistance;
    };
 };
