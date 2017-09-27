<?php
header('Content-Type: application/json');
include 'User.php';
$users = new User('localhost', 'angadmin', 'root', '');

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
//echo json_encode($_POST);
