<?php
$user = 'root';
$pass = 'root'; //mac only
$host = 'localhost';
$db = 'a3_cooperInfo';

//try conncecting to the sever
$conn = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($conn, 'utf8');

if(!$conn) {
  echo 'something done busted!';
  exit;
}

//echo 'connected!';

$myQuery = "SELECT * FROM mainmodel";

$result = mysqli_query($conn, $myQuery);
$rows = array();

while ($row = mysqli_fetch_assoc($result)) {
  $rows[] = $row;
}
//var_dump($rows);
//echo json_encode($rows);

if (isset($_GET["carModel"])) {
  $car = $_GET["carmodel"]; //F55 http://localhost:8888/A3_Lab1/includes/function.php?carModel=F55

  //select one car instead of all of them
  $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";

  //store the result
  $result = mysqli_query($conn, $myQuery);

  //get the row
  $row = mysqli_fetch_assoc($result);

  //show it on the page
  echo json_encode($rows);
}

?>
