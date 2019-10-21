const AWS = require('aws-sdk');
const ddbClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    const params = {
        "TableName":"scores"
    }
    const TableName = "scores";
    
    ddbClient.scan(params, function(err, data) {
        if (err){
            callback(err, null);
        }
        else{
            callback(null, data);
        }
    })
}