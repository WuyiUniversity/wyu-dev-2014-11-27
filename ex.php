<?php
//逐个打印$saying这个字符串

//一般人这么写
$saying = "A commmit a day keep bugs away.";
for ($i = 0; $i <= strlen($saying); $i++) {
	echo $saying[$i];
}

//这么写更好
$saying = "A commmit a day keep bugs away.";
$len = strlen($saying);
for ($i = 0; $i <= $len; $i++) {
	echo $saying[$i];
}
