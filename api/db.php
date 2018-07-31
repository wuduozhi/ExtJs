<?php
include_once("DbUtils.class.php");

echo "hello";exit();

$sql = "SELECT * FROM student";
$db = DbUtils::getDB();
$out = $db->gets($sql);

var_dump($out);


?>
