const arr = [1, 3, 5 ,6 , 7, 10];

console.log(arr);

// 1 Видалити останній
const deleteLast = arr.pop();
console.log(deleteLast);
console.log(arr);

//1 початковий елемент
const delFirst = arr.shift();
console.log(delFirst);

//1 додати елемент до початку
const addFirst = arr.unshift(0);
console.log(arr);

//1 додати елемент до кінця.
const addLast = arr.push(22);
console.log(arr);

// 2 Вивести розмір масиву.
const length = arr.length;
console.log(length);

//3 Зробити копію масиву.
const arr2 = [...arr];

// 4 Вивести елементи з парними індексами.

console.log(arr)

for (let i = 0; i <li arr.length; i+=2){
    console.log(arr[i]);
}

// 5 Знайти добуток елементів масиву. 

const arr3 = [1, 2, 5];

function arrayProd (numbers){
    let prod = 1;
    for (let i = 0; i < numbers.length; i++){
     prod *= numbers[i];
    }
    return prod;
}

console.log(arrayProd(arr3));

const phones = [
    {
        id: 1,
        brand: "Apple",
        model: "iPhone 13",
        color: "Black",
        price: 799,
        RAM: "4GB"
    },
    {
        id: 2,
        brand: "Samsung",
        model: "Galaxy S21",
        color: "White",
        price: 699,
        RAM: "8GB"
    },
    {
        id: 3,
        brand: "Google",
        model: "Pixel 6",
        color: "Green",
        price: 599,
        RAM: "8GB"
    },
    {
        id: 4,
        brand: "OnePlus",
        model: "9 Pro",
        color: "Silver",
        price: 729,
        RAM: "12GB"
    },
    {
        id: 5,
        brand: "Xiaomi",
        model: "Mi 11",
        color: "Blue",
        price: 649,
        RAM: "8GB"
    },
];

document.write(`<div class="container">`);
document.write(`<ul class="list">`);

for (let i = 0; i < phones.length; i++) {
    document.write(`
        <li class="phone-item phone-${i}">
            <span class="phone-brand">${phones[i].brand}</span>
            <span class="phone-model">${phones[i].model}</span>
            <span class="phone-color">${phones[i].color}</span>
            <span class="phone-price">${phones[i].price}</span>
            <span class="phone-ram">${phones[i].RAM}</span>
        </li>
    `);
}

document.write(`</ul>`);
document.write(`</div>`);

let averagePrice = 0;
for (let i = 0; i < phones.length; i++){
    averagePrice += phones[i].price;
}
console.log(averagePrice);

// 8
const array = [0, 2, 0, 5, 6];

const noZero = array.filter(a => a > 0);
console.log(noZero);

// 9 
const array2 = [7, 918, 14, 2004, 10];

const del100 = array2.map(d => d / 100);
console.log(del100);


// 10
array2.forEach(element => {
    console.log(element ** 3);
});

//11
let index = array2.findIndex(element => element * element === 100);

if (index !== -1) {
    array2.splice(index, 1);
    console.log(`Елемент видалено. Оновлений масив: ${array2}`);
} else {
    console.log("Елементу, квадрат якого дорівнює 100, не існує в масиві.");
}

//12
const simpleNum = array2.some(el => el % 2 === 0);
console.log(simpleNum);

// 13
const minusNum = array2.some(m => m < 0);
console.log(minusNum);

function User(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
  }
  
  const users = [];
  
  for (let i = 0; i < 10; i++) {
    const user = new User(
      `Username${i}`,
      `Usersurname${i}`,
      Math.floor(Math.random() * 90),
      Math.random() < 0.5,
      `useremail${i}@gmail.com`,
      Math.random() < 0.5
    );
    users.push(user);
  }

console.table(users);

//1
const notSubscribedUsers = users.filter(u => !u.isSubscribed);
console.table(notSubscribedUsers);

//2
const getfullName = users.map(f => `${f.firstName} ${f.lastName}`);
console.table(getfullName);

//3
const schoolAgeFemaleUsers = users
  .filter(s => !s.isMale && s.age >= 6 && s.age <= 18)
  .map(s => `${s.firstName} ${s.lastName} ${s.age} ${s.isMale}`);
console.log(schoolAgeFemaleUsers);

//4
const delGmail = users.filter(g => g.email !== "useremail5@gmail.com");
console.table(delGmail);
