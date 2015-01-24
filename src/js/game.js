


var game =
{

	 init : function()
	 {
	 	toolbar.init();
	 	this.setBackground();
	 	this.setClouds();

	 	
	 },

	 setBackground : function()
	 {
	 	$('#screen').css(
	 							"background-image", "url(img/backgrounds/background0.png)"
	 						);
	 },

	 setClouds : function()
	 {
	 	var clouds = $('<div/>',{'id' : 'clouds'})
	 	$('#screen').prepend(clouds);	
	 }

}
$(function(){
	game.init();
});