<?php
/**
 * Created by PhpStorm.
 * User: jaded
 * Date: 07/11/2018
 * Time: 21:36
 */

class viewGeneral
{

    public function displayHome()
    {
        $page = "home.php";
        include "templates/default.php";
    }

    public function displayAbout()
    {
        $page = "about.php";
        include "templates/default.php";
    }

    public function displayPortfolio()
    {
        $page = "portfolio.php";
        include "templates/default.php";
    }

    public function displayChatbot()
    {
        $page = "chatBot.php";
        include "templates/default.php";
    }

    public function displayContact()
    {
        $page = "contact.php";
        include "templates/default.php";
    }
}