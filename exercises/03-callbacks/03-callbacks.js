var instructorNames = ["Jamal", "Matina", "Eddy"];

/**
 * Given a student name, formats and prints out the name in a visually appealing way
 * (e.g. with hyphens or astericks before the name) with `console.log`
 * @example
 *  - Jamal
 *  - Matina
 *  - Eddy
 * @param {string} name instuctor name
 */
function printer(str) {
  console.log("- " + str);
}

/**
 * Loops through the array of `instructorNames`
 * and for each name, calls upon the function printer to print out the name
 * @param {array} instructorNames
 * @param {function} callback printer function
 */
function printNames(arrayOfNames, callback) {
  for(var i = 0; i <arrayOfNames.legnth-1; i++)
  {
    callback(arrayOfNames[i]);
  }
}

printerNames(instructorNames, printer);


module.exports = {
  printer,
  printNames
};
