
//============ spread

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25



// //===========rest


// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


///============================restructure

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: false,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? "публичном" : "закрытом";
// console.log(accessType);
// const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;


// console.log(message);

//////////////////////////////////========

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;

///////////////////////////////

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Добавим картинку обложки если её нет в объекте книги
// const {
//   title,
//   coverImage = "https://via.placeholder.com/640/480",
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/




   //////////////////////////

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"


//////////////////////////////////


// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = [500]] = rgb;

// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"



// //////////////////////////////////////////////////



// const rgb = [200, 100, 255, 111, 333, 33334, 555];

// const [, , , , ,blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"


////////////////////////////


// const numbers = [3, 4, 5, ...[3, 6, 8, 9]];
// console.log(numbers);


/////////




// const a = [1, 4, 3];
// const b = a;

// console.log(a);
// console.log(...b);


////////////////////////


// let a = 17;
// let b = a;

// console.log(a);
// console.log(b);


// a = 14;


// console.log(a);
// console.log(b);



//////////////////////////


// var v1 = '123';
// var v2 = "sdijin";
// var v3 = 'kmlklkmlkmkmkmmlkk';
// var v4 ='jnononojkmokmn'

// var obj = Object.assign({}, v1, v2, v3,
//     v4);
// // Примитивы будут обёрнуты, а null и undefined - проигнорированы.
// // Обратите внимание, что собственные перечисляемые свойства имеет только обёртка над строкой.
// console.log(obj); // { "0": "1", "1": "2", "2": "3" }


///////////


// const pion = { x: 1, y: 3 };

// const dorito = { x: 3, c: 4 };

// const tim = {  x: 0, ...dorito, z: 9,...pion,x:39,y:100 };

// console.log(tim);

// console.log(pion);


////////////////////////////


// const authors ={
//     kiwi: 7,
//     potato: 9,
//     juke: 10,
//     zim: 15
// }

// const entries = Object.entries(authors);

// for (const [name, rating] of entries) {
   
// }


//////////////////////


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Change code above this line
// console.log(lastTag);



// ///////////////////////////////


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment){
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);


/////////////////////////////////////



// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4

// // ✅ Возвращает true только для собственных свойств
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false



///////////////////////////////////////



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }


// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

// //   for (const key in object) {
// //     if (object.hasOwnProperty(key)) {
// //       propCount += 1;
// //     }
// //   }
// const keys = Object.keys(object);
//  propCount = keys.length;
//   console.log(propCount);
//   return propCount;
//   // Change code above this line
// }
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });



//////////////////////////////////


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];


// for (const book of books) {
//   // Объект книги
// //   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }


//////////////////////////////////////////



// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// for (const color of colors) {

// }

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line


/////////////////////////////////


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (let product of products) {
//     if (product.name === productName)
      
//         return product.price;
//       console.log(productName);
// }
  
//     return null;
//     console.log(null);

//   // Change code above this line
// }


////////////////////////////


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// let newArray = [];
// for (const product of products) {
//   if (product.hasOwnProperty(propName)) {
//       newArray.push(product[propName]);
    
//   }
//    console.log(newArray);
// }
 
// return newArray;
//   // Change code above this line
// }


////////////////////////////



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// for (let product of products) {
//     if (productName === product.name)
      
//   return product.price * product.quantity;
// }
// return 0 ;

//   // Пиши код выше этой строки
// }


////////////////////////////////


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   highIcon : https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg.
// }

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
  

//////////////////////////////////////


// // Change code below this line
// function calculateMeanTemperature(forecast) {
// const{ today:{ low:todayLow, high:todayHigh }, tomorrow:{ low:tomorrowLow, high: tomorrowHigh } } = forecast;
  
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }



////////////////////////////////////////////


// Change code below this line
// function add(...args) {
//   let total = 0;
//   for (const arg of args){
//     total += arg;
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }
//  add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);


/////////////////////////////////



// // Change code below this line
// function addOverNum(firstNumber,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber)
//     total += arg;
//   }
// console.log(total);
//   return total;
//   // Change code above this line
// }
// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

///////////////////////////


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
     
//       this.books.splice(this.books.indexOf(oldName), 1, newName);
      
//       return this.books;
     
  
//     // Change code above this line
//   },

