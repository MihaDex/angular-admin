<?php

header('Content-Type: application/json');
include "Db.php";
include 'User.php';
include 'Computers.php';
$users = new User();
$computers = new Computers();

if(isset($_POST['type']) && isset($_POST['email']) && isset($_POST['password']) && $_POST['type']=="login"){
    $token = $users->getToken($_POST['email'], $_POST['password']);
    if($token){
        echo json_encode(['auth'=>true, 'token'=>$token]);
    }
    else {
        echo json_encode(['auth'=>false]);
    }
}
if(isset($_POST['type']) && isset($_POST['email']) && isset($_POST['password']) && $_POST['type']=="registration"){
    $resp = $users->setUser($_POST['email'], $_POST['password']);
    if($resp){
        echo json_encode(['auth'=>true, 'token'=>$resp]);
    }
    else {
        echo json_encode(['auth'=>false]);
    }
}
if(isset($_POST['type']) && isset($_POST['token']) && $_POST['type']==='getcomputers') {
    $getComputers = $computers->getComputers($_POST['token']);
    if($getComputers===false){
        echo json_encode(["auth"=>false]);
    } else {
        echo json_encode(["auth"=>true, "computers"=>$getComputers]);
    }
}

//echo json_encode($_POST);