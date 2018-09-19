/**
 * Recreate the forEach function
 * @see https://www.google.com/search?q=mdn+forEach&oq=mdn+for&aqs=chrome.0.69i59j0j69i57j69i60l2j69i61.987j0j7&sourceid=chrome&ie=UTF-8
 * @param {array} arr
 * @param {function} callback
 */
function forEach(arr, callback) {
  //foreach function is for loop to return value and index
  for (var i = 0; i < arr.length; i++)
  {
    callback(arr[i], i, arr);
  }
}

/**
 * Given an array of strings, remove all letters of each value except the first and last character in the strings
 * @param {array} arr
 * @returns {array} new array, where each values is the first and character of each string
 * @example
 *   showFirstAndLast(['colt','matt', 'tim', 'udemy']); // ["ct", "mt", "tm", "uy"]
 *   showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
 */

 //this is how far I got.. 
function showFirstAndLast(arr) {
  arr.forEach((words, index, array) => {
    var firstChar = words.charAt(0);
    var lastChar = words.charAt(words.length-1);
    var result = firstChar + lastChar;
    return result;
    
  }); 
}



/**
 * Find and return only the even numbers in an array
 * @param {array} arr
 * @returns {array} a new array that only includes the even numbers
 * @example
 *   onlyEvenValues([1,2,3]) // [2]
 *   onlyEvenValues([5,1,2,3,10]) // [2,10]
 */
//
// function onlyEvenValues(arr) {
//   var odd = [];
//   for (var i =0; i < arr.length; i++){
//   if (arr[i] % 2 !=1 ){
//    odd.push(arr[i]);
//      console.log(odd)
//      //return odd;
//    }  
//  }
// }

//converted to forEach from for loop, some of forEach code example from
//https://thejsguy.com/2016/07/30/javascript-for-loop-vs-array-foreach.html
function onlyEvenValues(arr) {
  arr.forEach((odd, index) => {
  if (arr[index] %2 !=1)
  console.log(odd);
});
}


/* * You must use ForEach Write a function called 
doubleValues which accepts an array and returns a new array 
with all the values in the array passed to the function doubled 
* Examples: doubleValues([1,2,3]) 
// [2,4,6] doubleValues([1,-2,-3]) // [2,-4,-6] */

//not working, result shows undefined..
function doubleValues(arr) {
  arr.forEach((num, index)=>{
    var result = num * 2;
    return result;
    });
}


module.exports = {
  forEach,
  showFirstAndLast,
  onlyEvenValues
};
