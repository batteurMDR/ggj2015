var audio = {
	addElem : function(id,src){
		$('<audio/>',{
			"class"    : "sound",
			"src"      : src,
			"id"       : id,
			"controls" : true
		}).appendTo($('.audio'));
	}
}
function Sound(id)
{
	this.elem=document.getElementById(id);
	this.play=function(){
		this.elem.play();
	}
	this.pause=function(){
		this.elem.pause();
	}
	this.setVolume=function(value){
		this.elem.volume = (value/100);
		return (this.elem.volume*100);
	}
}
