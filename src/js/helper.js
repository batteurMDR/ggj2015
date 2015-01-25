function NicePopUP(sTitle,sText,callback)
{
	$('<div/>',
                {
                    "class":"nicebox",
                    "data-depth":1.0
                }
        ).appendTo($('#screen')).html('<h1>'+sTitle+'</h1><p>'+sText+'</p>');

	$('.nicebox').click(function()
	{
		$(this).remove();
	});
	if(callback)
		callback();
}