function FrameHandler(){
     this.earthFramesList = [];
	 this.generateFrames= function(){
        for(var i = 1; i <= 10; i++){
            var scale = 0;
            if((i-1) % 2 == 1){
                scale = 1/Math.pow(2, (i)/2 - 1);
            } else {
                scale = 5 - i /2;
            }
            this.earthFramesList.push(new EarthFrame(scale, 700 - (i+1) * 20, 4* i -4));
        }
     };
     this.getCurrentTreeFrame= function(posY){
        for(var i = 1; i < this.earthFramesList.length - 1; i+=2){
           
            if(posY > this.earthFramesList[i+2].maxY){
                return this.earthFramesList[i];
            }
        }
        return this.earthFramesList[this.earthFramesList.length - 1];
     }
}
