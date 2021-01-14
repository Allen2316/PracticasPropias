<?php
include("database.php");
/* if (isset($_POST["id"])) { */
$id = $_POST["id"];
$query = "SELECT * FROM datosajax WHERE id = $id";
$result = mysqli_query($conexion, $query);
if (!$result) {
    die("No se hallo");
}

$json = array();
while ($row = mysqli_fetch_array($result)) {
    $json[] = array(
        "id" => $row["id"],
        "user" => $row["user"],
        "pass" => $row["password"],
        "tel22" => $row["telefono"]
    );
}
$jsonstring = json_encode($json[0]);
echo $jsonstring;
/* }  */