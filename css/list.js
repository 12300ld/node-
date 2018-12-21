 $(function(){
	

		$('.dan').mouseover(function(){
		$('.cty').show()
		$('.dan').css('background','#fff')
	}).mouseout(function(){
		$('.cty').hide()
		$('.dan').css('background','#ccc')

	})

		$('.cty').mouseover(function(){
		$('.cty').show()
		$('.dan').css('background','#fff')

		}).mouseout(function(){
		$('.cty').hide()
		$('.dan').css('background','#ccc')
		})