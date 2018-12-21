
$(function(){



	$('.tooltab div').mouseover(function(){
		$(this).css('background','#bb0f0f').siblings('div').css('background','')
		$('.tooltab a').eq($(this).index()).css('display','block')
	}).mouseout(function(){
		$(this).css('background','')
		$('.tooltab a').hide()

	})

	$('.ding').mouseover(function(){
		$(this).css('background','#bb0f0f')
		$('.ding a').css('display','block')
	}).mouseout(function(){
		$(this).css('background','')
		$('.ding a').css('display','none')
	
		})
		
	







})