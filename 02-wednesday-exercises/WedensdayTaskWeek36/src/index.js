/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);
console.log(all);
var reduce = all.join(",");
console.log(reduce);

var hyphens = all.join("-");
console.log(hyphens);


//d)  Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)
//
var addToEnd = all.push("Lone", "gitte");
console.log(addToEnd);
//e)  Add the names Hans and Kurt to the start of the array
console.log(all);
var addTostart = all.unshift("Hans", "kurt");
console.log(addTostart);
console.log(all);
// 
//The array type provides methods to remove items from the start shift() and from the end pop(..) of an array.
//f)  Remove the first name in the array (Hans)
        var remove = all.shift();
        console.log(remove +" has benn removed from the list have a look: " + all)
//g)  Remove the last name from the array (Gitte)
var removelast = all.pop();
        console.log(removelast +" has benn removed from the list have a look: " + all)
//The array type provides a method splice(..) which changes the array by removing existing elements and/or adding new
//h) Remove Ole and Janne from the middle of the array
all.splice(3, 2);

console.log(all);



//The array type provides a method reverse() to reverse the elements of an array

//i) Sanne thinks it’s unfair that the boys have to come first, reverse the all array, so that the girls come first.
all.reverse()

console.log(all);
// 
//The array type provides a method sort() to sort the elements of an array
//j) Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.
all.push("HUMAN");
function toLower(name){
    return name.toString().toLowerCase();
}

  allLower = all.map(x => toLower(x));
var sorted = allLower.sort();
console.log(sorted)
//k)      The default sort algorithm doesn’t handle the situation where the name can be either capitalized or not. Write a user-defined sort method to fix this problem.
//
//Array methods with callbacks (there are many)
//
//The array type provides a method map() which returns a new array of the return value from executing the callback on every array item.
//
//l) Convert all the names in the array to uppercase.
    console.log(allLower.map(x => x.toString().toUpperCase()));
//The array type has a method filter() that creates a new array with all elements that pass the test implemented by the provided callback
//
//m) Create a new array containing all the names that start with either “l” or “L” (hint: use the filter function with a sufficient callback). 
console.log(all);
  console.log(all.filter(x => x.toString().charAt(0) !== "l" && x.toString().charAt(0) !== "L"));