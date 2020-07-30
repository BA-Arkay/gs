<?php 
defined('basepath') || exit('No direct script is allowed!');

ob_start();
session_start(); 

if(isset($_GET['show_settings']))
	$_SESSION['show_settings'] = true;
elseif(isset($_GET['hide_settings']))
	unset($_SESSION['show_settings']);


$_slag = explode('?',$_SERVER['REQUEST_URI'])[0];
$_slag = explode('/', $_slag);
$_slag = $_view = end($_slag);
define('current_view', $_view);
define('current_route', $_view);



require_once 'config/config.php';
require_once 'config/debug_helper.php';
require_once 'config/functions.php';


date_default_timezone_set(@$config['timezone']);

// dd(url("img/favicon.ico"));


if(array_key_exists($_view, $config['route']))
	redirect($config['route'][$_view]);

// mastering template
$master_templates = [
	'login' => 'master_alt',
	'register' => 'master_alt',
];

$master = array_key_exists(current_view, $master_templates) ? $master_templates[current_view] : 'master';
$master = "layouts/{$master}.php";
if(file_exists($master))
	require_once "$master";
else 
	echo "<b>$master</b> : File not found!";
