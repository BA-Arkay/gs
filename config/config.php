<?php

defined('basepath') || exit('No direct script is allowed!');

$config['base_url'] 		= $_base_url; // 'http://localhost/dashboard/';

$config['timezone']			= 'Asia/Dhaka';

$config['cl_logo'] 			= 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjc_oOk64vlAhVp8HMBHayGBVUQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.ionos.com%2Ftools%2Flogo-maker&psig=AOvVaw1Hi-_ta5AOXSDrvIoJNkU1&ust=1570595748155485';
$config['cl_logo_class'] 	= 'img-thumbnail';
$config['cl_logo_style'] 	= 'width:50%';

/* ------------------------------------------------------------
 * route
 * ------------------------------------------------------------
 */

$config['route'] = [

	''	=> 'dashboard',
];

$config['brand_img'] = '';

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