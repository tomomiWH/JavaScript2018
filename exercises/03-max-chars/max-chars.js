/**
 * Find the character that is most commonly used in the string
 * @param {string} string
 * @returns {string} character that occurs most often
 * @example
 * maxChar("aaaabc"); // a
 */

function maxChars(string) {
  var str = string;
  var words = str.split(' '); //split str into array returns words
  var oneChar = str.split(''); //spplit str into returns char

  
  var findLetters = {};
  var maxLetter = '';

//loop through letters of string
for (var i = 0; i < words.length; i++)
{
  var result = words[i];

}

console.log(maxChars('Hello World'));
return str;

}

module.exports = {
  maxChars
};
