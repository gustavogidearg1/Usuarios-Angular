<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
header('Content-Type: application/json');
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


$idFact= $_GET[id];

$registro=mysqli_query($mysqli  ,"DELETE FROM `SIWFacturacion` WHERE `SIWFacturacion`.`idFact` = '$idFact'");

class Result{}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje ='usuario borrado' + $idFact;

header('Content-Type: application/json');
echo json_encode($response);

?>
