<?php
include("database.php");
/* if (isset($_POST["ID-user1"])) { */
$id = $_POST["ID-user1"];
$user = $_POST["user1"];
$pass = $_POST["pass1"];
$tel = $_POST["tel1"];
$query = "UPDATE datosajax SET user = '$user', password = '$pass', telefono = '$tel' WHERE id = '$id'";
$result = mysqli_query($conexion, $query);
if (!$result) {
    die("Error al editar");
}
echo $user . $pass . $id . $tel;
//echo "Se edito";
/* } */
