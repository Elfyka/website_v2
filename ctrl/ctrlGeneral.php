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
        $this->view->displayContact();
    }

}