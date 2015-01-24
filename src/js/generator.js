var Generator = function(name, frame, posX)
{

	this.getObjectCountToCreate = function(name)
    {
    	switch(name){
	        case "birds":
	           return 5;
	          
	            break;
	        case "tree":
	            if(frame != undefined){
	                return 1;
                }else{
                    return 4;
                }
	          
	            break;
	        case "clouds":
	            return 1;          
        }
    }

    this.getGameObject = function(name)
    {
     	switch(name){
	        case "birds":

	            oBird =  new Bird();
	            return oBird;
	            break;
	        case "tree":
                if(frame != undefined){
	                return new Tree(frame, posX);
                }else{
                    return new Tree();
                }
	            break;
	        case "clouds":
	            return new Cloud();
	            break;   
	    }         
    }

    var number = this.getObjectCountToCreate(name);
    

    for(var i = 0; i < number; i++)2
    {
        var oGameObject = this.getGameObject(name);
        if(oGameObject.name){
            if(!oGameObject.areCoordonateSet())
                oGameObject.generateCoordinate();
        	oGameObject.addItemToScreen();
        	game.addGameObjectToList(oGameObject);
        }
    }

    


}
