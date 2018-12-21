// 原生js倒计时
	// 获得节点
	var tm= document.getElementById('tm');
		// console.log(tm)

	function getTime(){
		
		var d= new Date();
		// 获得当前的时间戳
		var ctime=d.getTime();
		// 设置未来的时间
		var f= new Date('2018-10-20 00:00:00');
		// 获取未来的时间戳
		var ftime=f.getTime();
		// 获取剩余时间戳差值
		var sytime=ftime-ctime;
		// console.log(sytime)

			// 获取剩余天数
		var day=Math.floor(sytime/(1000*60*60*24));
		var	sytime=sytime%(1000*60*60*24);
			// 获取小时数
		var hour=Math.floor(sytime/(1000*60*60));
		var sytime=sytime%(1000*60*60);
		// 获取分钟数
		var min=Math.floor(sytime/(1000*60));
		var sytime=sytime%(1000*60);
		// 获取秒数
		var second=Math.floor(sytime/1000);

		tm.innerHTML=hour+min+second;

		// console.log(day,huor,min,second)
	}
	setInterval(getTime,1000);
