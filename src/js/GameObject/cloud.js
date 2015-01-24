function Cloud()
{
    this.height = 256;
    this.width = 256;
    this.zIndex = 10;
    this.name = "cloud";

    this.minY = 0;
    this.maxY = 300;

    this.id = 'Cloud'+Cloud.count;
    Cloud.count++;

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
