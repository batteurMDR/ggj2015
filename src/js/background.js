function Background(backgrounds)
{
	this.speed = 120000;
	this.backgrounds = backgrounds;
	this.count = this.backgrounds.length;
	this.current = null;
	this.interval = null;

	for (var i = 0; i < this.count; i++) {
		$('<div/>',{"class":"background","id":i}).css("background","url("+this.backgrounds[i]+")").hide().appendTo($('#screen'));
	}

	this.next=function(){
		this.current = this.current+1;
		if(this.current>(this.count-1)){
			this.current = 0;
		}
		console.log(this.current);
		$('.background:visible').fadeOut("slow");
		$('.background[id='+this.current+']').fadeIn("slow");
	}

	this.init=function(){
		$('.background:first').fadeIn("fast");
		$('#screen').css("background","#000");
		this.current = parseInt($('.background:visible').attr('id'));
		this.interval = setInterval(this.next.bind(this),this.speed);
	}

}
