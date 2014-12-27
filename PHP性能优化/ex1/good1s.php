<?php

$a = $b = range(0, 10000);
shuffle($a);
shuffle($b);

$merge = array();

$merge = array_merge($a, $b);

// var_dump($merge);
