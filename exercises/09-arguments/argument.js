/**
 * You will be provided with an initial array (the first argument
 * in the destroyer function), followed by one or more arguments. 
 * Remove all elements from the initial array that are of the same value as 
 * these arguments.
 *
 * i.e
 * destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
 * destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]
 * destroyer([2, 3, 2, 3], 2, 3) should return []
 *
 */

function destroyer(arr, ...args) {
  //   console.log(args);
    let newarray = [];
    arr.forEach(function(item){
      if (args.indexOf(item) === -1 )
      newarray.push(item);
    
    });
      console.log(newarray)
      return newarray;
  }
  
  // var obj = {
  //   1: true,
  //   2: true
  // };
  // console.log(obj[i])
}

module.exports = {
  destroyer
};
