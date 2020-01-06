# ServelecQuizLambda
My lambda functions and Read me of how to interface with them

## Posting to the quiz DB.

To post to the quiz db you need to create a HTTP request interfacing with the url for the post request.
presently the url is: https://8z1k7fm2j2.execute-api.eu-west-2.amazonaws.com/Release/post

Following from that you need to create your params string. I did this by creating a JSON object and then stringifying it so that it is in the correct format

The 4 params you will need are:

"TableName" - This should always be set to "scores" for the purpose of this quiz however the lambda can be repurposed for other dynamoDB tables.
I will use this in future dynamoDB projects that I undertake as it will work for any table 

"name" - Set this to be equal to whatever the variable for the username is for your quiz

"score" - Set this to be equal to whatever the variable for the score count is for your quiz

"time" - Set this to be equal to the time in seconds that it took for the quiz to be completed. Please return it as an int

I will insert a code snippet below of my example code. Hope this works for you all :D

![alt text](https://github.com/RussianHamster6/ServelecQuizLambda/blob/master/images/example.PNG)

###Update
Now there is an additional request header that is needed to be added on which is the x-api-key. This means any previous versions of the quiz software will now not work as they will not be authorised to access the api.

## Bit of info

This was created using Amazon web servers using a REST API gateway, AWS lambdas and DynamoDB. 

The lambdas are referenced through the API gateway. They then interface with the Dynamo DB to get or post data from or onto the dynamoDB table. 

The lambdas will interface with both the quiz frontend and the leaderboard frontend. 

The code for the lambdas are saved here but they are not working from here. The actual lambdas are hosted on my AWS account. 
The example code is just an example POST request.

The get lambda currently only works for the scores table on my aws account. In the future this will be modified to scan all the data from any table however that will be in a different repo. 
