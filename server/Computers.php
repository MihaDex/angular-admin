<?php

class Computers extends Db
{
    function __construct()
    {
        parent::__construct();
    }
    public function addComputer($ip, $name, $token, $status = 'offline') {
        $userId = $this->getUserId($token);
        if(!$userId) {
            return false;
        } else {
            $STH = $this->DBH->prepare('insert into computers (ip, name, status, user_id) values(?,?,?,?)');
            return $STH->execute([$ip, $name, $status, $userId]);
        }
    }
    public function editComputer() {}
    public function deleteComputer() {}
    public function getComputers($token) {
        $userId = $this->getUserId($token);
        if(!$userId) {
            return false;
        } else {
            $STH = $this->DBH->prepare('select id,ip,name,status from computers where user_id=?');
            $STH->execute([$userId]);
            $STH->setFetchMode(\PDO::FETCH_ASSOC);
            $arr = [];
            while ($row = $STH->fetch()){
                array_push($arr, $row);
            }
            return $arr;
        }
    }

    public function getUserId($token) {
        $STH = $this->DBH->prepare('select id, last_enter from users where token=?');
        $STH->execute([$token]);
        $STH->setFetchMode(\PDO::FETCH_OBJ);
        $row = $STH->fetch();
        if(!$this->isOutDate($row->last_enter)){
            return $row->id;
        } else return false;
    }
    private function isOutDate($timestamp, $defaultDelay = 1200) {
        if((time()-$timestamp)>$defaultDelay){
            return true;
        } else return false;
    }
}