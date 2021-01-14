<?php
include("database.php");

$user = mysqli_real_escape_string($conexion, $_POST['user']);
$password = mysqli_real_escape_string($conexion, $_POST['pass']);

if ($user != "" && $password != "") {
    $query = "SELECT COUNT(*) as cont from datosajax WHERE user = '$user' AND password = '$password'";
    $result = mysqli_query($conexion, $query);

    $query2 = "SELECT * FROM datosajax WHERE user = '$user' AND password = '$password'";
    $result2 = mysqli_query($conexion, $query2);


    $row = mysqli_fetch_array($result);
    $count = $row['cont'];


    if ($count > 0) {
        $json = array();
        $row1 = mysqli_fetch_array($result2);                             
        $_SESSION['uname'] = $user;
        echo "id=" . $row1["id"];
    } else {
        echo "Usuario NO encontrado";
    }
}
