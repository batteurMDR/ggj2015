
function Raindrop(cloud){
    this.cloud = cloud;
    this.vitesse = Math.random()* 4 +2.5;
    this.height = 5;
    this.width = 5;
    this.name = "raindrop";
    this.parallax_depth =0.8;
    
    this.animate = function(){
        if(this.y > $('#screen').height()){
            cloud.getCoordinate();
            this.x = Math.round(Math.random() * (cloud.Xmax - cloud.Xmin) + cloud.Xmin);
            this.y = Math.round(Math.random() * (cloud.Ymax - cloud.Ymin) + cloud.Ymin);
            
        }
        this.y+= this.vitesse;
       $('#'+this.id).offset({top: this.y, left: this.x}); 
    }
    this.id = "RainDrop"+Raindrop.Count;
    Raindrop.Count++;
    
}
Raindrop.prototype = new GameObject();
Raindrop.Count =0;
