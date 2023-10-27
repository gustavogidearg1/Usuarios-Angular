<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
header('Content-Type: application/json');
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$registro=mysqli_query($mysqli ,"INSERT INTO `SIWCliente` (`idCliente`, `ClienteSIW`, `Domicilio`, `Localidad`) VALUES (NULL, '$request->ClienteSIW', '$request->Domicilio', '$request->Localidad');");

//INSERT INTO `SIWCliente` (`idCliente`, `ClienteSIW`, `Domicilio`, `Localidad`) VALUES (NULL, 'ClienteSIW', 'Domicilio', 'Localidad');

class Result{}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje ='Usuario Agregado';


header('Content-Type: application/json');
echo json_encode($response);

?>

