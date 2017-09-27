<?php

class Db
{
    function __construct()
    {
        try {
            include 'settings.php';
            $this->DBH = new \PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
        }
        catch (\PDOException $exception){
            echo $exception->getMessage();
        }
    }

}