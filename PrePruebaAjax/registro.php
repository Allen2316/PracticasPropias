<?php
include("database.php");
function random_string($length)
{
    $key = '';
    $keys = array_merge(range(0, 9), range('a', 'z'));
    for ($i = 0; $i < $length; $i++) {
        $key .= $keys[array_rand($keys)];
    }
    return $key;
}
$email = $_POST['email'];
$password = $_POST['pass'];
$idd = random_string(74);
$conf = array(
    'cost' => 12
);
$pass = password_hash($password, PASSWORD_BCRYPT, $conf);
$stm = "INSERT INTO users (email,pass) VALUES ('$email','$pass')";
$result = mysqli_query($conexion, $stm);
if ($result) {
    $response = array(
        'response' => 'true'
    );
} else {
    $response = array(
        'response' => 'false'
    );
}
die(json_encode($response));
