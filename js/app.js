$(document).ready(function () {

	$('nav ul li a').click(function () {

		$.ajax({
			url:$(this).attr("href"),

			success:function(data){
				$('.container').empty();
				$('.container').append(data);
			},
			error:function(status,text){
				console.log(status)
				console.log(text)
			}
		})
		return false
	})
























})