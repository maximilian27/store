function myMap() {
	var myCenter = new google.maps.LatLng(46.775686, 23.609428);
	var mapCanvas = document.getElementById('googleMap');
	var mapOptions = {center: myCenter, zoom: 8, mapTypeId: google.maps.MapTypeId.HYBRID};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({position:myCenter});
	marker.setMap(map);
}

(function() {
	var totalSum = 0.00;
	var i=0;

	$('.add-to-cart').click(function() {
		i++;
		$('.badge-notify').removeClass('hidden');
		$('.badge-notify').text(i);
		$('.cart-link').attr('title', '');
		
			 // add items to cart list.. 
			var itemName = $(this).closest('.panel').find('.item-name').text();
			var price = $(this).closest('.panel').find('.item-price').text();
				var cartItem = $('<li class="list-item"></li>');
				cartItem.html('<a href="#section1">' + itemName + ' / ' + '<span class="elem-price">' + price + '</span>' + '</a>' + '<button type="button" class="delete-item">X</button>');
				$('.cart-item').append(cartItem);
					totalSum += Number(price);
					$('.total-cost').html('Total price: ' + totalSum.toFixed(2));
					
			// delete items from cart
			var totalSum2 = totalSum;
			var j=i;
			$('.delete-item').click(function() {
				j--;
				$('.badge-notify').text(j);
				$(this).closest('.list-item').remove();
				var price2 = $(this).closest('.list-item').find('.elem-price').text();
				totalSum2 -= Number(price2);
				$('.total-cost').html('Total price: ' + totalSum2.toFixed(2));
					i = j;
					totalSum = totalSum2;
			});
	});	
})();  


$('#search-button').click(function() {
	var blahblah = $('#name-search').val();
	<!-- alert(blahblah); -->
	$('#search-text').html("We don't have " + "<strong>" + "'" + blahblah + "'"+ "</strong>" + " in our store..." + "<br>" + "Try again another time.").css('color', 'red');
});

$(document).ready(function() {	
	$(window).scroll(function() {
		$(".slideanim").each(function(){
		  var pos = $(this).offset().top;

		  var winTop = $(window).scrollTop();
			if (pos < winTop + 700) {
			  $(this).addClass("slide");
			}
		});
	});
})
