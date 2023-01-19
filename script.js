
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

//////////////////////////////////////





////////////////////////////////////



// const planets = ["Земля", "Марс", "Венера", "Юпитер"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// // Оригинальный массив не изменился
// console.log(planets);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names);


// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses)


////////////////////////////////////////


// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32


// const someNumbers = [1, 2, 4, 5, 6, 6, 7, 9].reduce((previousValue, number) => {
//     return previousValue / number;
// });
// console.log(someNumbers);


/////////////////////////////////////////


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));


/////////////////////////////////


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

/////////////////////////



// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArr = [];

    
//     numbers.forEach(number => {
//         if (number % 2 === 0)
//             number = number + value;
//         newArr.push(number);
      
//     });
//     console.log(newArr);
//     console.log(numbers);
//   // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10);
//  changeEven([2, 8, 3, 7, 4, 6], 10);

//////////////////////////

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => {return planet.length});
// console.log(planetsLengths);


/////////////////////////////////


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
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);


/////////////////////////


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);


///////////////////////////////


// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];


// const getUserNames = users => users.map(user => user.name);
// console.log(getUserNames);
// console.log(users.name);


//////////////////////////////////////

// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserEmails = users => users.map(user => user.email);


// console.log(getUserEmails);


//////////////////////////////////////////////////



// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers);


///////////////////////////////////////////////////



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);

// console.log(allGenres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
// console.log(uniqueGenres);



// //////////////////////////////////////////////////

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
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating > MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(booksByAuthor);

///////////////////////////////////


// const getUsersWithAge = (users, minAge, maxAge) => {return users.filter(user => user.age >= minAge && user.age <= maxAge) };
// // Change code above this line

/////////////////////////////////


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// Change code below this line
// const time = Object.values(playtime);
// const game = Object.values(gamesPlayed);
// const totalAveragePlaytimePerGame = players.reduce((total, player) => {return Object.values(player.playtime)/Object.values(player.gamesPlayed)}) ;
// console.log(totalAveragePlaytimePerGame);

//////////////////////////////////

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, player)=>{return previousValue + player});

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => { return  total + player.playtime / player.gamesPlayed},0);
// console.log(totalAveragePlaytimePerGame);


//////////////////////////////////////


// Потрібно написати функцію, яка приймає 1 параметр key і буде перевіряти
// чи має об'єкт  такий ключ - поверне true, інакше false

// const obj = {
//   name: 'Jhon',
//   car:  'Audi',
//   carColor: 'White'
// }

// const checkFn = (key) => {
//     // return obj.hasOwnProperty(key)
//     // return Object.keys(obj).includes(key);
//     // return key in obj
// };


// console.log(checkFn('name'));
// console.log(checkFn('knkn'));


//////////////////////////////////////////////



// Напишіть функцію для перевірки об'єкта,
// Чи є елемент простим об'єктом,
// чи масивом, null.

// const checkTypes = (value) => {
//     if (Array.isArray(value)) {
//         return "Array";
//     } else if (value === null) {
//         return "null";
//     }
       
//     return typeof (value)
// };

// console.log(checkTypes(1));
// console.log(checkTypes('bhj'));
// console.log(checkTypes(true));
// console.log(checkTypes(undefined));
// console.log(checkTypes({}));
// console.log(checkTypes([]));
// console.log(checkTypes(null));




///////////////////////////////////////////////////



// Створіть функцію multiplyNumeric(obj),
//   яка множить всі числові властивості об'єкта obj на 2.

// до  виклику функції


// multiplyNumeric(menu);

// // після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// const multiplyNumeric = obj => {
//     for (let key in obj) {
//         console.log(key);
//         console.log(obj[key]);
//         if (typeof obj[key] === `Number`) {
//             obj[key] *= 2;
//         }
//     }
//     return obj;
// }
// multiplyNumeric(menu);


//////////////////////////////////


