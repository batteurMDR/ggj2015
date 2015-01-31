//Génération nombre *2?


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
            case "rain":
	            return 1; 
                break;
            case "chimere":
                return 1;
                break;         
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
            case "rain":
                return new CloudRaindrop();
                break;
            case "chimere":
                return new Chimere();
                break;
	    }         
    }

    var number = this.getObjectCountToCreate(name);
    

    for(var i = 0; i < number; i++)
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
