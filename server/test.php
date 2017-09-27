<?php
$dbHost='127.0.0.1';
$dbName='angadmin';
$dbUser='root';
$dbPass='';

try {
    $DBH = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
    $resp = $DBH->prepare('select * from users where email=?');
    $resp->execute(["qwee"]);
    $resp->setFetchMode(PDO::FETCH_OBJ);
    $row = $resp->fetch();
    if($row){
        var_dump($row);
    } else echo false;
}

catch (PDOException $exception){
    echo $exception->getMessage();
}