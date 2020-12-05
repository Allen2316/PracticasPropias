<?php
include("database.php");

if (isset($_POST["name"])) {
    $name = $_POST["name"];
    $description = $_POST["description"];
    $query = "insert into tareas(nombre, descripcion) values ('$name', '$description')";
    $result = mysqli_query($conection, $query);
    if (!$result) {
        die("La consulta ha fallado");
    }
    echo "Tarea agregada con exito";
}
