/*
* This JS script initialize the exemple 1. It generates a simple map and draws it on a canvas.
*/
function Example1(){

    ExamplePrototype.call(this);
    
    var self = this;
    
    //Init the attributes (map and get the canvas context)
    this.init = function(){        
        this.baseInit("canvas");

        //Set the player value on the map
        this.map.setDataAtIndex(0, 0, 1);
        
        //Set block value (where we couldn't go)  
        this.map.setDataAtIndex(1, 1, 2);
    };
}

//Perform the inheritance Piece
Example1.prototype = new ExamplePrototype();
Example1.prototype.constructor = Example1;
