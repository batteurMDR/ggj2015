function CloudRaindrop(){
    this.number = 50;
    this.raindrops = [];
    this.dropped= 0;
    this.todrop = 1;
    this.id = "CloudRain"+Cloud.count;
    this.parallax_depth =0.8;


    this.getCoordinate= function(){
        this.Xmin = $("#"+this.id).offset().left;
        this.Xmax =this.Xmin + $("#"+this.id).width();
        this.Ymin =  $("#"+this.id).offset().top;
        this.Ymax = this.Ymin +  $("#"+this.id).height();
    };
    Cloud.count++;
   
}


CloudRaindrop.prototype = new Cloud();

CloudRaindrop.prototype.generateDroplets = function(){

    this.getCoordinate();
    for(var i =0; i < this.number; i++){
        this.raindrops[i] = new Raindrop();
        var x = Math.round(Math.random() * (this.Xmax - this.Xmin) + this.Xmin);
        var y =  Math.round(Math.random() * (this.Ymax - this.Ymin) + this.Ymin);
        this.raindrops[i].setCoordinate(x, y);
        this.raindrops[i].addItemToScreen();
        game.addGameObjectToList(this.raindrops[i]);
    }

}
CloudRaindrop.prototype.addItemToScreen = function(){
    Cloud.prototype.addItemToScreen.apply(this);
    this.generateDroplets();
   
}
