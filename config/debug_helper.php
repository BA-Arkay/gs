<?php 
## Settings
$_debug_mode_on = (bool)@$config['debug'];
$_backTrack_on 	= (bool)@$config['debug_backtrace'];

define('___debug_mode___', $_debug_mode_on);
define('___backtrace___', $_backTrack_on);
if($_debug_mode_on){
	$_ini_set_display_error = 1;
	$_dbug_js_alert_msg = '⚠ Debug mode in enabled!\n📂 /app/config/env.php\n✎ define( Debug, false )\n✎ define( ENV, Production )';
	echo '<span title="Debug : On" style="color:red;position:fixed;top:0;right:0;padding:5px;background:yellow;z-index:999999999 !important;opacity: 0.25;"><big style="cursor:pointer;" onclick="javascript:alert(\''.$_dbug_js_alert_msg.'\');">⚠</big></span>';
}else{
	$_ini_set_display_error = 0;
}
ini_set('display_errors',$_ini_set_display_error);
function process_for_debug($params,$func,$die=false)
{
	$backTrack = debug_backtrace();
	$backTrack = ___backtrace___ ? $backTrack : [$backTrack[1]];
	$btLines = [];
	foreach($backTrack as $btMsg){
		$btLines[] = '<code style="color:red;">📂 '.($btMsg['file']).' → <b>'.($btMsg['line']).'</b></code>';
	}
	$dbug = $func[0]==='d'?'var_dump':($func[0]==='p'?'print_r':'var_dump');
	echo '<div style="direction: ltr;">';
	if(count($params)>0){
		foreach($params as $param){
			echo '<pre>';
			$dbug($param);
			echo '</pre>';
		}
	}else{
		echo '<pre>⚠ Pass at least one argument in the function: <b>'.$func.'()</b></pre>';
	}
	echo implode('<br>', $btLines);
	$die?die('<br><code style="color:red;">-- died --</code>'):false;
	echo '</div>';
}
function d(){
	___debug_mode___ ? process_for_debug(func_get_args(), __FUNCTION__) : false;
}
function dd()
{
	___debug_mode___ ? process_for_debug(func_get_args(), __FUNCTION__, true) : false;
}
function p(){
	___debug_mode___ ? process_for_debug(func_get_args(), __FUNCTION__) : false;
}
function pd()
{
	___debug_mode___ ? process_for_debug(func_get_args(), __FUNCTION__, true) : false;
}