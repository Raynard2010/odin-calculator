function add(a, b){
    return a + b;
}

let substract = function(a, b){
    return a - b;
}

let multiply = () =>{
    return a * b;
}

function divide(a, b){
    return a / b;
}

let calculation = "";

let displayText = document.getElementById("displayText");

function operate(btn){
    console.log("y")

    if(calculation === "") {
        return;
    }

    let emptyArray = ["", "", ""];
    let splittedCalculation = calculation.split(" ");

    emptyArray[0] = splittedCalculation[0];
    emptyArray[1] = splittedCalculation[1];
    emptyArray[2] = splittedCalculation[2];

    console.log(emptyArray);

    console.log(splittedCalculation);

    if(typeof emptyArray[2] === "undefined" || typeof emptyArray[1] === "undefined" || splittedCalculation[2] === "") {
        return;
    }

    let n1 = parseInt(splittedCalculation[0]);
    let n2 = parseInt(splittedCalculation[2]);
    let operand = splittedCalculation[1];

    let res;

    if(operand === "+") res = n1 + n2;
    else if(operand === "-") res = n1 - n2;
    else if(operand === "*") res = n1 * n2;
    else if(operand === "/"){
        if(n2 === 0){
            displayText.innerHTML = "You can't bruh";
            calculation = "";
            return;
        }
        res = Math.floor(n1 / n2);
    }

    console.log(res);

    calculation = String(res);
    displayText.innerHTML = String(res);

    if(btn === btnEq) calculation = "";
}

let lastPressedButton;

function updateDisplayAndCalculation(c, btn){
    let regexPlus = /.\s\+\s./;
    let regexMinus = /.\s\-\s./;
    let regexMul = /.\s\*\s./;
    let regexDiv = /.\s\/\s./;

    let splittedCalculation = calculation.split(" ");

    if(c === "AC") calculation = "";
    else if((lastPressedButton === btnAdd || lastPressedButton === btnSub || lastPressedButton === btnMul || lastPressedButton === btnDiv) && (btn === btnAdd || btn === btnSub || btn === btnMul || btn === btnDiv)){
        // console.log(lastPressedButton);
        
        calculation = calculation.replace(" + ", "");
        calculation = calculation.replace(" - ", "");
        calculation = calculation.replace(" * ", "");
        calculation = calculation.replace(" / ", "");

        calculation = calculation.concat(c);
    }
    else if((regexPlus.test(calculation) || regexMinus.test(calculation) || regexMul.test(calculation) || regexDiv.test(calculation)) && (btn === btnAdd || btn === btnSub || btn === btnMul || btn === btnDiv)){
        operate();
        calculation = calculation.concat(c);
    }
    else calculation = calculation.concat(c);

    displayText.innerHTML = calculation;

    lastPressedButton = btn;
}

let btn0 = document.getElementById("btn0");
btn0.addEventListener("click", () => {updateDisplayAndCalculation("0", btn0)});
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {updateDisplayAndCalculation("1", btn1)});
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {updateDisplayAndCalculation("2", btn2)});
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {updateDisplayAndCalculation("3", btn3)});
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {updateDisplayAndCalculation("4", btn4)});
let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {updateDisplayAndCalculation("5", btn5)});
let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", () => {updateDisplayAndCalculation("6", btn6)});
let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", () => {updateDisplayAndCalculation("7", btn7)});
let btn8 = document.getElementById("btn8");
btn8.addEventListener("click", () => {updateDisplayAndCalculation("8", btn8)});
let btn9 = document.getElementById("btn9");
btn9.addEventListener("click", () => {updateDisplayAndCalculation("9", btn9)});

let btnDiv = document.getElementById("btnDiv");
btnDiv.addEventListener("click", () => {updateDisplayAndCalculation(" / ", btnDiv)});
let btnMul = document.getElementById("btnMul");
btnMul.addEventListener("click", () => {updateDisplayAndCalculation(" * ", btnMul)});
let btnSub = document.getElementById("btnSub");
btnSub.addEventListener("click", () => {updateDisplayAndCalculation(" - ", btnSub)});
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", () => {updateDisplayAndCalculation(" + ", btnAdd)});

let acBtn = document.getElementById("acBtn");
acBtn.addEventListener("click", () => {updateDisplayAndCalculation("AC")})

let btnEq = document.getElementById("btnEq");
btnEq.addEventListener("click", () => {operate(btnEq); lastPressedButton = btnEq;});

document.addEventListener("keydown", (event) =>{
    let keyPressed = event.key;

    if(keyPressed === "0") updateDisplayAndCalculation("0", btn0);
    else if(keyPressed === "1") updateDisplayAndCalculation("1", btn1);
    else if(keyPressed === "2") updateDisplayAndCalculation("2", btn2);
    else if(keyPressed === "3") updateDisplayAndCalculation("3", btn3);
    else if(keyPressed === "4") updateDisplayAndCalculation("4", btn4);
    else if(keyPressed === "5") updateDisplayAndCalculation("5", btn5);
    else if(keyPressed === "6") updateDisplayAndCalculation("6", btn6);
    else if(keyPressed === "7") updateDisplayAndCalculation("7", btn7);
    else if(keyPressed === "8") updateDisplayAndCalculation("8", btn8);
    else if(keyPressed === "9") updateDisplayAndCalculation("9", btn9);
    else if(keyPressed === "+") updateDisplayAndCalculation(" + ", btnAdd);
    else if(keyPressed === "-") updateDisplayAndCalculation(" - ", btnSub);
    else if(keyPressed === "*") updateDisplayAndCalculation(" * ", btnMul);
    else if(keyPressed === "/") updateDisplayAndCalculation(" / ", btnDiv);
    else if(keyPressed === "=" ){
        operate(); 
        lastPressedButton = btnEq;
    }

}

)