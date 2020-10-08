<?php 
$_base_url 					= ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == "on") ? "https" : "http");
$_base_url 				   .= "://". @$_SERVER['HTTP_HOST'];
$_base_url 				   .= str_replace(basename($_SERVER['SCRIPT_NAME']),"",$_SERVER['SCRIPT_NAME']);
define('basepath', $_base_url);

require_once 'config/bootstrap.php';



