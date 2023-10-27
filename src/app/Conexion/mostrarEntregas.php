<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
header('Content-Type: application/json');
include_once("database.php");
//require("../app-Ecommerce/src/app/Conexion/ControlarLogin.php");
$json = file_get_contents('php://input');
$params = json_decode($json);
//$u = $_GET['usuario'];


//devuelve la conexion
$con = $mysqli;

$registroUsuario=mysqli_query($con ,"SELECT * FROM `SIWEntrega` ORDER BY `SIWEntrega`.`FormaEntrega` ASC");
$vec=[];
while($reg=mysqli_fetch_array($registroUsuario)){
    $vec[]=$reg;
}
$cad = json_encode($vec);
echo $cad;

?>
