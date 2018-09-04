


$( document ).ready(function() {
const diceUTF = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];

let diceArray = [];
let icon = [];
diceUTF.forEach(code => {
    icon.push(String.fromCodePoint(code.substring(2, 6)));
});


class Dice {
    constructor() {
        this.value;
        this.$dice = $(`<div class="dice"></div>`).appendTo('.dice-container');
        this.roll();
        this.$dice.css('color', randomColor());
        this.$dice.on('click', () => this.roll());
        this.$dice.on('dblclick', () => {
        this.$dice.remove();
        diceArray = diceArray.filter(otherDie => this !== otherDie);
    });
    }



    roll() {
        let diceVal = Math.ceil(Math.random() * 6);
        this.value = diceVal;
        this.$dice = this.$dice.html(diceUTF[this.value - 1]);
    }

}


let $genButton = $('#genBtn');
$genButton.on('click', (e) => {
    e.preventDefault();
    generateDice();
});

let $rollButton = $('#rollBtn');
$rollButton.on('click', (e) => {
    e.preventDefault();
    rollDice();
});

let $sumButton = $('#sumBtn');
$sumButton.on('click', (e) => {
    e.preventDefault();
    sumDice();
});



function generateDice() {
    let die = new Dice();
    diceArray.push(die);
}

function rollDice() {
    for (let die of diceArray) {
        die.roll();
    }
}

function sumDice() {
    let sum = 0;
    diceArray.forEach(die => sum += die.value);
    alert(`\t(${icon[0]},${icon[1]},${icon[2]},${icon[3]},${icon[4]},${icon[5]}) \n The sum of all dice is ${sum}`);
    
}


function randomColor() {
    let [red, green, blue] = [Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255), Math.ceil(Math.random() * 255)];
    return `rgb(${red},${green},${blue})`;
}



// Debugging Script: 
/*let p1 = new Dice();
setTimeout(p1.roll(),2000);
console.log(`value: ${p1.value}\n dice text ${p1.$dice.text()}\n dice code ${p1.$dice.text().codePointAt(0)}`);
setTimeout(p1.roll(),1000)
console.log(`value: ${p1.value}\n dice text ${p1.$dice.text()}\n dice code ${p1.$dice.text().codePointAt(0)}`);

*/

});