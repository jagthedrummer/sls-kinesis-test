'use strict';

const AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();


module.exports.handler = function(event, context, cb) {
  var params = {
    Records: [ /* required */
    ],
    StreamName: 'sls-kinesis-test-jag-r-KinesisStream-YYFXSDEHH1IE' /* required */
  };
  for(var i = 0; i < 2; i++){
    params.Records.push({
      Data: JSON.stringify({ test: 'oh ha, this will error some more!', foo: 'bar', number: 42, isGood: i === 1 }), /* required */
      PartitionKey: 'STRING_VALUE', /* required */
      ExplicitHashKey: i === 1 ? '0' : '170141183460469231731687303715884105728'
    });
  }
  kinesis.putRecords(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });


  return cb(null, {
    message: 'Go Serverless! Your Lambda function executed successfully!'
  });
};
