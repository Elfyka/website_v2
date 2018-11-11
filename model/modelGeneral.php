<?php

class modelGeneral
{

    private $DAO;

    public function __construct()
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "website_v2";

        $this->DAO = new DAO_mysqli($servername, $username, $password, $dbname);
    }

    public function inserer($data)
    {
        $nom = $data['nom'];
        $prenom = $data['prenom'];
        $email = $data['email'];
        $object = $data['object'];
        $message = $data['message'];

        $sql = "INSERT INTO personne values (NULL, '$nom', '$prenom', '$email', '$message', '$object')";

        $this->DAO->bddQuery($sql);
    }

    public function obj()
    {
        $sqlobj = "SELECT * FROM object";
        return $this->DAO->select2($sqlobj);
    }

    public function obj1()
    {
        $sqlo = "SELECT * FROM object";
        $tab = array();
        $tab = $this->DAO->objetmsg($sqlo);
        $result = array();

        for ($i = 0; $i < sizeof($tab); $i++) {
            $sqlo1 = "SELECT * FROM personne WHERE `id_object` = '" . $tab[$i]['id_object'] . "'";
            $result[$i] = $this->DAO->objets($sqlo1);
            $result[$i . 'obj'] = $tab[$i]['object'];
        }
        return $result;
    }

}