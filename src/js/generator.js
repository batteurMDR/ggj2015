var Generator = function(name)
{

	this.getObjectCountToCreate = function(name)
    {
    	switch(name){
	        case "birds":
	           return 5;
	          
	            break;
	        case "tree":
	            return 4;
	          
	            break;
	        case "clouds":
	            return 1;          
        }
    }

    this.getGameObject = function(name)
    {
     	switch(name){
	        case "birds":

	            return new Bird();
	            break;
	        case "tree":
	            return new Tree();
	            break;
	        case "clouds":
	            return new Cloud();
	            break;   
	    }         
    }

    var number = this.getObjectCountToCreate(name);
    

    for(var i = 0; i < number; i++)
    {
        var oGameObject = this.getGameObject(name);
        if(oGameObject.name){
            oGameObject.generateCoordinate();
        	oGameObject.addItemToScreen();
        	game.addGameObjectToList(oGameObject);
        }
    }

    


}
