<?php

$Directory_seprator = "";

if (PHP_OS === 'Darwin' || PHP_OS === 'Linux') {
	$Directory_seprator = "/";
} else if (PHP_OS === 'WINNT' || PHP_OS === 'WIN32' || PHP_OS === 'Windows') {
	$Directory_seprator = "\\";
}

echo $Directory_seprator;

// Why not use this ?
// $Directory_seprator = DIRECTORY_SEPARATOR;