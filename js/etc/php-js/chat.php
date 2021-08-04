<!-- extre datos del php  -->
<?php
    include "db.php";
    $consulta = "SELECT * FROM chatjimmy ORDER BY id DESC";
    $ejecutar = $conexion->query($consulta);
    while( $fila = $ejecutar->fetch_array()):
?>
                <div id="datachat">
                    <span><?php echo $fila['nombre'] ?>:</span>
                    <span><?php echo $fila['mensaje'] ?></span>
                    <span style = 'float:right' ><?php echo formatFecha( $fila['fecha'] )?></span>
                </div>
<?php endwhile; ?>
            <!-- extre datos del php  -->