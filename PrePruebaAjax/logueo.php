<?php
include("database.php");

$id = $_GET["id"];

$query = "SELECT * FROM datosajax WHERE id = $id";
$result = mysqli_query($conexion, $query);
if (!$result) {
    die("No se hallo");
}

$json = array();
$row = mysqli_fetch_array($result);
echo $row["user"];


