// OK
function Raindrop(cloud){
    this.init = function(cloud){
        this.cloud = cloud;
        this.vitesse = Math.random()* 4 +2.5;
        this.height = 5;
        this.width = 5;
        this.name = "raindrop";
        this.parallax_depth =0.8;
        this.id = "RainDrop"+Raindrop.Count;
   }

    this.generateCoordinate = function(){
            this.x = parseInt(Math.random() * (this.cloud.Xmax - this.cloud.Xmin) + this.cloud.Xmin);
            this.y = parseInt(Math.random() * (this.cloud.Ymax - this.cloud.Ymin) + this.cloud.Ymin);
            this.setCoordinate(this.x, this.y);
    }
    
    this.animate = function(){
        if(!this.oDOMElementRainDrop){
            this.oDOMElementRainDrop = $('#'+this.id)[0];
        }
        if(this.y >= game.screen_height){
            this.cloud.getCoordinate();
            this.generateCoordinate();
        }
        else{
            this.y+= this.vitesse;
        }
        this.oDOMElementRainDrop.style.left=this.x+'px';
        this.oDOMElementRainDrop.style.top=this.y+'px';
    }
    this.init(cloud);    
    Raindrop.Count++;
    
}
Raindrop.prototype = new GameObject();
Raindrop.Count =0;