//У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 570,
//   Poly: 900,
//   Ajax: 1470,
// };

 
// const calculateSalary = (salaries) => {
//     let totalSalary = 0;
//     // for (let key in salaries) {
//     //     totalSalary += salaries[key];
//     // }
//     // return totalSalary;
    
//  const salaries = {
//   Mango: 570,
//   Poly: 900,
//   Ajax: 1470,
// };

// const calcSalaries = (salaries) => {
//   // let totalSalarie = 0;
//   // for (let key in salaries) {
//   //   totalSalarie += salaries[key];
//   // }
//   // return totalSalarie;
// return Object.values(salaries).reduce((totalSalarie, item) => totalSalarie + item,0)

// }

// console.log(calcSalaries(salaries))


//     console.log(totalSalary);

    //Напишіть функцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//рядок з назвою каменю.
//Функція повертає загальну вартість каміння
//з таким ім'ям

// const stones = [
//   { name: "Emerald", price: 1300, quantity: 4 },
//   { name: "Diamond", price: 2700, quantity: 6 },
//   { name: "Sapphire", price: 400, quantity: 7 },
//   { name: "Rubble", price: 150, quantity: 100 },
// ];


// const calcTotalPrice = (stones, stonesName) => {
//     const activeStone = stones.find(stone => stone.name === stonesName);
//     if (activeStone) {
//         const { price, quantity } = activeStone;
//         return price * quantity;
        
//     } else {
//         return `not found`;
//     }
    
// }
 


// console.log(calcTotalPrice(stones, "Diamond"))
// const result = calcTotalPrice(stones, "Gold");
// console.log(result);



///////////////////////////////////////////////////



// Напишіть функцію sumInput(), яка:
// Просить користувача ввести значення, використовуючи prompt та зберігає їх у масив.
// Закінчує запитувати значення, коли користувач введе не числове значення, порожній рядок або натисне «Скасувати».
// Підраховує та повертає суму елементів масиву.
//  P.S. Нуль 0 – вважається числом, не зупиняйте введення значень під час введення «0».
//новий об'єкт без зазначеного параметра
//Очікуваний результат ({a: 1. b: 2}, 'b') => {a: 1}
 

// const updateObject = (obj, removeKey) => {
//     const newObject = { ...obj };
//     delete newObj[removeKey];
//     return newObject;
// }

// const object = {
//     name: "gold",
//     price: 444,
//     carat: 33,

// }

// console.log(updateObject(obj, 'carat'));
// console.log(obj)


////////////////////////////////////////////////////////////////



// Напишіть функцію sumInput(), яка:
// Просить користувача ввести значення, використовуючи prompt
// та зберігає їх у масив.
// Закінчує запитувати значення, коли користувач введе
//  не числове значення, порожній рядок або натисне «Скасувати».
// Підраховує та повертає суму елементів масиву.
//  P.S. Нуль 0 – вважається числом, не зупиняйте введення
// значень під час введення «0».


// const sumInput = () => {
//     const numbers = [];

//     while (true) {
//         const value = prompt(`enter number`);
//         const number = Number(value);
//         console.log(isFinite(value));
//         if (value === null ||value.trim()===""|| !isFinite(value)) {
//           break;
//         }
//           numbers.push(number);
//     }
   
//     console.log(numbers);
//     return numbers.reduce((acc, number) => acc + number, 0);
// }
// sumInput();

// console.log(sumInput());


/////////////////////////////////////////////////////////////



// Напишіть код, щоб видалити всі елементи в заданому масиві
// Функція `deleteElement()` видаляє всі входження елемента із заданого масиву.



// let arr = [23,56,4,78,5,63,45,210,56];
// // arr = deleteElement(arr, 56)
// console.log(arr); //[23, 4, 78, 5, 63, 45, 210]


// const deleteElement = (arr, removeEl, replaceEl) => {
//     // for (let i = 0; i < arr.length; i += 1){
//     //     if (arr[i] === removeEl);
//     //     arr.splice(i, 1, rep);
//     // }

