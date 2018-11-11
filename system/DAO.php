<?php

interface DAO {
    function bddDeconnexion();
    function bddQuery($sql);
}