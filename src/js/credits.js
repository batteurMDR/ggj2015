var credits = {

	init : function(){
	 	$('.item').each(function(){
	 		$(this).remove();
	 	});
	 	game.gameObjectList = [];
	 	game.toolbar.hide();
	 	$('#credits').show();
	},

	exit : function(){
	 	$('#credits').hide();
	 	game.restart();
	}

}