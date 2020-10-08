<?php

defined('basepath') || exit('No direct script is allowed!');

$config['base_url'] 		= $_base_url; // 'http://localhost/dashboard/';

$config['timezone']			= 'Asia/Dhaka';

// $config['cl_logo'] 			= 'http://192.168.4.202/pfms/files/setting/photo/1/36131117070819.png';
// $config['cl_logo_class'] 	= 'img-thumbnail';
// $config['cl_logo_style'] 	= 'width:50%';

/* ------------------------------------------------------------
 * route
 * ------------------------------------------------------------
 */

$config['route'] = [

	''	=> 'dashboard',
];


/* ------------------------------------------------------------
 * debug
 * ------------------------------------------------------------
 */ 
$config['debug']			= true;
// $config['debug_backtrace']	= true;

$_base_url 			= rtrim($config['base_url'],'/');
define('base_url', $_base_url);

// foreach($config as $cnfK=>$cnfV){
// 	define('CNF_'.$cnfK, $cnfV);
// }