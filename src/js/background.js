function Background(backgrounds,timing)
{
	this.timing = timing;
	this.backgrounds = backgrounds;
	this.count = this.backgrounds.length;
	this.nCurrentBackgroundIndex = 0;
	this.interval = null;

	for (var i = 0; i < this.count; i++) {
		$('<div/>',
					{"class":"background","id":'background_'+i})
					.css("background","url("+this.backgrounds[i]+")")
					.css("z-index", 0)
                    .hide()
					.appendTo($('#screen'));
	}

	this.next=function(){
		this.current++;
		if(this.current>this.count-1){
			this.current = 0;
		}
		$('.background:visible').fadeOut("slow");
		$('#background_'+this.current).fadeIn("slow");
	}

	this.init=function(){
		$('.background:first').fadeIn("fast");
		$('#screen').css("background","#000");
		this.current = 0;
		this.interval = setInterval(this.next.bind(this),this.timing);
	}

	this.destroy=function()
	{

	}

}

