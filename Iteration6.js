/* 1.6 */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let newElements = [];
    for (let i = 0; i < param.length; i++) {
        if (!newElements.includes(param[i])) {
            newElements.push(param[i]);
        }
    }
    return newElements
}

console.log('Duplicados', duplicates);
console.log('No duplicados', removeDuplicates(duplicates));