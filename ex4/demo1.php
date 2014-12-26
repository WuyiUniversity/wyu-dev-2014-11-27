<?php

// Method 1
//不推荐
function __autoload($class) {
	require_once 'classes/' . $class . '.class.php';
}

// Method 2
function my_autoloader($class) {
	require_once 'classes/' . $class . '.class.php';
}

spl_autoload_register('my_autoloader');

// Method 3 :匿名函数
spl_autoload_register(function ($class) {
	require_once 'classes/' . $class . '.class.php';
});