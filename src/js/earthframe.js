function EarthFrame(scale, maxY){
    this.scale = scale;
    this.maxY = maxY;
    this.id = 10 - EarthFrame.count;
    EarthFrame.count++;
}
EarthFrame.count= 0;
