Что такое анаграмма? Итак, два слова являются анаграммами друг друга, если они оба содержат одни и те же буквы. Например:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Напишите функцию, которая будет находить все анаграммы слова из списка. Вам будут предоставлены два входа: слово и массив со словами. Вы должны вернуть массив всех анаграмм или пустой массив, если их нет. Например:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript