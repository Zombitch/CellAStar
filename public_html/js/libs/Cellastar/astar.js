/*
* A* algorithm implementation.
*/
 
function Astar(){

    this.distanceBetweenNode = 10;
    this.openList = null;
    this.closeList = null;
    this.path = null;
    
    /*Compute the best path to go to the destination.
    *Parameters description :
    * - map is a Map object it contains all data that the algorithm will use to determine if each point is available for the path destination.
    * - startX and startY is the start location.
    * - endX and endY is the end location.
    * - forbidenArea is an array of some values. The algorithm will consider these value as forbidden and will make the path avoiding those points.
    */
    this.findPath = function(map, startX, startY, endX, endY, forbiddenArea){
        this.openList = new Array();
        this.closeList = new Array();
        this.path = new Array();

    };

};