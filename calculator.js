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


app.get("/bmiCalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req,res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight / ((height/100)**2);
    bmi =bmi.toFixed(1);

    if (bmi < 18.5){
        res.send("Your BMI is " + bmi + " and you are underweight");
    }
    else if (bmi >=18.5 & bmi <= 24.9 ){
        res.send("Your BMI is " + bmi + " and you are healthy");
    }
    else if (bmi >=25 & bmi <= 29.9 ){
        res.send("Your BMI is " + bmi + " and you are overweight");
    }
    else if (bmi >= 30){
        res.send("Your BMI is " + bmi + " and you are obese");
    }
})

app.listen(3000, function(){
    console.log("Server is running on port 3000!");
})