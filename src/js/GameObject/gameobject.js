function GameObject()
{
    this.animable = true;
	this.id = 0;

    this.setCoordinate=function(x,y)
	{
		this.x = x;
		this.y = y;
	}

	this.setSize=function(width,height)
	{
		this.width = width;
		this.height = height;
	}

	this.generateCoordinate=function()
	{
        var y = Math.round(Math.random() * (this.maxY - this.minY) + this.minY);
        var x = Math.round(Math.random() * ($(window).width()));

        //console.log('Hey ho... voici mes coord '+x+'y='+y);

        this.setCoordinate(x,y);
    }

     this.animate=function()
     {

     }
}


/*
GameObject.prototype.setSize=function(width,height)
{
	this.width = width;
	this.height = height;
}

GameObject.prototype.setCoordinate=function(x,y)
{
	this.x = x;
	this.y = y;
}*/


GameObject.prototype.addItemToScreen=function()
     {
        var $item = $('<div/>',
                            {
                                "width":this.width,
                                "height":this.height,
                                "class":this.name+" item"
                            }
                    ).offset(
                            {
                                top: this.y - this.height,
                                left: this.x
                            }
                            ).css("z-index",this.zIndex)
                            .attr('id', this.id);
 
        $('#screen').append($item);
     }   
