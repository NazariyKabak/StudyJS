 /**Строки, объект String и его методы**/

 const message = new String("Hello World ");
 console.log(message);
 console.log(message[2]);

 //Повторение строки
 console.log(message.repeat(3));

 //Поиск в строке
 const hello = "привет мир. пока мир";
 const key = "мир";
 const firstPos=hello.indexOf(key);
 const lastPos=hello.lastIndexOf(key);
 console.log(firstPos);
 console.log(lastPos);
 const firstPos2=hello.indexOf(key,10);
 console.log(firstPos2);
 //Следует учитывать, что поиск регистрозависимый

//includes
 console.log(hello.includes("пока"));
 console.log(hello.includes("пока",15));
 console.log(hello.includes("hello"));

 /**Выбор подстроки**/
//Для того, чтобы вырезать из строки подстроку, применяются методы substring() и slice().
 const word=hello.substring(12,16);
 console.log(word);
 console.log(hello.slice(12,16));
 //slice позволяет использовать отрицательные индексы.
 console.log(hello.slice(-8, -4));

 /**Получение символа по индексу**/
 console.log(hello.charAt(2));
 console.log(hello.charCodeAt(2));

 /**Удаление пробелов**/
 //Для удаления начальных и концевых пробелов в стоке используется метод trim():

 let hello1 = "   Привет Том  ";
 console.log(hello1);
 console.log(hello1.length);
 let backspace=hello1.trim();
 console.log(backspace, backspace.length);

 // trimStart(): удаляет пробел с начала строки (в зависимости от того,
 // является ли письмо правостронним или левостронним, это может быть правый или левый край строки)
 //
 // trimEnd(): удаляет пробел с конца строки (в зависимости от того,
 // является ли письмо правостронним или левостронним, это может быть правый или левый край строки)
 //
 // trimLeft(): удаляет пробел с левой части строки
 //
 // trimRight(): удаляет пробел с правой части строки

 /**Объединение строк**/
 let hello2 = "Привет ";
 const world2 = "мир";
 console.log(hello2.concat(world2));

 /**Замена подстроки**/
 let hello3="Добрый день";
 console.log(hello3.replace("день","вечер"));
 //В то же время у этого метода есть одна особенность - он заменяет только первое вхождение подстроки:
 let menu = "Завтрак: каша, чай. Обед: суп, чай. Ужин: салат, чай.";
 menu = menu.replace("чай", "кофе");
 console.log(menu);

 /**Разделение строки**/
 console.log(menu.split(" "));

 /**Проверка начала и окончания строки**/
 console.log(menu.startsWith("Завтрак:"));
 console.log(menu.startsWith("Bebra"));
 console.log(menu.endsWith("чай."));

 /**Заполнение строки**/
 //Методы padStart() и padEnd() растянуть строку на определенное количество символов и заполнить строку слева и справа соответственно.
 console.log(world2.padStart(5));
 console.log(world2.padEnd(5),world2.length);
 console.log(world2.padEnd(5)," Java");

