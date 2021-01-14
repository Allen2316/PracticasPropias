<?php
include("database.php");
if (isset($_POST["id"])) {
    $id = $_POST["id"];
    $query = "DELETE FROM datosajax WHERE id = $id";
    $result = mysqli_query($conexion, $query);
    if (!$result) {
        die("No se ha podido Eliminar");
    }
    echo "Se elimino con exito";
}
