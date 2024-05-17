// Умовні оператори

//1
// const isDay = false;

// if (isDay){
//     document.write(`Зараз світла тема`);
// } else {
//     document.write(`<body style="background-color: black;">
//     <p style="color: white;">Зараз темна тема</p></body>`);
// }

//2
// const isOnline = false 

// if (isOnline){
//     console.log(`Онлайн`);
// } else {
//     console.log(`Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет`);
// }

//3

// const sumOfProduct = +prompt('Ведіть суму покупки');
// const sale1 = 0.03;
// const sale2 = 0.05;

// let sum;

// if (sumOfProduct > 800){
//     console.log(`Ваша знижка 5% до сплати:${sumOfProduct * (1 -sale2)}`);
// } else if (sumOfProduct > 500){
//     console.log(`Ваша знижка 3%, до сплати:${sumOfProduct * (1 -sale1)}`);
// } else{
//     console.log(sumOfProduct);
// }

// switch..case

// const firtsNumber = +prompt('Введіть перше число:')
// const secondNumber = +prompt('Введіть друге число:')
// const operation = prompt(`Введіть операцію:`)

// switch (operation){
//     case '+':
//     console.log(`${firtsNumber + secondNumber}`);
//     break;
//     case '-':
//     console.log(`${firtsNumber - secondNumber}`);
//     break;
//     case '*':
//     console.log(`${firtsNumber * secondNumber}`);
//     break;
//     case '/':
//     console.log(`${firtsNumber / secondNumber}`);
//     break;
//     default:
//         console.log(`Некоректний ввід`)
// }

// 1
// const day = prompt(`Введіть номер дня тижня:`);

// switch(day) {
//     case '1':
//         console.log(`Понеділок`);
//         break;
//     case '2':
//         console.log(`Вівторок`);
//         break;
//     case '3':
//         console.log(`Середа`);
//         break;
//     case '4':
//         console.log(`Четвер`);
//         break;
//     case '5':
//         console.log(`П'ятниця`);
//         break;
//     case '6':
//         console.log(`Субота`);
//         break;
//     case '7':
//         console.log(`Неділя`);
//         break;
//     default:
//         console.log(`Дня з таким номером не існує`);
// }


// 2

// let day = prompt(`Ведіть число для розрахунку декати:`)

// if (day >= 1 && day <= 10){
//     console.log(`Перша деката`)
// } else if(day >= 11 && day <= 20){
//     console.log(`Друга деката`)
// } else if (day >= 21 && day <= 31){
//     console.log(`Третя деката`)
// } else{
//     console.log(`Помилка вводу`)
// }

// Цикли

// 1. Вивести числа від 25 до 0 (порядок зменшення).

// let firtsNumber = 25;
// let endNumber = 0;

// while(firtsNumber >= endNumber){
//     console.log(firtsNumber);
//     firtsNumber--;
// }

// Вивести числа від 10 до 50, які кратні 5.

// let firtsNumber = 10;
// const endNumber = 50;

// while (firtsNumber <= endNumber){
//     console.log(firtsNumber);
//     firtsNumber += 5; 
// }

// *Знайти суму чисел в межах від 1 до 100.

// let firtsNumber = 1;
// const endNumber = 100;

// let sum = 0;

// for ( let i = firtsNumber; i <=endNumber; i++){
//     sum = sum + i;
// }
// console.log(sum)
