//console.log('GW1');
const http = require('http');
const AWS = require("aws-sdk");
const AWSXRay = require('aws-xray-sdk-core')
  
//const mysql = require('mysql');
//const uuid = require("uuid/v4");

const mysql = require('serverless-mysql')({
  config: {
    host     : process.env.databaseHost,
    port     : process.env.databasePort,
    database : process.env.databaseName,
    user     : process.env.databaseUserName,
    password : process.env.databasePassword
  }
});

console.log({
  host            : process.env.databaseHost,
  user            : process.env.databaseUserName,
  database        : process.env.databaseName
});

exports.handler = async (event, context, callback) => {


  mysql.config();
  // allows for using callbacks as finish/error-handlers
  context.callbackWaitsForEmptyEventLoop = false;

  console.log("Event is ", event);
  console.log("Event body is: ", event.body);
  console.log('Received event:', JSON.stringify(event, null, 2));

  const eventBodyJson = JSON.stringify(event, null, 2);
  console.log('eventBodyJson: :', JSON.stringify(event, null, 2));
  
  
  var weight=event.body.weight;
  var calorieIntake = event.body.calIntake;
  var caloriesBurned=event.body.calBurned;
  var workoutType=event.body.workout_type;
  // var activityLevel = evnet.body.
  var workoutLength =event.body.time;
  var hoursSlept=event.body.sleep;
 
  var queryParams = [
    weight,
    calorieIntake,
    caloriesBurned,
    workoutType,
    workoutLength,
    hoursSlept
  ]; 

  
  
  var error = new Error("wrong datatype inside json");

  console.log("Query param weight : ", queryParams[0])
  console.log("Query param calorieIntake: ", queryParams[1])
    
  //check if the right data type is provided

//   if(typeof weight != "number" || 
//      typeof calorieIntake != "number"   || 
//      typeof caloriesBurned != "number"     ||
//      typeof workoutType != 'string'     ||
//      typeof workoutLength != "number" ||
//      typeof hoursSlept != "number"){
     
//     context.fail(error);


//  // SQL query to insert into keyholder table
//  // using the forign key key_holdertype_id from keyholdertype table
 
//  }else{
     var query = "INSERT INTO CUSTOMER_METRICS(weight, calorie_intake, calories_burned, workout_type, length_workout, hours_slept) VALUES ( ?,?,?,?,?);"  
    // "VALUES (@weight, calorieIntake, caloriesBurned, workoutType, workoutLength,  hoursSlept );"
  // var query = "INSERT INTO CUSTOMER_METRICS VALUES "
  mysql.query(query,queryParams, (err, res) => {
      if (err) {
        throw err
      }
      callback(null,res);
    })
//  }
// //

await mysql.end();

 };
