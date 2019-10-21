const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-2'});
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

    const params = JSON.parse(JSON.stringify(event));
    const TableName = params.TableName;
    const Item = {
        scoreID: params.name,
        score: params.score
    };

    dynamo.put({TableName, Item}, function (err, data) {
        if (err){
            console.log('error', err);
            callback(err, null);
        }
        else {
            var response = {
                statusCode: 200,
                headers: {
                    'Content-Type': `application/json`,
                    'Access-Control-Allow-Methods': `GET,POST,OPTIONS`,
                    'Access-Control-Allow-Origin': `https://my-domain.com`,
                    'Access-Control-Allow-Credentials': `true`
                },
                isBase64Encoded: false
            };
            console.log('Sucess: returned ${data.Item}');
            callback(null,response);
        }
    });
};