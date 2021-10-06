/* 1.7 */

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  function finderName(param, name) {
      let result;
      for (let i = 0; i < param.length; i++) {
          if (param[i] === name) {
              return i
          }         
      }
      return "No hay resultado";
  }

  console.log(finderName(nameFinder, "Marc"));