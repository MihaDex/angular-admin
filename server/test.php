<?php
include 'Computers.php';
$computers = new \server\Computers();

$pop = $computers->getComputers('12qwaszx');
var_dump($pop);