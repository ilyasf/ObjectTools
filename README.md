ObjectTools
===========

java script tool to print object information

var testObj = {
    a: '123',
    b: 2234,
    c: [
        '123',
        '221',
        '1234'
    ],
    d: {
        as: 'as',
        b: [
            12,
            13,
            14,
            {
                c: '123',
                d: 12,
                ad: [12, 13, 14]
            }
        ]
    }
};
var tester = require('./tools.js');
tester.setMode('node');
console.log(tester.printObject(testObj));


------->
a : 123
  b : 2234
    c :     0 : 123
    1 : 221
    2 : 1234
      d :       as : as
ilyas@ilyas-Notebook-PC:~/IdeaProjects/test$ node app.js
  a : 123
  b : 2234
    c :     0 : 123
    1 : 221
    2 : 1234

      d :       as : as
        b :         0 : 12
        1 : 13
        2 : 14
          3 :           c : 123
ilyas@ilyas-Notebook-PC:~/IdeaProjects/test$ node app.js
  a : 123
  b : 2234
  c : 
    0 : 123
    1 : 221
    2 : 1234
    d : 
      as : as
      b : 
        0 : 12
        1 : 13
        2 : 14
        3 : 
          c : 123
          d : 12
          ad : 
            0 : 12
            1 : 13
            2 : 14
