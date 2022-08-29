// дан многомерный массив, при помощи методов массивов возвести каждое число во 2 степень(методы массивов)
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// arr = arr.map(item => item.map(x => x **2))
   

// console.log(arr);

// 2.
// дан многомерный массив, посчитать произведение каждого из массивов, а затем произведение внешнего массива(методы массивов)
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// arr = arr.map(item => item.reduce((a,b) => a * b)).reduce((a, b) => a * b)
// console.log(arr);


// 3.
// распаковать массив в отдельные переменные
// let arr = [[1, [2], [3, [4]]], [[[[5]]]], [[6], [7], [8, [9]]]];
// let [[arr1, [arr2], [arr3, [arr4]]], [[[[arr5]]]], [[arr6], [arr7], [arr8, [arr9]]]] = arr;
// console.log(arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9);

// 4.
// распаковать объект в отдельные переменные
// let obj = {
//     name: 'Frank',
//     age: 35,
//     skills: [
//         {
//             lang: 'JS',
//             lvl: 'junior'
//         },
//         {
//             lang: 'C++',
//             lvl: 'middle'
//         },
//         {
//             lang: 'GoLang',
//             lvl: 'senior'
//         }
//     ],
//     hobby: [
//         'tennis',
//         'football'
//     ]
// }
// let {name, age, skills: [{lang: lang1, }, {lvl: lvl1}, {lang: lang2}, {lvl: lvl2}, {lang: lang3}, {lvl: lvl3}], hobby: [hobby1]} = obj;
// console.log(name , age, lang1, lang2, lang3, lvl1, lvl2, lvl3, hobby1);

// let { name, age, skills: [{ lang: lang1, lvl: lvl1 }, { lang: lang2, lvl: lvl2 }, { lang: lang3, lvl: lvl3 }], hobby: [hobby1] } = obj;
// console.log(name, age, lang1, lang2, lang3, lvl1, lvl2, lvl3, hobby1);


// 5.
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.(методы массивов)
// let users = [
//     { name: "Kim", age: 41 },
//     { name: "Kortney", age: 42 },
//     { name: "Khloe", age: 37 },
//     { name: "Kendall", age: 26 },
//     { name: "Kylie", age: 24 },
//   ];
//   users = users.map(item => item.name)
//   console.log(users);

// 6.
// Дан массив
// Преобразуйте каждый элемент в его длину и выведите в console.(методы  массивов)
// let lengthName = [
//   'Patricia',
//   'William',
//   'Barbara',
//   'James',
//   'Chloe',
//   'Elizabeth',
// ];
// let arr = lengthName.map(item => item.length);
// console.log(arr);

// 7.
// Дан массив с числами. Найдите сумму первых N элементов до "stop". Пример: [1, 2, 3, "stop", 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент "stop".(методы массивов)

// let num = [1, 2, 3, "stop", 4, 5, 6];
// let num2 = [];
// for(i of num ){
//     if(i === 'stop'){
//         break
//     }else{
//         num2.push(i)
//     }
// }
// num2 = num2.reduce((a , b) => a + b)
// console.log(num2)

// 8. 
//Дан объект следующего вида: {
//     name: 'Jack',
//     age: 34,
//     work: 'IT',
//     hours: 23,
//    salary: 2300,
// experience: 450
// }, задача: добавить объекту методы: ходить на работу(при вызове этого метода, кол-во часов возрастает на 6, и зарплата тоже растет в пропорции 1час-100$), также должен быть метод Получить зарплату(зарплату можно получить только если уже есть мин. 3000$, после вызова этого метода ключи зарплата и наработанные часы должны быть обнулены, а в ключе опыт, необходимо хранить сумму всех отработанных часов)(отправить в гитхаб)
let person = {
        name: 'Jack',
        age: 34,
        work: 'IT',
        hours: 23,
       salary: 2300,
    experience: 450,
    goToWork() {
        this.hours += 6;
        this.salary += 600;
    },
    getSalary() {
        if(this.salary >= 3000) {
            this.experience += this.hours
            this.salary = 0;
            this.hours = 0;
        }
    }
    }
    console.log(person);
    person.goToWork();
    person.goToWork();
    console.log(person);
    person.getSalary();
    console.log(person);

