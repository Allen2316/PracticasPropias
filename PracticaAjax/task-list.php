<?php
include("database.php");

$query = "select * from tareas";

$result = mysqli_query($conection, $query);

if (!$result) {
    die("Fallo la consulta") . mysqli_error($conection);
}

$json = array();
while ($row = mysqli_fetch_array($result)) {
    $json[] = array(
        "nombre" => $row["nombre"],
        "descripcion" => $row["descripcion"],
        "id" => $row["id"]
    );
}
$jsonstring = json_encode($json);
echo $jsonstring;