
function getMaxNumber() {
// Создаем функцию, которая возвращает максимальное число из массива

  let max = -Infinity;
 // создаем переменную max, которая будет принимать значение -Infinity (безконечность) что говорит о том что мы снимаем лимит на максимальное число
 
  for (let i = 0; i < arguments.length; i++){
      if(arguments[i] > max) {
          max = arguments[i];
      //  создаем цикл который будет проверять каждое число массива на большее либо равное максимальному числу   
        }
  }
 return max;
 //возвращаем число которое соответствует максимальному числу из введенных чисел
}

console.log(getMaxNumber(2, 0, 5, -1, 3, 10 ,4));
// выводим на экран максимальное число из введенных чисел