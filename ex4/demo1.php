<?php

// Method 1
//不推荐
function __autoload($class) {
	include 'classes/' . $class . '.class.php';
}

// Method 2
function my_autoloader($class) {
	include 'classes/' . $class . '.class.php';
}

spl_autoload_register('my_autoloader');

// Method 3 :匿名函数
spl_autoload_register(function ($class) {
	include 'classes/' . $class . '.class.php';
});