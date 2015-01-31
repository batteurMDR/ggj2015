function EarthFrame(scale, maxY, maxObject){
    this.init=function(){
        this.scale = scale;
        this.maxY = maxY;
        this.maxObject = maxObject;
        this.id = EarthFrame.count;
        this.opacity = 2 / this.id;
        EarthFrame.count++;
        this.currentObjectCount = 0;
    }
    this.addTree = function(){ 
        if(this.currentObjectCount + 1 > this.maxObject){
            return false;
        } else {
            this.currentObjectCount++;
            return true;
        }
    }
    this.removeTree = function(){
        
    } 
    this.init();
}
EarthFrame.count= 0;
