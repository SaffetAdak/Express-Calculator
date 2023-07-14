const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let num1 = Number(req.body.num1);
    let op = req.body.op;
    let num2 = Number(req.body.num2);
    let result = 0;
    switch (op) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            result = 0;
            break;
    }

    res.send(num1 + ' ' + op + ' ' + num2 + ' = ' + result)
})

app.listen(3000, function(){
    console.log("Server is running on port 3000!");
})