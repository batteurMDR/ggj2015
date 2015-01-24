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
	        case "cloud":
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
	        case "cloud":
	            return new Cloud();
	            break;   
	    }         
    }

    var number = this.getObjectCountToCreate(name);
    

    for(var i = 0; i < number; i++)
    {
        var oGameObject = this.getGameObject(name);
        oGameObject.generateCoordinate();
       	oGameObject.addItemToScreen();
       	game.addGameObjectToList(oGameObject);
    }

    


}