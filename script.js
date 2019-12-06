"use strict";
let money, time;

function start() {
  money = +prompt("Ваши расходы за месяц", "");
  time = prompt("Введите дату в форате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваши расходы за месяц", "");
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обзательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      appData.expenses[a] = b;
    } else {
      i = i - 1;
    }
  }
}
chooseExpenses();
appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("миниамльный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова суа накоплений?"),
        percent = +prompt("под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("доход в месяц с вашего депозита: " +appData.monthIncome);
  }
}
checkSavings();