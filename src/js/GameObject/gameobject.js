function GameObject()
{
    this.animable = true;
	this.id = 0;
    this.x = undefined;
    this.y = undefined;
    this.parallax_depth =0.5;

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
        var x = Math.round(Math.random() * $(window).width() );

        this.setCoordinate(x,y);
    }

     this.animate=function()
     {

     }
     this.areCoordonateSet = function(){
        return this.x != undefined && this.y != undefined;

     }
}



GameObject.prototype.addItemToScreen=function()
     {
        var $item = $('<div/>',
                            {
                                "width":this.width,
                                "height":this.height,
                                "class":this.name+" item layer draggable",
                                "data-depth":this.parallax_depth
                            }
                    ).offset(
                            {
                                top: this.y - this.height,
                                left: this.x
                            }
                            ).css("z-index",this.zIndex)
                            .attr('id', this.id);
 
        $('#screen').append($item);
        game.parallax_update();
        game.dnd.initDraggableGameObject($item);
     }   
