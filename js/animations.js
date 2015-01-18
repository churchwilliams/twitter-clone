$(document).ready(function(){
	console.log('doc is ready');

	$('.tweet-compose').on('click', function() {
		$('#tweet-controls').css('visibility', 'visible');
		$(this).css('height', '5em');
	});







});