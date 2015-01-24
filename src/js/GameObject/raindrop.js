
function Raindrop(){
    this.vitesse = 10;
    this.height = 5;
    this.width = 5;
    this.name = "raindrop";
    this.animate = function(){
        this.y+= this.vitesse;
       $('#'+this.id).offset({top: this.y}); 
    }
    this.id = "RainDrop"+Raindrop.Count;
    Raindrop.Count++;
    
}
Raindrop.prototype = new GameObject();
Raindrop.Count =0;
