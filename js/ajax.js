function ajaxAddCart($url, $element)
{
	var id = $element.attr('data-id'); //product id

	var quantity = $('#addtocart_quantity').val(); //get quantity

	if (typeof quantity == 'undefined')
	{
		quantity = 1;	
	}

	var path = $url+'cart/ajaxadd';

	var data = {
		'id' 		: id,
		'quantity' 	: quantity,
	}

	$jqxhr = $.post(path, data, function(data) {}, 'json');

	$jqxhr.done(function( data ) {
	    
	    console.log(data);

	    // showMessage(data.message, data.type);

	    if(data.type == 'success')
	    {
	    	window.location = $url+'cart';
	    }
	    else
	    {
	    	alert(data.message, data.type);
	    }
	});

	return false;
}