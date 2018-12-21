<?php
	// 定义模拟的数据库
	$data=[
		["pic"=>"img/".mt_rand(126,141).".jpg"],
		["pic"=>"img/".mt_rand(126,141).".jpg"],
		["pic"=>"img/".mt_rand(126,141).".jpg"],
		["pic"=>"img/".mt_rand(126,141).".jpg"]
	];

	// 输出请求的数据
	echo json_encode($data);

?> 