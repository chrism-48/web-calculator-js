const clrButton = document.getElementById('clear');
clrButton.addEventListener('click', function() {
    let windowClear = document.getElementById('window');
    windowClear.innerText = '';
})

const back = document.querySelector('body')
    // const myValue = document.querySelectorAll('.buttons');
const myWindow = document.getElementById('window');

const lightSwitch = document.querySelector('.btnbox');
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");

button1.addEventListener("click", changeBackgroundLight);
button2.addEventListener("click", changeBackgroundDark);

function changeBackgroundLight() {
    back.style.backgroundColor = "white";
    lightSwitch.style.color = 'black';

}

function changeBackgroundDark() {
    back.style.backgroundColor = "black";
    lightSwitch.style.color = 'white';
}

var plusNum = false;
var minusNum = false;
var multiplyNum = false;
var divideNum = false;

var multiplication = document.getElementById('multiply')
var division = document.getElementById('divide')


const buttons = document.querySelectorAll('.buttons');
const buttonsTwo = document.querySelectorAll('.buttons');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const myValues = buttons[i].value;
        myWindow.innerText = myWindow.innerText + myValues;

        if (buttons[i].value === 'C') {
            myWindow.value = null;
            myWindow.innerHTML = '';
        }



        // adding number functions here:-----------------------------------

        if (buttons[i].value === '+') {
            myNum = myWindow.innerText.slice(0, -1);
            console.log(`first value is ${myNum}`);
            myWindow.innerHTML = '';
            plusNum = true;
            secondNum();

        }

        if (buttons[i].value == '=' && plusNum === true) {
            myNumTwo = myWindow.innerText.slice(0, -1);
            console.log(`second value is ${myNumTwo}`);
            myWindow.innerHTML = '';
            // myNum = myWindow.innerText.slice(0, -1);
            console.log(parseFloat(myNum) + parseFloat(myNumTwo));
            myAnswer = parseFloat(myNum) + parseFloat(myNumTwo);
            myWindow.innerText = myAnswer;
            plusNum = false;
        }

        //------------------------------------------------------------------



        // subtracting number functions here:-----------------------------------

        if (buttons[i].value === '-') {
            myNum = myWindow.innerText.slice(0, -1);
            console.log(`first value is ${myNum}`);
            myWindow.innerHTML = '';
            minusNum = true;
            secondNum();

        }

        if (buttons[i].value == '=' && minusNum === true) {
            myNumTwo = myWindow.innerText.slice(0, -1);
            console.log(`second value is ${myNumTwo}`);
            myWindow.innerHTML = '';
            // myNum = myWindow.innerText.slice(0, -1);
            console.log(parseFloat(myNum) - parseFloat(myNumTwo));
            myAnswer = parseFloat(myNum) - parseFloat(myNumTwo);
            myWindow.innerText = myAnswer;
            minusNum = false;
        }

        //------------------------------------------------------------------



        // multiplying number functions here:-----------------------------------

        if (buttons[i].value == 'x') {
            console.log("Hello")
            console.log(buttons[i].value);
            myNum = myWindow.innerText.slice(0, -1);
            console.log(`first value is ${myNum}`);
            myWindow.innerHTML = '';
            multiplyNum = true;
            secondNum();

        }

        if (buttons[i].value == '=' && multiplyNum === true) {
            myNumTwo = myWindow.innerText.slice(0, -1);
            console.log(`second value is ${myNumTwo}`);
            myWindow.innerHTML = '';
            // myNum = myWindow.innerText.slice(0, -1);
            console.log(parseFloat(myNum) * parseFloat(myNumTwo));
            myAnswer = parseFloat(myNum) * parseFloat(myNumTwo);
            myWindow.innerText = myAnswer;
            multiplyNum = false;
        }










        //------------------------------------------------------------------








        if (buttons[i].value === '&#247;') { // '&#247;' = divide
            myWindow.innerHTML = '';

        }











    })
}




// function to get the second number of calculation: -------------------------

function secondNum() {
    for (let i = 0; i < buttonsTwo.length; i++) {
        buttonsTwo[i].addEventListener('click', function() {
            const myValuesTwo = buttonsTwo[i].value;
            //myWindow.innerText = myWindow.innerText + myValuesTwo;
        })
    }
}

//-----------------------------------------------------------------------------