var audio = {
	addElem : function(id,src){
		$('<audio/>',{
			"class"    : "sound",
			"src"      : src,
			"id"       : id,
			"controls" : true
		}).appendTo($('.audio')).hide();
	},

	addElems : function(sounds){
		for (var i = 0; i < sounds.length; i++) {
			this.addElem(sounds[i][0],sounds[i][1]);
		}
	}
}
function Sound(id)
{
	this.id=id;
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
	this.loop=function(){
		$('#'+id).attr("loop",true);
	}
}

