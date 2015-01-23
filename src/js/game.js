


var game =
{

	 init : function()
	 {
	 	toolbar.init();
	 	this.setBackground();
	 },

	 setBackground : function()
	 {
	 	$('#screen').css("background-image", "url(img/backgrounds/background0.png)");
	 }

}
$(function(){
	game.init();
});