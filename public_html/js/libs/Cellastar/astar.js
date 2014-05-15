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
    * - mapArray is a Map object it contains all data that the algorithm will use to determine if each point is available for the path destination.
    * - startX and startY is the start location.
    * - endX and endY is the end location.
    * - forbidenArea is an array of some values. The algorithm will consider these value as forbidden and will make the path avoiding those points.
    */
    this.findPath = function(mapArray, startX, startY, endX, endY, forbiddenArea){
    
        this.openList = new Array();
        this.closeList = new Array();
        this.path = new Array();
        var nodeList = this.getNodeArray(mapArray);
        var startNode = nodeList[startX][startY];
        var endNode = nodeList[endX][endY];
        var currentNode = null;
        
        this.addToOpenList(startNode);   
        
        while(this.openList.length > 0)
        {
            currentNode = this.getCurrentNode();
            
            if(currentNode == endNode)
                break;
                
            this.addToCloseList(currentNode);
            
            var neighbours = this.getNeighbours(currentNode, nodeList); 
            var neighbourCount = neighbours.length;
            
            for(var idx = 0; idx < neighbourCount; idx++)
            {
                var neighbourNode = neighbours[idx];
                
                if(this.existInList(this.closeList, neighbourNode)) //|| neighbourNode.walkable == false ) 
                    continue;
            }
            
            break;
        }

        return this.path;
    };

    //Remove a node from a list (openList or closeList, it depends on which list you send as parameter)
    this.removeFromList = function(list, nodeToRemove){
        var listCount = list.length;
        
        for(var idx = 0; idx < listCount; idx++)
        {
            if(list[idx] == nodeToRemove)
            {
                list.splice(idx, 1);
                break;
            }
        }
    };
    
    // Check if a node is present in a list
    this.existInList = function(list, node){
        var listCount = list.length;
        
        for(var idx = 0; idx < listCount; idx++)
        {
            if(list[idx] == node)
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
        
        for(var idx = 0; idx < openListCount; idx++)
        {
            var node = this.openList[idx];
            
            if(node.getTotalDistance() < minimumDistance)
            {
                minimumDistance = node.getTotalDistance();
                currentNode = node;
            }
        }
        
        return currentNode;
    };
    
    //Find node's neighbours
    this.getNeighbours = function(node, nodeArray){
        var neighbours = new Array();
        var nodeArrayWidth = nodeArray.length;
        var nodeArrayHeight = nodeArray[0].length;
        var top = node.getY() - 1;
        var bottom = node.getY() + 1;
        var left = node.getX() - 1;
        var right = node.getX() + 1;
        
        if(top >= 0)
            neighbours.push(nodeArray[node.getX()][top]);
        
        if(bottom < nodeArrayHeight)
            neighbours.push(nodeArray[node.getX()][bottom]);
        
        if(left >= 0)
            neighbours.push(nodeArray[left][node.getY()]);
            
        if(right < nodeArrayWidth)
            neighbours.push(nodeArray[right][node.getY()]);
            
        return neighbours;
    };
    
    //Build a node array that rely on the map array
    this.getNodeArray = function(mapArray){
        var nodeArray = new Array();
        var mapArrayWidth = mapArray.length;
        var mapArrayHeight = mapArray[0].length;
        
        for(var idx = 0; idx < mapArrayWidth; idx++)
        {
            nodeArray[idx] = new Array();
            for(var jdx = 0; jdx < mapArrayHeight; jdx++)
            {
                var node = new AstarNode();
                node.init(idx, jdx, mapArray[idx][jdx])
                nodeArray[idx][jdx] = node;
            }
        }
        return nodeArray;
    };
};