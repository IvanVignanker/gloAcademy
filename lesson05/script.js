'use strict';

function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
income = 5000,
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
deposit = confirm('Есть ли у вас депозит в банке?'),
mission = 500000;

function showTypeOf (data){
    console.log(data, typeof (data));
};

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
       }
        while (!isNumber(rashod));   
        sum += rashod;    
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
            return ('У вас высокий уровень дохода');
        case 1200 > budgetDay > 600 :
            return ('У вас средний уровень дохода');
        case budgetDay < 600 :
            return ('К сожалению у вас уровень дохода ниже среднего');
        case budgetDay < 0 :
            return ('Что то пошло не так');
        case budgetDay === 0 :
            return ('Вы не умрете от голода');
    };
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(addExpenses.length);
if (targetMonth >= 0){
console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');
} else {console.log('Цель не будет достигнута');
};
console.log(budgetDay);
console.log(getStatusIncome());