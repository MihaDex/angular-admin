<?php

class User
{
    function __construct($dbHost,$dbName,$dbUser,$dbPass)
    {
        try {
            $this->DBH = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
        }
        catch (PDOException $exception){
            echo $exception->getMessage();
        }
    }
    public function setUser($email, $password) {
        try {
            if (!$this->searchByEmail($email)) {
                $token = $this->generateToken();
                $STH = $this->DBH->prepare("INSERT into users (email, password, token) values (?, ?, ?)");
                if($STH->execute([$email, $this->makeHash($password), $token])){
                    return $token;
                }
                else return false;
            } else return false;
        }
        catch (PDOException $exception){
            echo $exception->getMessage();
        }
    }
    public function getToken($email, $password){
        foreach ($this->users as $item){
            if($item['email']===$email && $item['password']===$this->makeHash($password)){
                return $item['token'];
            }
        }
        if(!$this->searchByEmail($email)){
            return false;
        }
    }
    private function searchByEmail($email){
            $STH = $this->DBH->prepare("SELECT * from users WHERE email=?");
            $STH->execute([$email]);
            $STH->setFetchMode(PDO::FETCH_OBJ);
            $row = $STH->fetch();
            if(isset($row)){
                return $row;
            }
            else{
                return false;
            }
        }
    private function generateToken($count = 17) {
        $result = '';
        $array = array_merge(range('a','z'), range('0','9'));
        for($i = 0; $i < $count; $i++){
            $result .= $array[mt_rand(0, 35)];
        }
        return $result;
    }
    private function makeHash($password){
        return md5(md5($password));
    }
}