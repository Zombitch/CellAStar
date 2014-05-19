/*
* This JS script initialize the exemple 1. It generates a simple map and draws it on a canvas.
*/
function Example2(){

    ExamplePrototype.call(this);
    
    var self = this;
    
    //Init the attributes (map and get the canvas context)
    this.init = function(){        
        this.baseInit("canvas");

        //Set the player value on the map
        this.map.setDataAtIndex(0, 0, 1);
        
        //Set the place where it's forbidden to go
        for(var idx = 0; idx < 8; idx++)
            this.map.setDataAtIndex(1, idx, 2);
    };
}

//Perform the inheritance Piece
Example2.prototype = new ExamplePrototype();
Example2.prototype.constructor = Example2;
