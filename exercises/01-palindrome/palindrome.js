/**
 * A palindrom is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 * Checks to see if a string is a palindrome.
 * @param  {[string]}  string
 * @return {Boolean}
 */
function isPalindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr
    .split('')
    .reverse()
    .join('');
  return reverseStr === lowRegStr;
}

module.exports = {
  isPalindrome
};
