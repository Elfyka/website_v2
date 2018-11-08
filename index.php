<?php
/**
 * Created by PhpStorm.
 * User: jaded
 * Date: 07/11/2018
 * Time: 21:21
 */

if (isset($_GET['c']) && isset($_GET['m']) && isset($_GET['a'])) {

    $m = $_GET['m'];
    $ctrl = new $_GET['c'];
    $ctrl->$m($_GET['a']);

} else if (isset($_GET['c']) && isset($_GET['m'])) {
    $m = $_GET['m'];
    $ctrl = new $_GET['c'];
    $ctrl->$m();
} else {
    $v = "ctrlGeneral";
    $ctrl = new $v;
    $ctrl->getHome();

    /*ini_set('safe_mode','Off');*/
}

function __autoload($class_name = "")
{
    $repertoires = array(
        "ctrl/",
        "model/",
        "view/",
        "system/",
        "js/",
        ""
    );

    foreach ($repertoires as $repertoire) {
        $file = "{$repertoire}{$class_name}.php";
        // var_dump($file);

        if (file_exists($file)) {
            include_once($file);
        }
    }

}