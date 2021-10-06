 /* 1.2 */

 const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
 function findLongestWord(param) {
   for (let i = 0; i < longestWord.length; i++) {
       if (param[i] && (param[i].length > longestWord.length)) {
           longestWord = param[i];
           console.log('ENTRO',longestWord);
       } 
   }
   console.log('RETORNO', longestWord)
   return longestWord;
 
 }
 
 findLongestWord(avengers)