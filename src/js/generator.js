var Generator = function(name)
{

	this.addItem=function(item)
     {
         
        var $item = $('<div/>',
        					{
        						"width":item.width,
        						"height":item.height,
        						"class":item.name+" item"
        					}
        			).offset(
        					{
        						top: item.y - item.height,
        						left: item.x
        					}
        					).css("z-index",item.zIndex);

        $('#screen').append($item);
     }
     
    this.number = 0;
    this.classe = undefined;
    switch(name){
        case "birds":
            this.number = 5;
            this.classe = "Bird";
            break;
        case "tree":
            this.number = 4;
            this.classe = window["Tree"];
            break;
    }

    for(var i = 0; i < this.number; i++)
    {
        //var fn = window[classe];
        var y = Math.round(Math.random() * (this.classe.maxY - this.classe.minY) + this.classe.minY);
        var x = Math.round(Math.random() * ($(window).width()));
        
        var item = new this.classe(x,y);
       this.addItem(item); 
    }




}