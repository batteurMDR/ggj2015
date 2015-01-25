function Background(backgrounds)
{
	this.speed = 120000;
	this.backgrounds = backgrounds;
	this.count = this.backgrounds.length;
	this.current = null;
	this.interval = null;

	for (var i = 0; i < this.count; i++) {
		$('<div/>',{"class":"background","id":'background_'+i}).css("background","url("+this.backgrounds[i]+")").hide().appendTo($('#screen'));
	}

	this.next=function(){
		this.current = this.current+1;
		if(this.current>(this.count-1)){
			this.current = 0;
		}
		$('.background:visible').fadeOut("slow");
		$('#'+this.current).fadeIn("slow");
	}

	this.init=function(){
		$('.background:first').fadeIn("fast");
		$('#screen').css("background","#000");
		this.current = $('.background:visible').attr('id');
		this.interval = setInterval(this.next.bind(this),this.speed);
	}

	this.destroy=function()
	{

	}

}

