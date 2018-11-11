<?php

class DAO_mysqli
{
    private $conn;

    public function __construct($servername, $username, $password, $dbname)
    {
        $this->conn = new mysqli($servername, $username, $password, $dbname);
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
        /*echo "Connected successfully";*/
    }

    public function bddDeconnexion()
    {
        $this->conn->close();
    }

    public function bddQuery($sql)
    {
        $x = $this->conn->query($sql) or die ('erreur' . $sql . ' ' . $this->conn->error);
        /*echo "New record created successfully";*/
    }


    public function select2($sql)
    {
        $x = $this->conn->query($sql) or die ('erreur' . $sql . ' ' . $this->conn->error);

        while ($donne = $x->fetch_assoc()) {
            $tab[] = array('id_object' => $donne['id_object'], 'object' => $donne['object']);
        }
        //var_dump($tab);

        return $tab;

    }

    public function objets($sql)
    {
        $x = $this->conn->query($sql) or die ('erreur' . $sql . ' ' . $this->conn->error);

        while ($donne = $x->fetch_assoc()) {
            $tab[] = array('id_personne' => $donne['id_personne'], 'nom' => $donne['nom'], 'prenom' => $donne['prenom'], 'email' => $donne['email']);
        }

        return $tab;

    }

    public function objetmsg($sql)
    {
        $x = $this->conn->query($sql) or die ('erreur' . $sql . ' ' . $this->conn->error);

        while ($donne = $x->fetch_assoc()) {
            $tab[] = array('id_object' => $donne['id_object'], 'object' => $donne['object']);
        }

        return $tab;
    }


}