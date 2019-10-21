function httpRequest(){
    var http = new XMLHttpRequest();
    var url = 'https://8z1k7fm2j2.execute-api.eu-west-2.amazonaws.com/test/post';
    var params = {
        "TableName": "scores",
        "name": "Your username here",
        "score": "0",
        "time": "X Seconds"
    };
    params = JSON.stringify(params);
    http.open('POST',url,true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {//Call a function when the state changes.
        console.log(http.response);
    };
    http.send(params);
}