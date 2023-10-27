<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
header('Content-Type: application/json');
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{}
$request = json_decode($postdata);

$NumFact= $request->NumFact;
$Fecha = $request->fecha;
$Cliente= $request->cliente;
$Pago = $request->pago;
$Entrega= $request->entrega;
$Producto1 = $request->Producto1;
$Producto2= $request->Producto2;
$Producto3 = $request->Producto3;
$Producto4= $request->Producto4;
$Cantidad1 = $request->Cantidad1;
$Cantidad2= $request->Cantidad2;
$Cantidad3 = $request->Cantidad3;
$Cantidad4= $request->Cantidad4;
$Precio1 = $request->Precio1;
$Precio2= $request->Precio2;
$Precio3 = $request->Precio3;
$Precio4 = $request->Precio4;
$Observacion = $request->Observacion;

$registro=mysqli_query($mysqli ,"INSERT INTO `SIWFacturacion` (`idFact`, `NumFact`, `Fecha`, `Cliente`, `Pago`, `Entrega`, `Producto1`, `Producto2`, `Producto3`, `Producto4`, `Cantidad1`, `Cantidad2`, `Cantidad3`, `Cantidad4`, `Precio1`, `Precio2`, `Precio3`, `Precio4`, `Observacion`) VALUES (NULL, '1', '$Fecha', '$Cliente', '$Pago', '$Entrega', '$Producto1', '$Producto2', '$Producto3', '$Producto4', '$Cantidad1', '$Cantidad2', '$Cantidad3', '$Cantidad4', '$Precio1', '$Precio2', '$Precio3', '$Precio4', '$Observacion');");


class Result{}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje ='Factura cargada Nueva';


header('Content-Type: application/json');
echo json_encode($response);

?>


