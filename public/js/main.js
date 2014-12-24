$(function(){
	$.get('/blocked', function(data){
		$.each(data, function(index,item){
			$('#hello').append('<p>'+data[index]+'</p>');
		});
	});
});