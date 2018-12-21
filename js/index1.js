	$(function(){
		$('.guan').click(function(){
		$('.nav-pic').hide( )
		})


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
		// 选项卡
		$('.cate-cate li').mouseover(function(){
			$(this).css('background','#ddd').siblings('li').css('background','')
			$('.cate-cont div').eq($(this).index()).css('display','block').siblings('div').css('display','none')
		}).mouseout(function(){
			$(this).css('background','')
			$('.cate-cont div').css('display','none')
		})

		$('.cate-cont div').mouseover(function(){
			$(this).show().siblings('div').hide()
			$('.cate-cate li').eq($(this).index()).css('background','#ddd').siblings('li').css('background','')
		}).mouseout(function(){
			$(this).hide()
			$('.cate-cate li').eq($(this).index()).css('background','')
		})


		// 轮播图 设置函数 变量
		var i=0;
		function auto(){

			$('.pic-item li').eq(i).addClass('act').siblings('li').removeClass('act')
			$('.num li').eq(i).addClass('act-num').siblings('li').removeClass('act-num')
		}
		// 设置定时器实现轮播
		function autoRun(){
			t=setInterval(function(){
				i++;
				if(i>6){
					i=0;
				}
				auto(i)
			},1000)
		}
		autoRun();
		// 鼠标移入 移出
		$('.pic-box').mouseover(function(){
			clearInterval(t);
		}).mouseout(function(){
			autoRun()
		})
		// 鼠标移到num显示对应图片
		$('.num li').mouseover(function(){
			 i=$(this).index();
			auto(i)
		})
		// 左右箭头点击
		$('.contr-prev').click(function(){
			i--;
			if(i<0){
				i=6;
			}
			auto();
		})
		$('.contr-next').click(function(){
			i++;
			if(i>6){
				i=0;
			}
			auto()
		})

		// 菜单挂起
		$(window).scroll(function(){
			var top=$(this).scrollTop();
			if(top>200){
				$('.nav-gua').slideDown(300)
			}
			if(top<200){
				$('.nav-gua').slideUp(300)
			}
		})


		// var hour = document.getElementById('sk_cd');
		// var min = document.getElementById('sk_cd_2');
		// var second = document.getElementById('sk_cd_3');
		// // var cd_item=sk_cd.getElementsByTagName('cd_item')[0];	
		// function getTime(){
		// 	var d = new Date();
		// 	var ctime = d.getTime();
		// 	var f = new Date('2018-10-01 00:00:00');
		// 	var ftime = f.getTime();
		// 	var sytime = ftime -ctime;
		// 	var day =  Math.floor(sytime /(1000*60*60*24));
		// 	var sytime = sytime % (1000*60*60*24);
		// 	var hours = Math.floor(sytime/(1000*60*60));
		// 	var sytime = sytime %(1000*60*60);
		// 	var minutes = Math.floor(sytime/(1000*60));
		// 	var sytime = sytime %(1000*60);
		// 	var seconds = Math.floor(sytime/1000);
		// 	hour.innerHTML=shou(hours);
		// 	min.innerHTML=shou(minutes);
		// 	second.innerHTML=seconds;
		// }
		// function shou(x){
		// 	if(x<=10){
		// 		x='0'+x;
		// 	}
		// 	return x;
		// }
		// getTime();
		// setInterval(getTime,1000);
	




	$(function(){

			
	$('.sk-prev').click(function(){
		
		$('.sk-listitem').css('left','-800px')
	})
	$('.sk-next').click(function(){
		
		$('.sk-listitem').css('left','0')
	})


	var k=0;

	function aut(){
		$('.sk-chn-tu li').eq(k).addClass('active').siblings('li').removeClass('active')
		$('.sk-chn-num li').eq(k).css('background','orange').siblings('li').css('background','')
	}
	function autoRa(){

		a=setInterval(function(){
			k++;
			if(k>1){
			k=0
			}
			aut()
		},1000)
	}
	autoRa()

	$('.sk-chn').mouseover(function(){
		clearInterval(a)
	}).mouseout(function(){
		autoRa()
	})
	$('.sk-chn-num li').mouseover(function(){
		k=$(this).index();
		aut(k)
	})
	

	})
	$('.tab-hd div').mouseover(function(){
		$(this).addClass('acti').siblings('div').removeClass('acti')
	})
	$('.tab-hd').mouseout(function(){
		$('.tab-hd div').eq(0).addClass('acti').siblings('div').removeClass('acti')
	})

	

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
	
	// <script></script>


	var cont=document.getElementById('cont');

	// 滚动事件
	window.scroll=function(){

		// 文档总高度
		var aHeight=document.documentElement.offsetHeight;
		console.log(aHeight);
		// 可视高度
		var cHeight=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
		// 滚动高度
		console.log(cHeight);
		var sHeight=document.documentElement.scrollTop||document.body.scrollTop;
		console.log(sHeight);
		// 每次滚到底部=总高度-可视高度
		if(aHeight-cHeight<=sHeight){
			Ajax('JSON').get('index.php',function(msg){

				var str='';

				for(var i in msg){


					str+='<img src="'+msg[i]["pic"]+'">';

				}

				if(aHeight>=5000){

					cont.innerHTML=cont.innerHTML;


				}else{
					cont.innerHTML+=str;
				}


			});
		}

	}