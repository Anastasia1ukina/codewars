https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

Квадрат квадратов
Вам нравятся строительные блоки. Вам особенно нравятся квадратные строительные блоки. А что вам еще больше нравится, так это сложить их в квадрат из квадратных строительных блоков!

Однако иногда невозможно расположить их в квадрат. Вместо этого у вас получится обычный прямоугольник! Эти проклятые штуки! Если бы у вас только был способ узнать, зря ли вы сейчас работаете… Подождите! Вот и все! Вам просто нужно проверить, является ли количество строительных блоков правильным квадратом .

Задача
Учитывая целое число, определите, является ли оно квадратным :

В математике квадратное число или идеальный квадрат — это целое число, которое является квадратом целого числа; другими словами, это произведение некоторого целого числа само на себя.

В тестах всегда будет использоваться некоторое целое число, поэтому не беспокойтесь об этом в языках с динамической типизацией.

Примеры
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

Tests:

const Test = require('@codewars/test-compat');

describe("isSquare", function(){
  it("should work for some examples", function(){
    Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
    Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
    Test.assertEquals(isSquare( 3), false, "3 is not a square number");
    Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
    Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
    Test.assertEquals(isSquare(26), false, "26 is not a square number");
  });
});