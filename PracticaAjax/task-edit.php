<?php
include("database.php");

$id = $_POST["id"];
$name = $_POST["name"];
$description = $_POST["description"];

$id = $_POST["id"]; 
$query = "UPDATE tareas SET nombre = '$name', descripcion = '$description' WHERE id = '$id'";
$result = mysqli_query($conection, $query);

if (!$result) {
    die("Fallo consulta Editar");
}
echo "Tarea actualizada correctamente";
