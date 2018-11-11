<?php
/**
 * Created by PhpStorm.
 * User: jaded
 * Date: 07/11/2018
 * Time: 21:35
 */

class ctrlGeneral
{

    private $view;
    private $model;

    public function __construct()
    {
        $this->view = new viewGeneral();
        $this->model = new modelGeneral();
    }

    public function getHome()
    {
        $this->view->displayHome();
    }

    public function getAbout()
    {
        $this->view->displayAbout();
    }

    public function getPortfolio()
    {
        $this->view->displayPortfolio();
    }

    /*public function getChatbot()
    {
        $this->view->displayChatbot();
    }*/

    public function getContact()
    {
        $object = $this->model->obj();
        $this->view->displayContact($object);
    }


    public function saveForm()
    {
        $data = array(
            'nom' => strip_tags($_POST['nom']),
            'prenom' => strip_tags($_POST['prenom']),
            'email' => strip_tags($_POST['email']),
            'object' => strip_tags($_POST['sel1']),
            'message' => strip_tags($_POST['message'])
        );

        $boolVerif = array();

        foreach ($data as $value) {
            switch ($value) {
                case strip_tags($_POST['nom']):
                    $data['nom'] = $this->remplacerChar($value);
                    break;
                case strip_tags($_POST['prenom']):
                    $data['prenom'] = $this->remplacerChar($value);
                    break;
                case strip_tags($_POST['email']):
                    $data['email'] = $this->remplacerChar($value);
                    break;
                case strip_tags($_POST['message']):
                    $data['message'] = $this->remplacerChar($value);
                    break;
            }
        }

        foreach ($data as $value) {
            $boolVerif[$value] = $value == "" ? false : $this->verifier($value);
        }

        if ($boolVerif[$data['nom']] && $boolVerif[$data['prenom']] && $boolVerif[$data['email']] && $boolVerif[$data['message']]) {

            $this->model->inserer($data);
            $this->getContact();

        } else {
            echo "not ok";
        }
    }

    private function verifier($val)
    {
        $verif = false;
        switch ($val) {
            case strip_tags($_POST['nom']):
                $verif = self::isAlpha($val);
                break;
            case strip_tags($_POST['prenom']):
                $verif = self::isAlpha($val);
                break;
            case strip_tags($_POST['email']):
                $verif = self::isEmail($val);
                break;
            default :
                $verif = true;
                break;
        }
        return $verif;
    }

    private function remplacerChar($val)
    {
        $find = array("'", '"');
        $replace = array(" ", "");
        return str_replace($find, $replace, $val);
    }

    public static function isAlpha($val)
    {
        $regex = "/^[a-zA-Z\- 0-9]*$/";
        return preg_match($regex, $val);
    }

    public static function isEmail($val)
    {
        $regex = "/^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i";
        return preg_match($regex, $val);
    }


}