"use strict";

let money = prompt("Ваши расходы за месяц", ""),
  time = prompt("Введите дату в форате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
let a1 = prompt("Введите обзательную статью расходов в этом месяце", ""),
  a2 = prompt("Во сколько обойдется?", ""),
  a3 = prompt("Введите обзательную статью расходов в этом месяце", ""),
  a4 = prompt("Во сколько обойдется?", "");
  
  appData.expenses.a1 = a2;
  appData.expenses.a3 = a4;

alert(appData.budjet / 30);
