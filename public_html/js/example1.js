/*
* This JS script initialize the exemple 1. It generates a simple map and draws it on a canvas.
*/
function Example1(){

    var self = this;
    this.map = new Map();
    this.canvas = null;
    this.canvasContext = null;
    this.canvasWidth = null;
    this.canvasHeight = null;
    
    //Init the attributes (map and get the canvas context)
    this.init = function(){        
        this.canvas = document.getElementById("canvas");
        this.canvasContext = canvas.getContext("2d")        
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.map.init(10, 10);
        
        //Generate the map values (0 value means there is nothing (the player can move here), 1 value is the player position, 2 is something that prevent the player from moving here)
        for(var idx = 0; idx < this.map.getWidth(); idx++)
        {
            for(var jdx = 0; jdx < this.map.getHeight(); jdx++)
            {
                this.map.setDataAtIndex(idx, jdx, 0);
            }    
        }

        //Set the player value on the map
        this.map.setDataAtIndex(0, 0, 1);
        
        //Add a click listener on the canvas, this way the user will be able to move the "character"
        this.canvas.addEventListener('click', function(event) {
            //Get the position of the click in the canvas (top left corner is equal to x = 0 and y = 0)
            var clickX = event.pageX - self.canvas.offsetLeft;
            var clickY = event.pageY - self.canvas.offsetTop;
            
            //Compute in which square the user clicked
            var clickedMapSquareX = parseInt(clickX*self.map.getWidth()/self.canvasWidth);
            var clickedMapSquareY = parseInt(clickY*self.map.getHeight()/self.canvasHeight)
            
            self.movePlayer(clickedMapSquareX, clickedMapSquareY);            
        }, false);
    };
    
    //This function will draw the map depending on its data (the data is the value at x and y index)
    this.draw = function(){
        //Draw the entire map with all information (empty map square are very light brown, player is green square and square that will block the user (such tree or rock for example) are gray.)
        for(var idx = 0; idx < this.map.getWidth(); idx++)
        {
            for(var jdx = 0; jdx < this.map.getHeight(); jdx++)
            {            
                //Compute map entity position 
                var entityX = idx * this.canvasWidth/this.map.getWidth();
                var entityY = jdx * this.canvasHeight/this.map.getHeight();
                
                //Draw light brown rectangle for empty square
                if(this.map.getDataAtIndex(idx, jdx) == 0)
                    this.canvasContext.fillStyle = "#BBADA0";
                //Draw light green rectangle where the player is standing
                else if(this.map.getDataAtIndex(idx, jdx) == 1)
                    this.canvasContext.fillStyle = "#AACCA0";
                
                this.canvasContext.fillRect(entityX, entityY, this.canvasWidth/this.map.getWidth(), this.canvasHeight/this.map.getHeight());
                this.canvasContext.strokeStyle = "#EEE4DA";
                this.canvasContext.strokeRect(entityX, entityY, this.canvasWidth/this.map.getWidth(), this.canvasHeight/this.map.getHeight());
            }    
        }
    };
    
    //Look for the player position in the map
    this.getPlayerPosition = function(){
        for(var idx = 0; idx < this.map.getWidth(); idx++)
        {
            for(var jdx = 0; jdx < this.map.getHeight(); jdx++)
            {  
                if(this.map.getDataAtIndex(idx, jdx) == 1)
                {
                    var position = new Array();
                    position["X"] = idx;
                    position["Y"] = jdx;
                    return position;
                }
            }
        }
    };
    
    this.movePlayer = function(destinationX, destinationY){
        this.updatePlayerPosition(destinationX, destinationY);
    };
    
    //Update the play position on the map and redraw the canvas
    this.updatePlayerPosition = function(newX, newY){
    
        //Get current player position
        var currentPlayerPosition = this.getPlayerPosition();
        
        //remove the player from current player
        this.map.setDataAtIndex(currentPlayerPosition["X"], currentPlayerPosition["Y"], 0);
        //Assign the new position to the player
        this.map.setDataAtIndex(newX, newY, 1);
        
        //Update canvas drawings
        this.draw();
    };
}
