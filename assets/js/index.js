// 1) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (наприклад, від 16 до 64).
// Функція приймає в якості параметра вік людини і повертає значення булевого типу.

function isWorkingAgePerson(age) {
    return age >= 16 && age <= 64 
}
console.log(isWorkingAgePerson(+prompt("Ведіть ваш вік")));

// 2) Реалізувати функцію checkMultiplicity, 
// яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку):

function checkMultiplicity(firstNumber, secondNumber){
    return (firstNumber % secondNumber) === 0;
}
console.log(checkMultiplicity(+prompt("Введіть перше число"), +prompt("Введіть друге число")));

// 3) Перевірка можливості існування трикутника.
// Реалізувати функцію, яка приймає довжини трикутника; 
// функція повертає true, якщо трикутник можливий, і false, якщо ні (див. умови існування трикутника,


function isTriangle(a, b, c){
    return a + b > c && a + c > b && b + c > a;
}
console.log(isTriangle(+prompt("Введіть а"), +prompt("Введіть b"), +prompt("Введіть c")));

// 4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла): трикутника, прямокутника (або конуса, паралелепіпеда) в залежності від переданих розмірів фігури. 
// Функція повинна повернути обчислене значення. Мінімум для однієї фігури на вибір.

function triangleArea(base, height) {
    return (base * height)/2;
}
console.log(triangleArea(3, 4));

function squareArea (sides){
    return sides * 2;
}
console.log(squareArea(2));

function rectangleArea(length, width){
    return length * width;
}
console.log(rectangleArea(2, 5));

5

function isSimple(a){
    return (((a % a === 0)&&(a % 2 != 0) && (a % 3 != 0) && (a % 4 != 0) && (a % 5 != 0)) || a ==2 || a === 3|| a == 5);
}

console.log(isSimple(+prompt("Введіть число для перевірки:")))

// 1. Створити об'єкт customer, що містить такі властивості:

const customer = {
    name: "Артем",
    surname: "Глоба",
    email: "artem@gmail.com",
    passw: "qwerty123",
    phoneNum: "077-777-77-77",
    address: {
        city: "Запоріжжя",
        street: "Шевченка",
        house: "10",
        room: "25",
    },
    getAddress: function(){
        return `${this.address.city}, ${this.address.street}, дім ${this.address.house}, квартира ${this.address.room}`;
    },
    newPhone: function(newPhonenumber){
        this.phoneNum = newPhonenumber;
    }
};

console.log(customer);

const getAddress = customer.getAddress();
console.log(getAddress);

customer.newPhone("055-444-22-33");
console.log(customer.phoneNum);


customer.isMale = true;
delete customer.address;


//1 Копія
const customerCopy1 = Object.assign({}, customer);
console.log(customerCopy1 === customer);
//2 Копія
const customerCopy2 = { ...customer };
console.log(customerCopy2 === customer);


// 2. Перебрати і вивести властивості об'єкту cat
const cat = {
    name: "Murka",
    color: "Black",
    isMale: false,
    isFurnitureDemage: true,
}
for (const key in cat) {
    console.log(key, cat[key]);
}


// 3. Створити функцію-конструктор для створення об'єктів книг з властивостями:

// автор, 
// назва, 
// рік видання, 
// видавництво (рядок або *об'єкт з властивостями місто, назва), 
// ціна.

function Books(author, title, year, publisherName, publisherCity, price) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publisher = { 
        name: publisherName, 
        city: publisherCity 
    };
    this.price = price;
};

const book = new Books("Jane Doe", "Diary of Jane", 1940, "Test Publisher", "Manchester", 120); 

console.log(book);


