<?php
    include "db.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App-chat.JS</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="Ajax.js"></script>
</head>
<body>
    <div id="conteiner">
        <div id="boxchat">
            <div id="chat">
            </div>
        </div>
        <form method="POST" action="index.php">
            <input type="text" name="nombre" placeholder="ingrese su nombre">
            <textarea name="mensaje" placeholder="ingrese su mensaje"></textarea>
            <input type="submit" name="enviar" value="enviar">
        </form>
        
        <!-- envia datos al php  -->
        <?php
        // si ha setiado el metodo post
            if(isset($_POST['enviar'])) {
                $nombre = $_POST['nombre'];
                $mensaje = $_POST['mensaje'];

                $consulta = "INSERT INTO chatjimmy (nombre, mensaje) VALUES ('$nombre' , '$mensaje') ";
                $ejecutar = $conexion->query($consulta);
            }
        ?>
        <!-- envia datos al php  -->
    </div>
</body>
</html>