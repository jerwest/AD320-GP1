<?php
  //require('credentials.php');
  // Create connection

  $servername = "localhost:3306";
  $username = "root";
  $password = "Barsik_71";
  $dbname = "fitness_tracker";

  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";

$weight = $_POST["weight"];
echo $weight;

  ?>
