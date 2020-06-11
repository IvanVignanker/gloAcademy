'use strict';

function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
income = 5000,
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
deposit = confirm('Есть ли у вас депозит в банке?'),
mission = 500000;

function start(){
    do {
        money = prompt('Ваш месячный доход?', 15000);
        
    } while (!isNumber(money));
};

start();


let expenses = [];

function getExpensesMonth (){
    let sum = 0;
    let rashod = 0;

    for (let i=0; i < 4; i++){
        expenses[i] = prompt('Введите обязательную статью расходов');
       do {
           rashod = +prompt('Во сколько это обойдется?');
            sum += rashod;
       }

        while (!isNumber(rashod));       
    };
    console.log(sum);
    console.log(expenses);
    return sum;
};

let expensesMonth = getExpensesMonth();
console.log('Расходы за месяц: ' + expensesMonth);

function getAccumulatedMonth (x, y){
    return x - y;
};
let accumulatedMonth = getAccumulatedMonth(money, expensesMonth);

function getTargetMonth (c, d){
    return Math.ceil(c / d);
};
let targetMonth = getTargetMonth(mission, accumulatedMonth);
let budgetDay = Math.floor(accumulatedMonth / 30);
function getStatusIncome(){
    switch (true){
        case budgetDay > 1200 :
            console.log('У вас высокий уровень дохода');
            break;
        case 1200 > budgetDay > 600 :
            console.log('У вас средний уровень дохода');
            break;
        case budgetDay < 600 :
            console.log('К сожалению у вас уровень дохода ниже среднего');
            break;
        case budgetDay < 0 :
            console.log('Что то пошло не так');
            break;
        case budgetDay === 0 :
            console.log('Вы не умрете от голода');
            break;
    };
};

console.log(typeof(money));
console.log(typeof(income ));
console.log(typeof(deposit));
console.log(addExpenses.length);
if (targetMonth >= 0){
console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');
} else {console.log('Цель не будет достигнута');
};
console.log(budgetDay);
console.log(getStatusIncome());