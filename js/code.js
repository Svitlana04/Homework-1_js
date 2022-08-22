/*Задача 1 
Запитайте у користувача 
Місто, вік, ім'я та виведіть ці дані на сторінку  згенерувавши теги для виводу через JavaScript
Також продублюйте ці дані в консоль в форматі 
*Користувач*
Ім'я : Ім'я користувача
Вік : Вік користувача
Місто проживання : Місто користувача
*Кінець виводу**/
document.write(`<div class="red">Задача 1</div>`)
const city = prompt('З якого ви міста?', "Київ");
const age = prompt('Скільки вам років?', "18");
const nameUser = prompt("Ваше ім'я?", "Світлана");

console.log("*Користувач*")
console.log("Місто:" + " " + city);
console.log("Вік:" + " " + age);
console.log("Ім'я:" + " " + nameUser);
console.log("*Кінець виводу*")

document.writeln(`<div> Місто: ${city}</div>`);
document.writeln(`<div> Вік: ${age}</div>`);
document.writeln(`<div> Ім'я: ${nameUser} </div>`);

/*Задача 2
Створіть 3 змінних ( x = 6, y = 14, z = 4 ) Виконайте та відобразіть результат наступних операцій для цих змінних:
                       x += y - x++ * z;
                       z = --x - y * 5;
                       y / = x + 5% z;
                       z - x++ + y * 5;
                        x = y - x++ * z;
  Дайте відповідь як джаваскрипт виконав розрахунок кожної операції.*/

  document.write(`<div class="red">Задача 2</div>`)
let x = 6, y = 14, z = 4;

document.write(`<div  class="div">Перший приклад:</div>`);
document.write(`<div> x += y - x++ * z= ${x += y - x++ * z}</div>`);
document.write("1. x++ = 6;</br> 2. 6*z=24;</br> 3. y-24=-10;</br> 4. x+(-10)=-4.");
x = 6; y = 14; z = 4;
document.write(`<div  class="div">Другий приклад:</div>`);
document.write( `<div> z = --x - y * 5 = ${z = --x - y * 5}</div>`);
document.write("1. --x = 5;</br> 2. y*5=-70;</br> 3. 5-70=z;</br> 4. z=-65.");
x = 6; y = 14; z = 4;
document.write(`<div  class="div">Третій приклад</div>`);
document.write( `<div> y /= x + 5% z = ${y /= x + 5% z}</div>`);
document.write("1. 5%z=1;</br> 2. x+1=7;</br> 3. y/7 = 2.");
x = 6; y = 14; z = 4;
document.write(`<div  class="div"> Четвертий приклад</div>`);
document.write( `<div> z - x++ + y * 5 = ${z - x++ + y * 5}</div>`)
document.write("1. x++ = 6;</br> 2. y*5=70;</br> 3.  70 - x++=64;</br> 4. 4+64=68.");
x = 6; y = 14; z = 4;
document.write(`<div  class="div"> П'ятий приклад</div>`);
document.write(`<div> x = y - x++ * z = ${x = y - x++ * z}</div>`)
document.write("1. x++ = 6;</br> 2. 6*z=24;</br> 3. y-24=-10</br>. ");