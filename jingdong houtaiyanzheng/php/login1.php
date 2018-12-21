<?php
	
	// 接收传递来的值
	$value=$_POST['value'];
	
	
	reg =/^[\w\-]{6,15}$/;
	
	if(reg.test(val)){
		
		echo 'error';
	}else{
	
		echo "right";
	}

