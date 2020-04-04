//console.log('GW1');
const http = require('http');
const AWS = require("aws-sdk");
const AWSXRay = require('aws-xray-sdk-core')
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


//const S3 = new AWS.S3();

exports.handler = async (event, context) => {

  mysql.config();

  console.log("MySQL configured");
  
  const results = await mysql.query('SELECT * FROM CUSTOMER_METRICS')
  console.log("MySQL RDS configured");

  await mysql.end();
  
  console.log("Results ", results);
  //return S3.listBuckets().promise();
  // TODO pag
  return results;
}


