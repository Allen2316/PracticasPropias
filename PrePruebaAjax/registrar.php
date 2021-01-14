<?php
include("database.php");

if (isset($_POST["user"])) {
    $user = $_POST["user"];
    $pass = $_POST["pass"];
    $tel = $_POST["tel"];
    $query = "INSERT INTO datosajax(user, password, telefono) VALUES ('$user','$pass','$tel')";
    $result = mysqli_query($conexion, $query);
    if (!$result) {
        die("No se ha podido Guadar el Usuario");
    }
    echo "Usuario Guardado";
}
    

