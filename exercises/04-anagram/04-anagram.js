/**
 * Check to see if two provided strings are anagrams.
 *
 * *******************
 * One string is an anagram of another if it uses the same characters
 * in the same quantity.
 * ******************* Ignore special characters and spaces; do not
 * count them.
 *
 * @example
 *   anagrams('rail safety', 'fairy tales') // true
 *   anagrams('RAIL! SAFETY', 'fairy tales') // true
 *   anagrams('Hi there', 'Bye there') // false
 *
 * @param {string} string1 first string to compare
 * @param {string} string2 second string to compare
 * @returns {boolean} whether or not the strings are anagrams
 */
function anagrams(string1, string2) {

  var firstStr = string1.split(" ");
  var secondStr = string2.split(" ");

  //make one array
   firstStr.forEach(function(str1){
     var str1Len = str1.legnth;
     //console.log(str1); 
   }); 
    

  //make another array for compare
   secondStr.forEach(function(str2){
     var str2Len = str2.length;
      console.log(str2);
   });

   //compare two of them if its same 
   if (str1 == str2 && str1Len == str2Len)
    return str1 + ' ' + str2;

}

module.exports = {
  anagrams
};
