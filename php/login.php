<?php
	// 接收传递来的值
	$value=$_POST['value'];
	// echo $value;

	// 声明以存在的用户名
	$arr=['笑笑生','哈哈','马云','张根数','李彦宏','雷军','章泽天'];

	// 判断 传来的值是否已存在
	if(in_array($value,$arr)){
		// 已存在
		echo 'no';
	}else{
		//不存在
		echo "ok";
	}

	


 