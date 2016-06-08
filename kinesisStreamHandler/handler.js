'use strict';

module.exports.handler = function(event, context, cb) {
  console.log('starting handler with event:');
  console.log(JSON.stringify(event,null,'\t'));
  event.Records.forEach(function(record){
    var payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
    var json = JSON.parse(payload);
    console.log('Decoded payload:', payload); 
    console.log('json: ', json);
  });
  //return cb({error: "let's fake an error"});
  return cb(null, {
    message: 'Go Serverless! Your Lambda function executed successfully!'
  });
};
