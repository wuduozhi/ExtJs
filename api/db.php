<?php
include_once("DbUtils.class.php");

//$db = DbUtils::getDB();
echo "hello";exit();
$sql = "SELECT * FROM student";

$out = $db->gets($sql);

var_dump($out);


?>
