<?

$_SESSION['delivery'] = [
	'ref_1'=>[
		'roll_1'=>'55411',
		'roll_2'=>'55411',
		'roll_3'=>'55411',
	],
	'ref_2'=>[
		'roll_4'=>'55411',
		'roll_5'=>'55411',
		'roll_6'=>'55411',
	],
];

function roll_exists_in_delivery($_roll_no)
{
	if(isset($_SESSION['delivery'])&&is_array($_SESSION['delivery']))
		foreach($_SESSION['delivery'] as $ref_no=>$rolls)
			if(is_array($rolls))
				foreach($rolls as $roll_no=>$roll_info)
					if($roll_no==$_roll_no) 
						return $ref_no;
	return false;
}

d(roll_exists_in_delivery('roll_5'));

?>


