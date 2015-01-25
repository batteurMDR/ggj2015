function NicePopUP(sTitle,sText)
{

	if( arguments.length==3){
		this.callback = arguments[2];
	}else{
		this.callback = false;
	}
	var self = this;


	var $div = $('<div/>',
					{"class":"nicebox","data-depth":1.0})
					.appendTo($('#screen'))
					.html('<h1>'+sTitle+'</h1><p>'+sText+'</p>')
					.hide()
					.fadeIn(800);


	setTimeout(function(){
        $div.fadeOut(400);
        self.exec();
    }, 4100);




	this.exec=function(){
		if (this.callback){
			this.callback();
		}
	}

}
