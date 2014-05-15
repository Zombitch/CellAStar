/*
* A map object that contains all data relative to the map
*/
function Map()
{
    var self = this;
    this.width = null;
    this.height = null;
    this.data = null;
    
    //Init the map width and height.
    this.init = function(width, height){
        this.width = width;
        this.height = height;
        this.data = new Array();
        
        for(var idx = 0; idx < width; idx++)
            this.data[idx] = new Array();
    };
    
    // Get the map width
    this.getWidth = function(){
        return this.width;
    };
    
    //Get the map Height
    this.getHeight = function(){
        return this.height;
    };
    
    //Get the array that contains map data
    this.getData = function(){
        return this.data;
    };
    
    //Get the data at given index X and Y
    this.getDataAtIndex = function(x, y){
        return this.data[x][y];
    }
    
    this.setDataAtIndex = function(x, y, newData){
        this.data[x][y] = newData;
    };
};