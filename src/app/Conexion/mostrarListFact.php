<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
header('Content-Type: application/json');

include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$ListFact=mysqli_query($mysqli ,"SELECT * FROM `VistSIWFact` ORDER BY `VistSIWFact`.`Fecha` DESC");
$vec=[];
while($reg=mysqli_fetch_array($ListFact)){
    $vec[]=$reg;
}
$cad = json_encode($vec);
echo $cad;

?>
