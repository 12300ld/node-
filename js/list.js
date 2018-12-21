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
	

 	$('.cha').click(function(){ 
 		$('.top-bnner').hide()
 	})

 	$('.man-inner').mouseover(function(){
 		$('.prev').css('display','block')
 		$('.next').css('display','block')
 	}).mouseout(function(){
 		$('.prev').css('display','none')
 		$('.next').css('display','none')
 	})

 	$('.prev,.next').mouseover(function(){
 		$('.prev,.next').css('display','block')
 	})




 	// 楼层
 		// 点击楼层 找到指定位置
 	$(window).scroll(function(){

 		if($(document).scrollTop()>=1200){

 			$('.ul').css('display','block')
 		}
 		if($(document).scrollTop()<=1200){
 			$('ul').css('display','none')
 		}
 	})

 	$('.ul li').click(function(){
 		// 获取当前下标
 		var index=$(this).index();
 		// console.log(index)
 		console.log($('.mt').eq(index).offset())
 		// 将获取的值给滚动条滚到到指定的位置
 		var top=$('.mt').eq(index).offset().top;

 		// console.log(top)
 		$('html').animate({scrollTop:top},500)

 		// 滚动当前位置判断处于几楼

 	})

 	var heights=[];
 		$('.mt').each(function(){
 			heights.push($(this).offset().top)
 		})
 		// console.log(heights)
 		// 滚动监听事件

 		$(window).scroll(function(){
 			var top=$(window).scrollTop();
 			// console.log(top)
 			// 遍历判断在几楼
 			for(var i=0;i<heights.length;i++){
 				// 判断在几楼 
 				if(top>=heights[i]&&top<heights[i+1]){
 					var index=i;
 				$('.ul li').eq(index).css({background:'#333',color:'#fff'}).siblings('li').css({background:'',color:''})
 				}else if(top>=heights[heights.length-1]){
 					index=heights.length-1;
 					$('.ul li').eq(index).css({background:'#333',color:'#fff'}).siblings('li').css({background:'',color:''})
 				}
 			}
 		})



 	$('.mmt li').mouseover(function(){
 		$(this).css({background:'#2d61a7',color:'#fff'}).siblings('li').css({background:'',color:''})
 	}).mouseout(function(){
 		$(this).css({background:'',color:''})
 	})











 	})
