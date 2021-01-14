<?php
include("database.php");

$query = "SELECT * FROM datosajax";

$result = mysqli_query($conexion, $query);

if (!$result) {
    die("Error al listar") . mysqli_error($conexion);
}

$json = array();
while ($row = mysqli_fetch_array($result)) {
    $json[] = array(        
        "user" => $row["user"],
        "pass" => $row["password"],
        "tel" => $row["telefono"],
        "id" => $row["id"]
    );
}

$jsonstring = json_encode($json);
echo $jsonstring;