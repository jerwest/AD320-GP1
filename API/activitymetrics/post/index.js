//console.log('GW1');
const http = require('http');
const AWS = require("aws-sdk");
const AWSXRay = require('aws-xray-sdk-core')
//const queryString = require('query-string');
var querystring = require('querystring')
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
  // allows for using callbacks as fireqnish/error-handlers
  context.callbackWaitsForEmptyEventLoop = false;

 

 
  

  console.log("Event is ", event);
  // Prints non-string body with &=
  console.log("Event body is: ", event.body);
  const bodyAsString = JSON.stringify(event.body);

  //------------WORKS AS STRING-------------
  console.log ("Body as a String", bodyAsString);

  const parsedQueryString =  querystring.parse(bodyAsString);

  const parseBody = querystring.parse(event.body)
  // ***************works**************** 
  console.log("parsed body", parseBody)
  console.log("Parsed body weight", parseBody.weight)
  // Works

//   '"weight': '499',
//   calIntake: '2999',
//   calBurned: '500',
//   workout_type: 'running',
//   time: '60',
//   sleep: '6"'
// }


  const post_data = querystring.stringify(event.body);
  console.log ("Post Data event body ", post_data )

  // Prints String Json
  console.log('Received event:', JSON.stringify(event, null, 2));
  //console.log("REceived event as json.parse ", JSON.parse(event));
// stringify into Json strings
  const eventJsonString = JSON.stringify(event, null, 2);
  // Prints bunch of 
  console.log('event stringified: :', JSON.stringify(eventJsonString, null, 2));
// parse json strings
// Back to how it was before stringigying
  const eventJsonParsed = JSON.parse(eventJsonString);
  console.log("Parsed event ", eventJsonParsed.body);

  var post_data1 = querystring.stringify(eventJsonParsed.body);
  console.log ("Post Data event body ", post_data1 )
  
 
 // Returns undefined 
  var weight = parseBody.weight;
  console.log("Weight eventJson " , weight);

  var calorieIntake = parseBody.calIntake;
  var caloriesBurned=parseBody.calBurned;
  var workoutType=parseBody.workout_type;
  // var activityLevel = evnet.body.
  var workoutLength =parseBody.time;
  var hoursSlept=parseBody.sleep;
 
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
     var query = "INSERT INTO CUSTOMER_METRICS(weight, calorie_intake, calories_burned, workout_type, length_workout, hours_slept) VALUES ( ?,?,?,?,?, ?);"  
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
