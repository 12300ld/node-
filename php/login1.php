<?php
	
	// 接收传递来的值
	$value=$_POST['value'];
	// echo $value;

	// 声明以存在的用户名
	$reg =/^[\w\-]{6,15}$/;
	// 判断 传来的值是否已存在
	if($reg.test($value)){
		// 已存在
		echo 'error';
	}else{
		//不存在
		echo "right";
	}

