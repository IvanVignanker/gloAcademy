'use strict';

let money = +prompt('Ваш месячный доход?', 15000);
let income = 5000;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 500000;
let expenses1 = prompt('Введите обязательную статью расходов', 'flat');
let amount1 = +prompt('Во сколько это обойдется?', 7500);
let expenses2 = prompt('Введите обязательную статью расходов', 'food');
let amount2 = +prompt('Во сколько это обойдется?', 2000);


function getExpensesMonth (a, b){
    return a + b;
}
let expensesMonth = getExpensesMonth(amount1, amount2);


function getAccumulatedMonth (x, y){
    return x - y;
}
let accumulatedMonth = getAccumulatedMonth(money, expensesMonth);

function getTargetMonth (c, d){
    return Math.ceil(c / d);
}
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
}

console.log(typeof(money));
console.log(typeof(income ));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');
console.log(budgetDay);
console.log(getStatusIncome());

