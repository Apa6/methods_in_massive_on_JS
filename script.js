//! Methods in massive

const people = [                              // people = массив с объектами
    {name: "Alim", age: 22, budget: 500},
    {name: "Alexey", age: 32, budget: 1500},
    {name: "Petr", age: 44, budget: 5200},
    {name: "Sasha", age: 12, budget:40}
];

//todo 'ПЕРЕБОР' МАССИВОВ (выведение определенных значений объектов)

//?  Стандартный метод чистого JS по перебору массивов (ES5)

  // for(i = 0; people.length > i; i++) {
  //   console.log(people[i]);
  // }

//? Усовершенствованный чистого  JS  по перебору массивов(ES6)

  // for (let object of people) {
  //   console.log(object)
  // }

//?  forEach (ES5) 

  // people.forEach(function(object,index,people){
  //   console.log(object);                           //  выводится отдельный массив со свойствами 
  //   console.log(index);                           // выводится их номерное значение (индекс)
  //   console.log(people)                           // выводится полностью массив  
  // });

//? forEach (ES6)

  // people.forEach(object => console.log(object)); // принципиальная разница в использовании стрелочной функции ( что заметно сокращает код)

//todo 'ПРЕОБРАЗОВАНИЕ' ТЕКУЩЕГО МАССИВА В НОВЫЙ МАССИВ 

//? map (ES6)

  // const newObject = people.map(object => {
  //   // return object;
  //   // return object.name;
  //   // return object.age;
  //   // return `${object.name} ${object.age} ${object.budget}`
  //   // return object.budget * 7;
  // });
  // console.log(newObject)

//todo ФИЛЬТРАЦИЯ МАССИВА ПО КАКОМУ-ЛИБО УСЛОВИЮ (перебор по определенному значению)

//? filter (ES5)

//   let array = [];                                 // создаем массив, куда будут помещены результаты фильтрации
//   for (let i = 0; people.length > i; i++) {       // создаем цикл перебора элементов по length (продолжительность всего массива)
//     if (people[i].age >= 18) {                    // people[i] = доступ к свойствам массива . выбор свойства
//       array.push(people[i].name )                 // метод 'push' внедрение в элемент новый созданный элемент массива значения свойства по условию отбора
//     }
//   }
// console.log(array)

//? filter (ES6)

  // let array = people.filter(object => {
  //   if (object.age >= 18){
  //     return true;
  //   }
  // }) 
  // console.log(array)

  // Сокращенная запись
    // let array = people.filter(object => object.age >= 18); 
    // console.log(array)


//todo ПОЛУЧЕНИЕ РЕЗУЛЬТАТА ПО ДЕЙСТВИЮ С МАССИВОМ

//? reduce (ES5)
// проссумируем бюджет по каждому объекту
   
  // let amount = 0;
  // for (let i = 0; people.length > i; i++) {
  //   amount = amount + people[i].budget 
  // }
  // console.log(amount);

//? reduce (ES6)
// проссумируем бюджет по каждому объекту

  // let amount = people.reduce((emptyArray, object) => {    // метод(функция) 'reduce' имеет два параметра: 1) начальное значение массива, 2) обект массива (именуемое object) 
  //   return emptyArray + object.budget;                    // возвращаем сумму пустого массива со свойством объекта
  // },0);                                                   //  начальное значение 'emptyArray'

  // console.log(amount)

  // Сокращенная запись
    // let amount = people.reduce((emptyArray,object) => emptyArray + object.budget, 0 )
    // console.log(amount)

//todo пОИСК ОПРЕДЕЛЕННЫХ ЭЛЕМЕНТОВ В МАССИВЕ

//? find 
//найти объекст с именем 'Alim'

  // let find = people.find(object => object.name == 'Alim');  
  // console.log(find)

//? findIndex 

  // let find = people.findIndex(object => object.name == 'Alim')
  // console.log(find)

//? Совместное применение методов
// преобразовать массив и вывести преобразованное значение

let mixMethods = people
                      .filter(object => object.budget >= 3000)    // находим в массиве объект с бюджетом больше 3000
                      .map(object => {                            // преобразуем данный массив объектов (для более удобного формата чтения данных)
                        return {
                          info: `${object.name} (${object.age})`,
                          budget: object.budget
                        }
                      })                           
                      .reduce((epmtyArray,object) =>  object.budget + " рублей", "")         
console.log(mixMethods)

