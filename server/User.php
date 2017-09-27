<?php

class User extends Db
{
    function __construct()
    {
       parent::__construct();
    }
    public function setUser($email, $password) {
        try {
            if (!$this->searchByEmail($email)) {
                $token = $this->generateToken();
                $STH = $this->DBH->prepare("INSERT into users (email, password, token, last_enter) values (?, ?, ?, ?)");
                if($STH->execute([$email, $this->makeHash($password), $token, time()])){
                    return $token;
                }
                else return false;
            } else return false;
        }
        catch (\PDOException $exception){
            echo $exception->getMessage();
        }
    }
    public function getToken($email, $password){
        $resp = $this->DBH->prepare('select id from users where email=? and password=?');
        $resp->execute([$email,$this->makeHash($password)]);
        $resp->setFetchMode(\PDO::FETCH_OBJ);
        $row = $resp->fetch();
        if(isset($row)){
            $STH = $this->DBH->prepare('update users set token=?, last_enter=? where id=?');
            if($STH->execute([$newToken = $this->generateToken(), time(), $row->id])){
                return $newToken;
            } else return false;
        } else return false;
    }
    private function searchByEmail($email){
            $STH = $this->DBH->prepare("SELECT * from users WHERE email=?");
            $STH->execute([$email]);
            $STH->setFetchMode(\PDO::FETCH_OBJ);
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