function CloudRaindrop(){
    this.number = 20;
    this.raindrops = [];
    this.dropped= 0;
    this.todrop = 1;
    this.id = "CloudRain"+Cloud.count;
    this.parallax_depth =0.8;


    this.getCoordinate= function()
    {
        var elem = $("#"+this.id);
        var position = elem.offset();
        this.Xmin = position.left;
        this.Xmax =this.Xmin + elem.width();
        this.Ymin =  position.top;
        this.Ymax = this.Ymin +  elem.height();
        this.Ymin += ( this.Ymax - this.Ymin )/1.9;
        this.Ymax = this.Ymax -( this.Ymax - this.Ymin )/3;
        this.Xmin  = this.Xmin +( this.Xmax - this.Xmin )/2.5;
        this.Xmax = this.Xmax -( this.Xmax - this.Xmin )/2.5;
    };
    Cloud.count++;
   
}


CloudRaindrop.prototype = new Cloud();

CloudRaindrop.prototype.generateDroplets = function(){

    this.getCoordinate();
    for(var i =0; i < this.number; i++){
        this.raindrops[i] = new Raindrop(this);
        this.raindrops[i].generateCoordinate();
        this.raindrops[i].addItemToScreen();
        game.addGameObjectToList(this.raindrops[i]);
    }

}
CloudRaindrop.prototype.addItemToScreen = function(){
    Cloud.prototype.addItemToScreen.apply(this);
    this.generateDroplets();
   
}
