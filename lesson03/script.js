'use strict';

let money = prompt('Ваш месячный доход?');
let income = 5000;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 500000;
let period = 3;

let expenses1 = prompt('Введите обязательную статью расходов');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt('Во сколько это обойдется?');
let budgetMonth = +money - +amount1 - +amount2
let budgetDay = Math.floor(budgetMonth / 30);
let missionTime = Math.ceil(mission / budgetMonth);

console.log(typeof(money));
console.log(typeof(income ));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log("Период равен " + period +" месяцев");
console.log("Цель заработать " + mission + " шекелей.");
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetMonth);
console.log(budgetDay);
console.log('Цель будет достигнута за ' + missionTime + ' месяцев');

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
}

// if (budgetDay > 1200) {
//     console.log('У вас высокий уровень дохода');
// } esle if (budgetDay < 600) {
//     console.log('К сожалению у вас уровень дохода ниже среднего');
// }
// else if (budgetDay < 0) {
//     console.log('Что то пошло не так');
// } else {
//     console.log('У вас средний уровень дохода');
// }
