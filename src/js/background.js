function Background(backgrounds, currentLevel, boucle, timing)
{
    if(timing ==undefined)
        timing = 5000;
	this.timing = timing;
	this.backgrounds = backgrounds;
	this.count = this.backgrounds.length;
	this.nCurrentBackgroundIndex = 0;
	this.interval = null;
    this.currentLevel = currentLevel;
    var self = this;
	//console.log(this.currentLevel);
    for (var i = 0; i < this.count; i++) {
        
		var div = $('<div/>',
					{"class":"background "+currentLevel,"id":'background_'+i})
					.css("background","url("+this.backgrounds[i]+")")
					.css("z-index", 1)
                    .hide()
                	.appendTo($('#screen'));    
                    if(i == 0)
                        div.fadeIn({
                            duration:2000,
                            complete:function(){
                                self.next();
                            }
                        });

				
	}

	this.next=function(){
		this.current++;
        var object;
		if(this.current>this.count-1 && boucle){
			this.current = 0;
		}
        if(this.current==this.count-1 && !boucle){
            $('.background.'+this.currentLevel+':visible').fadeOut({duration:timing});

            $('#background_'+this.current).fadeIn({duration:timing});
            
        } else {
            $('#background_'+this.current).fadeIn({duration:timing});
            $('.background.'+this.currentLevel+':visible').fadeOut({duration:timing, complete: this.next.bind(this)});
        }
        
				
	}

	this.init=function(){
		$('.background:first').fadeIn(timing);
		$('#screen').css("background","#000");
		this.current = 0;
		//this.interval = setInterval(this.next.bind(this),this.timing);
        
	}

	this.destroy=function()
	{
       // console.log("destroying Background");
        $('.background.'+this.currentLevel+':visible').attr('id', 'azd').stop().css('z-index', 0).fadeOut({
            duration:500, 
            complete:this.destroyLevelBackground.bind(this)
        });
	}
    this.destroyLevelBackground=function(){
        game.levelmanager.level.destroy(this.currentLevel);
    }
}

