<?php
  //require('credentials.php');
  // Create connection

  $servername = "localhost:3306";
  $username = "root";
  $password = "enduro";
  $dbname = "fitness_tracker";

  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
//testing if connected to database
  echo "Connected successfully"."<br>"."<br>";
//testing if grapbing input correctly


//====================INDEX PAGE=======================

$workout_weight = $_POST['weight'];
$workout_calorieIn = $_POST['calIntake'];
$workout_calorieOut = $_POST['calBurned'];
$workout_workoutType = $_POST['workout_type'];
$workout_activityLevel = $_POST['activity_level'];
$workout_lengthWorkout = $_POST['time'];
$workout_hoursSlept = $_POST['sleep'];

$sql = "
INSERT INTO CUSTOMER_METRICS (weight, calories_intake, calories_burned, workout_type, activity_level, workout_length, hours_slept)
  VALUES ('$workout_weight', '$workout_calorieIn', '$workout_calorieOut', '$workout_workoutType', '$workout_activityLevel',
  '$workout_lengthWorkout', '$workout_hoursSlept')";

  if (mysqli_query($conn, $sql)) {
      echo " Your request is being processed"."<br>"."<br>"."Thank you for contacting!"."<br>"."We will get in touch soon!";
  } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }





    ?>
