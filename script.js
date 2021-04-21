//console.log(1);
//console.log('Abdulaziz'); // строковой типданных
//console.log(5.5); // числовой тип данных
//console.log(true); // логический тип данных
//console.log(false); // логический тип данных




// + перед prompt() - преобразует нашу переменную в числовой тип данных 
// prompt() -  показывает сообщение и запрашивает ввод текста от пользователя
var Name = prompt('Введите свое имя');
console.log(Name);
var age = +prompt('Введите свой возраст');
console.log(age);
//alert(Name) // выводит значение нашей переменной в модальном окне
var first = +prompt('Решите пример: 127 + 319 = ?');
console.log('Пример 1: 127 + 139 = ' + (127 + 319) + ' Ваш ответ:  ' + first);

var second = +prompt('Решите пример: 1057 - 758 = ?');
console.log('Пример 2: 1057 - 758 = ' + (1057 - 758) + ' Ваш ответ: ' + second);

var third = +prompt('Решите пример: 57 * 112 = ?');
console.log('Пример 3: 57 * 112 = ' + (57 * 112) + ' Ваш ответ: ' + third);

var fourth = +prompt('Решите пример: 1250 / 2 = ?');
console.log('Пример 4: 1250 / 2 = ' + (1250 / 2) + ' Ваш ответ: ' + fourth );

var opened = +prompt('Откройте консоль для просмотра')
alert(opened)
