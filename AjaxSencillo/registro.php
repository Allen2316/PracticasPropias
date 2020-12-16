<?php
include("database.php");

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$email = $_POST["email"];
$password = $_POST["password"];

$query = "INSERT INTO datosajax (nombre, apellido, email, password) 
        VALUES ('$nombre','$apellido','$email','$password')";

echo mysqli_query($conexion, $query);
