
function Raindrop(cloud){
    this.cloud = cloud;
    this.vitesse = Math.random()* 4 +2.5;
    this.height = 5;
    this.width = 5;
    this.name = "raindrop";
    this.parallax_depth =0.8;
    this.id = "RainDrop"+Raindrop.Count;
    
    
    this.animate = function(){
        if(!this.oDOMElementRainDrop)
            this.oDOMElementRainDrop = $('#'+this.id)[0];

        if(this.y >= game.screen_height){
            cloud.getCoordinate();
            this.x = parseInt(Math.random() * (cloud.Xmax - cloud.Xmin) + cloud.Xmin);
            this.y = parseInt(Math.random() * (cloud.Ymax - cloud.Ymin) + cloud.Ymin);
            
        }
        else
            this.y+= this.vitesse;
        this.oDOMElementRainDrop.style.left=this.x+'px';
        this.oDOMElementRainDrop.style.top=this.y+'px';
    }
    
    Raindrop.Count++;
    
}
Raindrop.prototype = new GameObject();
Raindrop.Count =0;
