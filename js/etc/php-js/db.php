<?php
    $servidor = "localhost";
    $usuario = "root";
    $password = "";
    $base_datos = "appchatjimmy";

    $conexion = new mysqli( $servidor,  $usuario ,  $password ,  $base_datos);

    function formatFecha($fecha){
        return date ('g:i a' , strtotime($fecha));
    }
    
?>