//     return arr.filter(el => el !== removeEl);
// }
// console.log(deleteElement(arr, 56,1));
// console.log(arr);


//////////////////////////////////////////////////////////////////



// Напишіть метод, який розбиває масив на частини визначеного розміру
// const data = [1, 2, 3, 4, 5, 6, 7];
// const chunkArray = (array, divider) => {
//     let index = 0;
//     const newArray = [];
//     while (index < array.length) {
//         const chunk = array.slice(index, divider + index);
//         newArray.push(chunk);
//         index += divider;
//     }
//     return newArray
// }








// console.log(chunkArray(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunkArray(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]



///////////////////////////////////////

// Напишіть метод, який розбиває масив на частини визначеного розміру



// const data = [1, 2, 3, 4, 5, 6, 7];

// const chunkArray = (array, devider) => {
//   let index = 0;
//   const newArrey = [];
//   while (index < array.length)

//   {
//     const chunk = array.slice(index, devider + index)
//     newArrey.push(chunk);
//     index += devider;
//   }
//   return newArrey
// }












// console.log(chunkArray(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunkArray(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]


///////////////////////////////////////////


// Потрібно зробити кожний перший символ в рядку з великої літери
// let strings = ["торт", "шоколад", "кекс", "сир",
//   "бутерброд", "масло", "жиле", "каша", "олія"
// ];

// const firstLetterToUpperCase = (array) => {
//     return array.map(str => `${str[0].toUpperCase()}${str.slice(1)}`)
// }

// console.log(firstLetterToUpperCase(strings));



/////////////////////////////////


// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );


// ///////////////////////////////////

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
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// console.log(sortedByAuthorName);
// const sortedByReversedAuthorName =[...books].sort((a, b) => b.author.localeCompare(a.author));
// console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByDescentingRating);



//   //////////////////////////////////////////////


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
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .sort((a, b) =>a.author.localeCompare(b.author))
//   .map(book => book.author);
  
// console.log(names);


////////////////////////////////////////////

// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
//   ]

// const getUserOnline = users.filter(({ isActive }) => isActive);
// console.log(getUserOnline);

// const getUserOffline = users.filter(({ isActive }) => !isActive);

// console.log(getUserOffline);
// const colorOfEyesBrown = "brown";

// const userEyeColorBrown = users.filter(user => user.eyeColor = colorOfEyesBrown);

// console.table(userEyeColorBrown);
// const getNamesSortedByFriendCount = users =>
//   [...users].sort((a, b) => a.friends.length - b.friends.length)
      
   
// ;
// console.log(getNamesSortedByFriendCount(users));



//////////////////////////////////////////////////////////



// const numbers = [1, 53, 4, 35, 6, 7, 47, 8];


// const getBiggestNumber = numbers.filter(number =>
//   numbers[4] < number)||numbers[7]> number;
// console.log(`bigger numbers:`, getBiggestNumber);


///////////////////////////////////////////////////////



/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0,
// );
// // console.log(totalSalary);

// /*
//  * Считаем общее количество часов
//  */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );

// console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0,
// );

// console.log(totalAmount);

// /*
//  * Собираем все теги из твитов
//  */
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// // console.log(allTags);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

/*
 * Ведём статистику тегов
 */
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
// console.log(tagsStats);

// // если свойство с ключом tag есть. увеличить его значение на 1
// // если свойствоства нет с таким ключом что в tag, сделать и записать 1


// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Поли",
// };

// greetGuest.apply(mango, ["Добро пожаловать"]); // Добро пожаловать, Манго.
// greetGuest.apply(poly, ["С приездом"]); // С приездом, Поли.



///////////////////////////////////////////


// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,

//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;

//   },
// };
// console.log(employee.baseSalary + employee.overtime * employee.rate);
// employee.getWage();



//////////////////////////////////////////////



// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true



/////////////////////////////////////


// class User {
//   // Тело класса
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();


////////////////////////////////////////////