// };



//////////////////////////////////////////////////
                            // доделать


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//       for (const potion of this.potions) {
//         if(potion.name === newPotion.name)
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     // const potionIndex = this.potions.indexOf(potionName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1);
      
//       for (const key in this.potions) {
//           if
//       }
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };


// Заказчица хочет чтобы каждое зелье было представлено не
// только именем, но и ценой, а в будущем может быть и другими
// характеристиками.Поэтому теперь в свойстве potions будет храниться
// массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы
// они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
//     addPotion(newPotion) - добавляет зелье newPotion(уже объект)
//  в массив в свойстве potions, но только если такого зелья еще нет
//  в инвентаре.В противном случае возвращается строка.
//     removePotion(potionName) - удаляет объект зелья с именем
// potionName из массива в свойстве potions.
//     updatePotionName(oldName, newName) - обновляет
// свойство name объекта - зелья с названием oldName на newName в массиве potions.
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.getPotions это метод объекта
// Вызов метода atTheOldToad.getPotions() для исходного объекта
// возвращает[{ name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),
//     в массиве potions последним элементом будет этот объект
// Для исходного объекта после вызова метода
// atTheOldToad.addPotion({ name: "Power potion", price: 270 }),
//     в массиве potions последним элементом будет этот объект
// Если добавляемое зелье уже есть в массиве potions,
//     метод addPotion возвращает строку с текстом из исходного кода
// Если добавляемое зелье уже есть в массиве potions,
//     метод addPotion не добавляет в него передаваемый обьект
// Для исходного объекта после вызова
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
//     массив potions не изменяется
// Для исходного объекта после вызова
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),
//     массив potions не изменяется
// Для исходного объекта вызов
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
//     возвращает строку "Error! Potion Dragon breath is already in your inventory!"
// Для исходного объекта вызов
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),
//     возвращает строку "Error! Potion Stone skin is already in your inventory!"
// Значение свойства atTheOldToad.removePotion это метод объекта
// Для исходного объекта после вызова метода
// atTheOldToad.removePotion("Dragon breath"),
//     в свойстве potions будет
// массив[{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]
// Для исходного объекта после вызова метода
// atTheOldToad.removePotion("Speed potion"),
//     в свойстве potions будет
// массив[{ name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значение свойства atTheOldToad.updatePotionName это метод объекта
// Для исходного объекта после вызова метода
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
//     в свойстве potions будет
// массив[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 },
//     { name: "Stone skin", price: 520 }]
// Для исходного объекта после вызова метода
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"),
//     в свойстве potions будет массив[{ name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 }, {
//             name: "Invulnerability potion",
//         price: 520
//     }]






 //////////////////////////////////////////////////////////





// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);


// ////////////////////////



// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Манго");



///////////////////////////////////////////



// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers [i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });



///////////////////////////////////////////


// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = (makePizza());
// const pointer =(makePizza);
// console.log(result);
// console.log(pointer);

/////////////////////////////////////////


// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
    
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     console.log(callback(pizzaName));
//   return callback(pizzaName);
// }


/////////////////////////////////////


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
// orderedItems.forEach(function(number){
//   totalPrice += number;
// })
//   // Change code above this line
//   return totalPrice;
// }


///////////////////////////////////////



// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
// numbers.forEach(function(number) {
//   if (number>value) {
//     filteredNumbers.push(number)
//   }
  
// })
//   // Change code above this line
//   return filteredNumbers;
// }


//////////////////////////////////



// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
     
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }

//   firstArray.forEach(function(number) {
//     if (secondArray.includes(number)) {
//         commonElements.push(number);
//       }
     
      
//   })
    
//      return commonElements;
// }

 
//   // Change code above this line



////////////////////////////////////



// const calculateTotalPrice = ( quantity, pricePerItem) => quantity * pricePerItem;
//   // Change code above this line


//////////////////////////////////////////


// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);


///////////////////////////////////////




// // Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   const getPrice = (item) => {
//     totalPrice += item
//   };


//     orderedItems.forEach(getPrice);
// }
// // Change code above this line



// calculateTotalPrice([12, 85, 37, 4]); //возвращает 138


/////////////////////////////////


// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }



//////////////////////////////////




// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number)=> {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
