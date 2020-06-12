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

function showTypeOf (data){
    console.log(data, typeof (data));
};

function getExpensesMonth (a, b){
    return a + b;
};
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
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(addExpenses.length);
console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');
console.log(budgetDay);
console.log(getStatusIncome());

