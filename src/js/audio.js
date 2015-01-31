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

	//background:null,

	//gameObjectList : [],
function Audio(){
    this.fond = null;
    this.fire = null;
    this.water = null;
    this.lava = null;
    this.lightning = null;
    this.rain = null;
    this.bird = null;
    this.wind = null;
    this.voice={
        intro : null,
        fireclick : null,
        fireclicks : null,
        waterclickw : null,
        waterclickt : null,
        lightningclick : null,
        lightningclicks : null,
        grass : null,
        raining : null,
        seedhover : null
    };
   
    audio.addElems([
        	["fond","sounds/fond.ogg"],
        	["lava","sounds/lava.ogg"],
        	["fire","sounds/fire.ogg"],
        	["lightning","sounds/lightning.ogg"],
        	["rain","sounds/rain.ogg"],
        	["bird","sounds/bird.ogg"],
        	["wind","sounds/wind.ogg"],

        	["vintro","sounds/voices/1_1.ogg"],

        	["vfireclick","sounds/voices/2_3.ogg"],
        	["vwaterclickw","sounds/voices/2_4.ogg"],
        	["vfireclicks","sounds/voices/2_5.ogg"],

        	["vwaterclickt","sounds/voices/3_1.ogg"],

        	["vlightningclick","sounds/voices/4_2.ogg"],
        	["vlightningclicks","sounds/voices/4_3.ogg"],

        	["vgrass","sounds/voices/5_1.ogg"],

        	["vraining","sounds/voices/4_2.ogg"],

        	["vseedhover","sounds/voices/7_1.ogg"],


        	["voutro","sounds/voices/9_1.ogg"],

        ]);
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

