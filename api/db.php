<?php
require_once("DbUtils.class.php");


$db = DbUtils::getDB();

$sql = "SELECT * FROM studnet";

$out = $db->gets($sql);

var_dump($out);


?>
