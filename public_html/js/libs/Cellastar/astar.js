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
    
        var startNode = new AstarNode();
        var endNode = new AstarNode();
        this.openList = new Array();
        this.closeList = new Array();
        this.path = new Array();
        
        startNode.init(startX, startY, map[startX][startY]);
        endNode.init(endX, endY, map[endX][endY]);
        
        
    };

    //Remove a node from a list (openList or closeList, it depends on which list you send as parameter)
    this.removeFromList = function(list, nodeToRemove){
        var listCount = this.list.length;
        
        for(var idx = 0; idx < listCount; idx++)
        {
            if(this.list[idx] === nodeToRemove)
            {
                list.splice(idx, 1);
                break;
            }
        }
    };
    
    // Check if a node is present in a list
    this.existInList = function(list, node){
        var listCount = this.list.length;
        
        for(var idx = 0; idx < listCount; idx++)
        {
            if(this.list[idx] === node)
            {
                return true;
            }
        }
        
        return false;
    };
    
    //Add a node to the open list and remove it from the closelist
    this.addToOpenList = function(nodeToAdd){
        this.removeFromList(this.closeList, nodeToAdd);
        this.openList.push(nodeToAdd);
    };
    
    //Add a node to the close list and remove it from the openlist
    this.addToCloseList = function(nodeToAdd){
        this.removeFromList(this.openList, nodeToAdd);
        this.closeList.push(nodeToAdd);
    };
    
    //Find the current node
    this.getCurrentNode = function(){
        var openListCount = this.openList.length;
        var minimumDistance = Number.MAX_VALUE;
        var currentNode = null;
        
        for(var idx = 0; idx < openListCount; i++)
        {
            var node = this.openList[idx];
        }
        
        return currentNode;
        /*
        for( var i:int = 0; i < maximum; ++i )
      {
        var node:Node = m_openList[i] as Node;
 
        if( node.f < minF )
        {
          minF = node.f;
          curNode = node;
        }
      }
 
      return curNode;*/
    };
};