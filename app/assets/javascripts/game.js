$(function(){
	$('td').on('click', function(event){
		debugger
		if (this.textContent === ""){
			var locationArray = parseInt($(this).data('x'))* 3 + parseInt($(this).data('y'))
			var update = $.ajax({
				url : '/games/:id',
				data : locationArray,
				type : 'PATCH'})
			update.done(function(response){
				debugger
			})
		} else {
			alert ("This place is already taken! Choose another one!!!!")
		}

	})
})