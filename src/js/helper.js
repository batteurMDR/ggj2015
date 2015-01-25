function NicePopUP(sTitle,sText)
{
	if( arguments.length==3){
		alert('1');
		this.callback = arguments[2];
		console.log(arguments[2]);
		console.log(this.callback);
	}
	var self = this;
	$('<div/>',{"class":"nicebox","data-depth":1.0}).appendTo($('#screen')).html('<h1>'+sTitle+'</h1><p>'+sText+'</p>').click(function(e){
		e.preventDefault();
		$(this).remove();
		self.exec();	
	});

	this.exec=function(){
		this.callback();
	}
}