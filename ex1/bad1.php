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

foreach ($a as $v) {
	$merge[] = $v;
}

foreach ($b as $v) {
	if (!in_array($v, $merge)) {
		$merge[] = $v;
	}
}

// var_dump($merge);