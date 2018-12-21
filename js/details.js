


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





			// small中移动事件
			$("#small").mousemove(function(e){
				// move big显示
				$("#move,#big").show();

				// 获取移动的值
				var x=e.pageX-$(this).offset().left-$("#move").width()/2;
				var y=e.pageY-$(this).offset().top-$("#move").height()/2;
				// 判断边距
				if(x<=0){
					x=0
				}else if(x>=$(this).width()-$("#move").width()){
					x=$(this).width()-$("#move").width()
				}

				if(y<=0){
					y=0
				}else if(y>=$(this).height()-$("#move").height()){
					y=$(this).height()-$("#move").height()
				}
				// 赋值
				$("#move").css({left:x+'px',top:y+'px'});

				// big img 移动

				//大图与小图的比例
				var scale=$("#big>img").width()/$("#small>img").width();
				console.log(scale);

				//大图的运动距离=小图移动*scale
				$("#big>img").css({left:-x*scale+'px',top:-y*scale+'px'}) 

				// 大图的容器 元素的滚动
				// $("#big").scrollTop(y*scale);
				// $("#big").scrollLeft(x*scale);


			}).mouseout(function(){
				// move big隐藏
				$("#move,#big").hide();
			})

			// 点击更换图片
			$('#dian li img').click(function(){
				// small big src=当前
				// console.log($(this).attr("src"));
				$('#small>img,#big>img').attr("src",$(this).attr("src"));
			})
			$('#dian li img').mouseover(function(){
				$('#small img,#big>img').attr('src',$(this).attr('src'));
				// $('#dian li').eq($(this).index()).css('border','2px solid red')
			})



 
	})
 
		
	  