// class User {
//   // Синтаксис объявления метода класса
//   constructor(name, email, adress) {
//     // Инициализация свойств экземпляра
//     this.email = email;
//     this.name = name;
//     this.adress = adress;
  
//   }
// }

// const mango = new User("Манго", "mango@mail.com", "343 avenue NW");
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User("Поли", "poly@mail.com", "5th street");
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// const jule = new User("Jule", "jule@mail.com");
// console.log(jule); // { name: 'Поли', email: 'poly@mail.com' }

// console.log(User);



///////////////////////////////////////////////


// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));


 ///////////////////////////////////////



// const objC = {
//   c : 4,
// }
 
// console.log(objC);
// console.log(objC.hasOwnProperty('c'));


//////////////////////////////////////////


// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order (pizzaName) {
//     const isPizzaAvailable = checkPizza(this.pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };


///////////////////////////////////////////////


// class StringBuilder {
//   constructor(initialValue){
//     this.value = initialValue;
//   }
//   getValue() {
//   return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }
//   padStart(str) {
//     this.value = str + this.value
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

  


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



////////////////////////////////////////////////////


// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.email); // Будет ошибка, это приватное свойство


/////////////////////////////////////////////////////




// class Storage {
//   // Change code below this line
// #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]



// class Car {
//   // Change code below this line
//   static Price = {
//     MAX_PRICE: 50000
//   }
//   #price;
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice <= this.MAX_PRICE;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


/////////////////////////////////////////////////////////


// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//     static checkPrice(price) {
//     if (price > this.#MAX_PRICE){
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
    
//   }
  

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


////////////////////////////////////////////


                          //  почему ошибка


// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//    this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тело класса ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"


//////////////////////////////////////////////////////


// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Вызов конструктора родительского класса User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'


////////////////////////////////////////////////////////////




// Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize(str, callback), яка перетворює рядки «my-short-string» на «myShortString».
//
// Тобто дефіси віддаляються, а всі слова після них отримують велику букву.
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';


///////////////////////////////////////////////////////////////////

// function camelize(str, callback) {
//   return str
//     .split("-")
//     .map((item, index) => (index === 0 ? item : callback(item)))
//     .join("");
// }
// console.log(camelize("background-color", toUpperFirstLetter));
// console.log(camelize("list-style-image", toUpperFirstLetter));
// console.log(camelize("-webkit-transition", toUpperFirstLetter));

// function toUpperFirstLetter(str) {
//   return str[0].toUpperCase() + `${str.slice(1)}`;
// }


////////////////////////////////////////////////////////


// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2



//////////////////////////////////////////////////////


// function each(array, callback) {
//   const resultArr = [];
//   for (let i = 0; i < array.length; i++) {
//     const newItem = callback(array[i]);
//     resultArr.push(newItem);
//   }
//   return resultArr;
// }

// console.log(each([1,2,3], (num) => num*2));


/////////////////////////////////////////////


// Напишіть дві функції
  // makeProduct(назва, ціна, callback) - приймає
  // ім`я і ціну товару, а також функцію callback.
  // Функція створює об'єкт товару, додає йому унікальний
  // ідентифікатор у властивості id і викликає зворотний виклик
  // передаючи йому створений об’єкт.
  // showProduct(product) - callback приймає об'єкт
  // продукта і виводить його в консоль



// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Date.now()
    
//   }
//   callback(product)

// }



// function showProduct(product) {
//   console.log(product);
// }


// makeProduct("shampoo", 33, showProduct);




////////////////////////////////////////////////////



// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

   

// better way


// function makeShef(shefName) {
//   return function makeDish(dish) {
//      console.log(`${shefName} is cooking ${dish}`);
//   }
// }

// const mango = makeShef("Mango");
// mango("apple pie");
// mango("fish");

// const Polly = makeShef("Polly");
// Polly("tort");

// makeShef("Alex")("meet");


// ///////////////////////////////////////////////////////


