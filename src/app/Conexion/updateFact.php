<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
header('Content-Type: application/json');
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$registro=mysqli_query($mysqli  ,"UPDATE `SIWFacturacion` SET `Fecha` = '$request->Fecha', `Cliente` = '$request->Cliente', `Pago` = '$request->Pago', `Entrega` = '$request->Entrega' WHERE `SIWFacturacion`.`idFact` = '$request->idFact';");




class Result{}

$response = new Result();
$response->resultado = 'OKM';
$response->mensaje ='Factura Modificada';

header('Content-Type: application/json');
echo json_encode($response);

?>
