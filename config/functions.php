<?php 
defined('basepath') || exit('No direct script is allowed!');

function redirect($to){
	header("Location: {$to}");exit;
}
function to($to){
	redirect($to);
}

function url($url=null){
	return base_url."/{$url}";
}

function req($fileName){
	if(!file_exists("{$fileName}.php")) {
		$_errorMsg = "<pre style=\"padding:10px;border:1px solid rgba(255,0,0,0.5);\"><h4>FILE NOT FOUND</h4><code>{$fileName}.php</code></pre>";
		$fileName  = 'views/error/404';
	}
	@require_once "{$fileName}.php";
}
function inc($fileName){
	if(!file_exists("{$fileName}.php")) {
		$_errorMsg = "<pre style=\"padding:10px;border:1px solid rgba(255,0,0,0.5);\"><h4>FILE NOT FOUND</h4><code>{$fileName}.php</code></pre>";
		$fileName  = 'views/error/404';
	}
	@include_once "{$fileName}.php";
}

function current_route(){
	return defined('current_route') ? current_route : false;
}