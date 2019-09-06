/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

       //Observe: no return type, no type on parameters
function add(n1, n2){
    
   return n1 +n2;
}


var sub = function(n1,n2){
  return n1 - n2
} 

var mul = function(n1, n2){
    return n1 * n2;
}


var cb = function(n1,n2, callback){
 if(isNaN(n1) === false && isNaN(n2) === false && typeof callback === "function")
 {
     try{
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
     }
     catch(error)
     {
         
         return "idiot you brok the thing!";
     }
     
        }  
 return 0;
};

console.log( add(1,2) )     // 3
console.log( add )          // a pointer to the funktion add will be passed
console.log( add(1,2,3) ) ; // it will add 1 and 2
console.log( add(1) );	  // nan	
console.log( cb(3,3,add) ); // "Result from the two numbers: "+3+"+"+3+"="+6;
console.log( cb(4,3,sub) ); // "Result from the two numbers: "+4+"+"+3+"="+1;
//console.log(cb(3,3,add())); // dosent work add()dosent pass the funktion it gives the result 
console.log(cb(3,"hh",add));// Result from the two numbers: "+3+"+"+hh+"=3hh;


console.log(cb(3,3,add())); // dosent work add()dosent pass the funktion it gives the result 
console.log(cb(3,3,mul));
console.log(cb(3,3,(x,y) => x/y))

var names = ["jens", "kim", "lars", "marie", "bo", "ib"];

var bigNames = names.filter(x => x.toString().length >= 3 )
console.log(bigNames);

names.forEach(x => console.log(x));
bigNames.forEach(x => console.log(x));

var upperNames = names.map(x => x.toString().toUpperCase());

console.log(upperNames);

var htmlNames = function(list){
    var html = list.join("</li><li>");
    html = "<ul><li>" + html; 
    html = html + "</li><ul>";
    return html;
    
}
console.log(htmlNames(names));

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];


var theRightCars = cars.filter(x=> x.year >= 1999);
var volovs = cars.filter(x=> x.make === 'Volvo');
var pric = cars.filter(x=> x.price <= 5000);

console.log(theRightCars);
console.log("volvos:");
console.log(volovs);
console.log("price");
console.log(pric);

var makesSQLCars = function(cars, condition) {
    var sql = "";
    cars.forEach(x => sql += "INSERT INTO cars (id,year,make,model,price) VALUES ( "+x.id+", "+x.year+", '"+x.make+"','"+x.model+"', "+x.price+" );");
    return sql
}

console.log(makesSQLCars(cars))
//
//1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
//var msgPrinter = function(msg,delay){
//  setTimeout(function(){
//    console.log(msg);
//  },delay);
//};
//console.log("aaaaaaaaaa");
//msgPrinter ("bbbbbbbbbb",2000);
//console.log("dddddddddd");
//msgPrinter ("eeeeeeeeee",1000);
//console.log("ffffffffff");

//aa
//dd
//ff
//ee
//bb


function Person(name){
  this.name = name;
  
  console.log("Name: "+ this.name);
  var self = this;
  setTimeout(function(){
    console.log("Hi  "+self.name);  //Explain this
  },20);
}
//call it like this (do it, even if you know it’s silly ;-)
//Person("Kurt Wonnegut");  //This calls the function
//console.log("I'm global: "+ name);  //Explain this

var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
//setTimeout(g1,500);
//setTimeout(g2,1000);

var person = {firstName:"John", lastName:"Doe", age:50, hat:"top hat"};

for(prop in person)
{
    console.log(prop + " " + person[prop]);
    
}

console.log("his name is: "+ person["firstName"] + " and he has got a " + person["hat"])

delete person.age;

for(prop in person)
{
    console.log(prop + " " + person[prop]);
    
}

person.waight = 85;

console.log("he should have a waight now ");

for(prop in person)
{
    console.log(prop + " " + person[prop]);
    
}

function makePerson(firstName, lastName, age, hat){
    var person = {firstName:firstName, lastName:lastName, age:age, hat:hat};
    return person;
}
console.log("new person:")
var man = makePerson("bo", "bosen", 3, "smallhat")

function getInfo(person)
{
     var ans = "";
    for(prop in makePerson(person.firstName, person.lastName, person.age, person.hat))
{
   
     ans += "the person's: " + prop + " is: " + man[prop];
    
}
return ans;
    
}

console.log(getInfo(man))