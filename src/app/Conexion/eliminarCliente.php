<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
header('Content-Type: application/json');
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idCliente= $_GET[id];
$registro=mysqli_query($mysqli  ,"DELETE FROM `SIWCliente` WHERE `SIWCliente`.`idCliente` = '$idCliente'");

class Result{}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje ='Cliente borrado'+$idCliente;

header('Content-Type: application/json');
echo json_encode($response);

?>