// Напишіть функцію makeCounter, яка повертає об'єкт із такими методами
// increment - збільшує counter на 1
// decrement - зменшує counter на 1
// getValue - повертає значення counter



// function makeCounter() {
//   let counter = 0;
//   return {
//     increment: () => counter += 1,
    
//     decrement: () => counter -= 1,

//     getValue: () => counter,

//   }
// }

// const counter = makeCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// counter.decrement();
// counter.decrement();

// console.log(counter.getValue());


////////////////////////////////////////////////////


//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.

// function saveDiscount(discount) {
//   return function makeDiscount(sum) {
//     return sum - sum * (discount / 100);
//   }
// }

// const premium = saveDiscount(50);
// const season = saveDiscount(30);
// const current = saveDiscount(10);

// console.log(premium(1500));
// console.log(season(900));
// console.log(current(650));

//////////////////////////////////


//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається


// function savePassword(password) {
//   return function (userPassword) {
//     return password === userPassword;
//   }
// }

// const checkPassword = savePassword("mypass");

// console.log(checkPassword);

// console.log(checkPassword("notmypass"));

// console.log(checkPassword("mypass"));


/////////////////////////////////////////////////////////


// Виправте помилки, щоб код працював
// const jeans = {
//   price: 500,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// jeans.showPrice();


// const phone = {
//   price: 1000,
// };

// phone.showPrice = jeans.showPrice;

// phone.showPrice();


////////////////////////////////////


// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product));


///////////////////////////////////////////////


// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice);
// // Зробіть так, щоб код працював

// const user = {
//   name: 'Jhon',
//   showName() {
//     console.log(this.name);
//   }
// }

// setTimeout(user.showName.bind(user), 1000)


//////////////////////////////////////////////////////////


// Потрібно викликати функцію showPrice так, щоб this вказував на об'єкт laptop

// function showPrice(number) {
//   console.log(this.price);
// }

// const laptop = {
//   price: 1500
// }


// showPrice.call(laptop, 1);
// showPrice.apply(laptop, [1]);




/////////////////////////////

// // Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product));

// // Зробіть так, щоб код працював

// const user = {
//   name: "Jhon",
//   showName() {
//     console.log(this.name);
//   },
// };

// setTimeout(user.showName.bind(user), 1000);

// // Потрібно викликати функцію showPrice так, щоб this вказував на об'єкт laptop

// function showPrice(number) {
//   console.log(number);
//   console.log(this.price);
// }

// const laptop = {
//   price: 1500,
// };

// showPrice.call(laptop, 1);
// showPrice.apply(laptop, [1]);


/////////////////////////////////////////////


// Даний об'єкт counter. Напишіть до нього getter та setter
// const counter = {
//   _count: 3,

//   get count() {
//     return this._count
//   },

//   set count(num) {
//     return this._count = num

//   },
// }


// console.log(counter._count);

// counter._count = 4;

// console.log(counter._count);


//////////////////////////////////////////////


// Напиши клас Client який створює об'єкт
//з властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email



// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;

//   }
//   get login() {
//     return this.#login;
//   }

//   set login(newValue) {
//     this.#login = newValue;
//   }
// }

// const user = new Client("melogin", "mymail@yahoo.com");

// console.log(user.login);
// user.login = "newLogin";

// console.log(user.login);



////////////////////////////////////////////////////////////////










// // Напиши скрипт управління особистим кабінетом інтернет банку
// //Є об'єкт account у якому необхідно реалізувати
// //методи для роботи з балансом та історією транзакцій

// // Типів транзакцій лише два.
// // Можна покласти або зняти гроші з рахунку
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// //Кожна транзакція це об'єкт з властивостямиЖ id, type, amount

// const account = {
//   //поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   //Метод створює та повертає об'єкт транзакцій
//   //Приймає суму та тип транзакцій
//   createTransaction(type, amount) {
//     return {
//       type,
//       amount,
//       id: Date.now(),
//       date: new Date(),
//     };
//   },

