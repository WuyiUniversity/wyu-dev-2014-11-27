<?php

$a = array();
$b = array();

for ($i = 0; $i < 10000; $i++) {
	$a[] = rand(0, 10000);
}

for ($i = 0; $i < 10000; $i++) {
	$b[] = rand(0, 10000);
}

$merge = array();

$merge = array_merge($a, $b);

// var_dump($merge);
