<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
header('Content-Type: application/json');
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$registro=mysqli_query($mysqli  ,"UPDATE `SIWCliente` SET `ClienteSIW` = '$request->ClienteSIW', `Domicilio` = '$request->Domicilio', `Localidad` = '$request->Localidad' WHERE `SIWCliente`.`idCliente` = '$request->idCliente';");

//UPDATE `SIWCliente` SET `ClienteSIW` = 'ClienteSIW1', `Domicilio` = 'Domicilio1', `Localidad` = 'Localidad1' WHERE `SIWCliente`.`idCliente` = 3;

class Result{}

$response = new Result();
$response->resultado = 'OKMCliente';
$response->mensaje ='Cliente Modificado';

header('Content-Type: application/json');
echo json_encode($response);

?>