//   //Метод відповідає за додавання суми до балансу.
//   //Приймає суму транкціонації.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   deposit(amount) {
//     const newOperation = this.createTransaction(Transaction.DEPOSIT, amount);
//     this.transactions.push(newOperation);
//     this.balance += amount;
//   },

  
//   //Метод відповідає за зняття суми з балансу.
//   //Приймає суму транкціонації.
//   //Викликає createTransaction для створення об'єкта транзакції
//   //після чого додає їх у історію транзакцій
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//   //що недостатньо коштів на рахунку
//   withdraw(amount) {},


//   //Метод повертає поточний баланс
//   getBalance() {},

//   //Метод шукає та повертає об'єкт транзакції по id
//   getTransactionDetails(id) {},

//   //Метод повертає кількість засобів певного типу
//   //транзакції з історії транзакцій
//   getTransactionType(type) {},
// };


// account.deposit(1000);
// console.log(account);


//////////////////////////////////////////////////////

//Створіть об'єкт calculator із такими методами
//read() - зчитує через promp чило, оператор та наустпне число
//як властивості об'єкта
//sum() повертає суму збережених значень
//min() повертає різницю збережених значень
//mult() перемножує збережені значення та повертає результат
//div() ділить збережені значення та повертає результат

// const calculator = {
//   read() {},
//   sum() {},
//   min() {},
//   mult() {},
//   div() {},
// parseString(originalString) {
//     const [firstOperand, operator, secondOperand ] = originalString.replaceAll(" ", "").split(/(\D)/);
//
//     return {
//       firstOperand,
//       secondOperand,
//       operator,
//     };
//   }
// };



////////////////////////////////////////////////////////



// const calculator = {
//   read() {
//     const input = prompt("Enter number, operator, number");
//     const parsetInput = this.parseString(input);
//     console.log(parsetInput);

//     console.log(this.calculate(parsetInput));
//   },
//   sum(a, b) {
//     return Number(a) + Number(b);
//   },
//   min() {},
//   mult() {},
//   div() {},
//   parseString(originalString) {
//     const [firstOperand, operator, secondOperand] = originalString
//       .replaceAll(" ", "")
//       .split(/(\D)/);

//     return {
//       firstOperand,
//       secondOperand,
//       operator,
//     };
//   },

//   calculate(parsetInput) {
//     const { firstOperand, operator, secondOperand } = parsetInput;
//     switch (operator) {
//       case "+":
//         return this.sum(firstOperand, secondOperand);
//     }
//   },
// };

// calculator.read();


////////////////////////////////



// const profile = {
//   name: "mango",
//   age: 34,
// }


// const profileUpdate = {
//   name: "john",
// }

// const updateProfile = { ...profile, ...profileUpdate };

// console.log(updateProfile.name);

// console.log(profile);



// function foo({ a, b, c, ...props }) {

//   console.log(props);
// }



// const mmm = foo({ a: 1, b: 2, c: 3, d: 4, e: 5 });;
// console.log({mmm});


// ////////////////////////////






//* Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному 
//порядку за першою літерою елемента.

// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// const langsSorted = langs.sort();
// console.log("🚀 ~ langsSorted", langsSorted);

// for (const i in langs) {
//   let wasSwap = false;
//   for (let j = 0; j < langs.length - 1 - i; j++) {
//     if (langs[j].charCodeAt(0) > langs[j + 1].charCodeAt(0)) {
//       const swap = langs[j];
//       langs[j] = langs[j + 1];
//       langs[j + 1] = swap;
//       wasSwap = true;
//     }
//     if (!wasSwap) break;
//   }
// }

// console.log(langs);

//! ============

// const arr = ["first", "second"];

// console.log(arr);

// const swap = arr[0]; // "first"
// arr[0] = arr[1]; // ["second", "second"]
// arr[1] = swap; //  ["second", "first"]

// console.log(arr);

//! ============
 // як перебрати обєкт через for in в масив

