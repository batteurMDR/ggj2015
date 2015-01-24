function Cloud()
{
    this.height = 50;
    this.width = 50;
    this.zIndex = 10;
    this.name = "cloud";
    this.id = 'Cloud'+Cloud.count;
    Cloud.count++;
    this.minY = 00;
    this.maxY = 250;
    this.fps = 24;
    
    this.animate = function(){
        var width = $('#screen').width();
        var vitesse = 30; //Pixels/sec
        this.x = this.x + vitesse * 1/this.fps;
        if(this.x > width){
            this.x = -this.width;
        }
        $('#'+this.id).offset({left: this.x});
    }

}

Cloud.count = 0;
Cloud.prototype=new GameObject();
