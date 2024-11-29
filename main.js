function sumNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += Number(arguments[i]);
    }
    return sum;
}

function printTrigValues(value) {
    let radian = value * (Math.PI / 180); // Convert to radians
    console.log("sin(" + value + "°) = " + Math.sin(radian));
    console.log("cos(" + value + "°) = " + Math.cos(radian));
    console.log("tan(" + value + "°) = " + Math.tan(radian));
}

function execute() {
    let numbers = document.getElementById('numbers').value.split(',').map(Number);
    let sum = sumNumbers(...numbers);
    document.getElementById('sumResult').innerText = 'Sum: ' + sum;

    let angle = document.getElementById('angle').value;
    printTrigValues(Number(angle));
}