// const apartment = [{
//   descr: "Spacious apartment in the city center",
//   rating: 1,
//   price: 2153,
// },
// {
//   descr: "Spacious apartment in the city center",
//   rating: 2,
//   price: 2153,
//   },
// {
//   descr: "Spacious apartment in the city center",
//   rating: 3,
//   price: 2153,
//   something: {
//     hhh: "pop",
//     ggg:99,
//   }
//   },
// {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// }]
// let newArr = [];
// apartment.forEach(function foo(element,index) {
//   console.log(Object.keys(element));
//   console.log(Object.values(element));
  //  if (element.hasOwnProperty("something")) {
  //   console.log(element);  
  //   console.log(element.something)
  // }  

  // console.log(element.hasOwnProperty(element.something));

// })

// for (const element of apartment) {
  // if (element.hasOwnProperty("something")) {
  //   console.log(element);  
  //   console.log(element.something)
  // }  
// }














// const keyArr = [];
// const valueArr = [];

// for (const key in apartment) {

//   valueArr.push(apartment[key]);
//   keyArr.push(key);  

// }

//   console.log(valueArr);
//     console.log(keyArr);




















// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys, values);

//! ============

// * Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() та for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// console.log(Object.keys(user));

// const keysFormat = Object.keys(user);

// for (const key of keysFormat) {
//   console.log(`${key}: ${user[key]}`);
// }













// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// // console.table(user);

// const userKeys = Object.keys(user);
// console.log("🚀 ~ userKeys", userKeys);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

//! ============

// * Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати 
// нашої команди.Напишіть код для підсумовування 
// всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390. Якщо об'єкт salaries порожній, 
// то результат має бути 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let totalWage = 0;
// const salariesSum = Object.values(salaries);

// salariesSum.forEach(function foo(nameWage) { 
//   totalWage+=nameWage;
// })

// // for (const oneSalery of salariesSum) {
// //   totalWage += oneSalery; 
// // }
// console.log(totalWage);














// const salariesArr = Object.values(salaries);

// let sum = 0;

// for (const salary of salariesArr) {
//   sum += salary;
// }

// console.log(sum);

//! ============

// * Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), 
// яка приймає масив об'єктів та рядок з назвою каменю. 
// Функція рахує і повертає загальну вартість каміння з таким
//  ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// console.log(calcTotalPrice(stones, "Діамант"));
// console.log(calcTotalPrice(stones, "Щебінь"));

// function calcTotalPrice(stones, stoneName) {
//   // 1. створити змінну, куди ми будемо зберігати суму
//   // 2. створити цикл for of та пройтись по кожному обʼєкту
//   // 3. Вибрати обʼєкт у якого поле name співпадає з параметром stoneName
//   // 4. Порахувати загальну вартісь помноживши ціну на кількість

//   //   let totalPrice = 0;

//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       //   totalPrice = stone.price * stone.quantity;
//       return stone.price * stone.quantity;
//     }
//   }

//   //   return totalPrice;
// }

//! ============

//* Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи
// з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const transactionTypes = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     // 1. Створює обʼєкт транзакції з полями id, amount, type
//     // 2. В якості поля id задамо довжину масиву транзакцій
//     return {
//       id: this.transactions.length,
//       amount,
//       type,
//     };
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(
//       amount,
//       transactionTypes.DEPOSIT
//     );
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("Недостатньо коштів");
//       return false;
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(
//       amount,
//       transactionTypes.WITHDRAW
//     );
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  // getTransactionDetails(id) {
  //   for (const transaction of this.transactions) {
  //     if (id === transaction.id) return transaction;
  //   }
  // },

  // /*
  //  * Метод повертає кількість коштів
  //  * певного типу транзакції з усієї історії транзакцій
  //  */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (type === transaction.type) total += transaction.amount;
//     }
//     return total;
//   },
// };

// console.log(account.getBalance());

// account.deposit(500);

// console.log(account.getBalance());

// account.withdraw(200);
// account.withdraw(500);

// account.deposit(1000);

// account.withdraw(100);
// account.withdraw(300);
// account.withdraw(200);

// console.log(account.getBalance());

// console.log(account.getTransactionDetails(1));

// console.log(account.getTransactionTotal(transactionTypes.WITHDRAW));
// console.log(account.getTransactionTotal(transactionTypes.DEPOSIT));

// console.log(account);


// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]


// const numbers = [5, 10, 15, 20, 25];

// const moreNumbers = [1, 2, 3, 4, 5, 6, 6];

// const addingNumbers = [...moreNumbers, ...numbers];
// console.log(addingNumbers);

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// // numbers.forEach(logMessage);

// addingNumbers.forEach(logMessage)




// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = [...numbers];
// console.log(numbersCopy);
// dirtyMultiply(numbersCopy, 2);
// // Произошла мутация исходных данных - массива numbers
// console.log(numbersCopy); // [2, 4, 6, 8, 10]


// const planets = ["mars", , "jupiter", "venera"];
// planets.splice(1, 1, "some","boom");
// console.log(planets);
// const playingWithPlanets = planets.map((planet, index) => {
//   console.log(`${planet} has its own index ${index} =))`);
// });

///////////////////////////////////////////////










//  спросить почему allCourses.indexOf(course) === index)??????????????











// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];
   
// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);
// const uniqueCourses = allCourses.filter((course, index, allCourses) =>
//   allCourses.indexOf(course) === index);
// console.log(uniqueCourses);

// ...........................................................








// ................................................................... 



// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({score}) => score >= LOW_SCORE && score < HIGH_SCORE);
// console.log(average); // Массив объектов с именами Поли и Хьюстон












///////////////////////////////////////
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// // console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// let allTags = [];
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     console.log(allTags);
//     return allTags;
//   }, []);

// console.log(getTags(tweets));



////////////////////////////

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// console.log(tags);

// // Вынесем callback-функцию отдельно, а в reducе передадим 
// //ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// // console.log(tagCount);





/////////////////////////////////




// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Mango", greet);


// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName,callback) {
//   return callback(pizzaName);
// }



// console.log(makeMessage("papperoni", makePizza));
// console.log(makeMessage("papperoni", deliverPizza));

//////



// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`)
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
  
// });


/////



// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// // processCall("Poly", takeCall, leaveHoloMessage);


////////////////////


// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName,onSucces,onError) {
//     if(this.pizzas.includes(pizzaName)){
      
//        return onSucces(pizzaName);
//     }
//    return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError))
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError))
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError))



// ///////////////


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
// numbers.forEach(function filter(number) {
//      if (number > value) {
//       filteredNumbers.push(number);
//     }
// })
//   return filteredNumbers;
// }


// console.log(filterArray([12, 24, 8, 41, 76], 20));


////////////////////////////

// // Change code below this line
// const calculateTotalPrice=(orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach(item =>
//     totalPrice += item);
//  return totalPrice;
// };
// // Change code above this line
// console.log(calculateTotalPrice([12, 85, 37, 4]))


// //////////////////////////////////////


// // Change code below this line
// const filterArray=(numbers, value) =>{
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
    
//   });
// console.log(filteredNumbers)
//   // Change code above this line
//   return filteredNumbers;
// }
// filterArray([12, 24, 8, 41, 76], 20);


//////////////////////////////////////


// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArr = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0)
//       number = number + value;
//     newArr.push(number);
//   });
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
      
//   //     newArr.push(numbers[i] + value);
//   //   }
//   //   else if (numbers[i] % 2 !== 0) {
//   //     newArr.push(numbers[i]);
//   //   } 
//   // }
//   console.log(newArr)
//   return newArr;
//   // Change code above this line
// }
// changeEven([44, 13, 81, 92, 36, 54], 100);



/////////////////////////////////////////



// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// planetsInUpperCase.push("non");
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]


// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригинальный массив не изменился
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths)


/////////////////////////


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map(book => book.title);
console.log(titles)