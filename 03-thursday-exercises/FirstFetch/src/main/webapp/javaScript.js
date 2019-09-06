/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getUser(){
    
    var name = document.getElementById("userid").value
    let url = "https://jsonplaceholder.typicode.com/users/" + name;
    fetch(url)
  .then(res => res.json()) //in flow1, just do it
  .then(data => { 
      document.getElementById("textfielt").innerHTML = 
      "name: " + data["name"] + "<br>" +
      "phone number: " + data["phone"] + "<br>" +
      "Address <br>" +
      "Street: " + data["address"]["street"]  + "<br>" + 
       "city: " + data["address"]["city"] + "<br>" + 
       "zip: " + data["address"]["zipcode"] + "<br>" + 
       "Geo (lat, lng): " + data["address"]["geo"]["lat"] + " " + data["address"]["geo"]["lng"];
       
      
      
   // Inside this callback, and only here, the response data is available
   //console.log("data",data);
  /* data now contains the response, converted to JavaScript
     Observe the output from the log-output above
     Now, just build your DOM changes using the data*/       
})

    
}

function getAllUser(){
    
  
    let url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
  .then(res => res.json()) //in flow1, just do it
  .then(data => { 
      document.getElementById("textfielt").innerHTML ="  <table> <tr> <th>name </th> <th> phonenumber </th> </tr>" 
      
       data.forEach(x => document.getElementById("textfielt").innerHTML +="name: " + x["name"] + "number: "+ x["phone"] + "<br>"
     )
    

      
          
      })

    
}
                

//      data.forEach(data => document.getElementById("textfielt").innerHTML += 
//       "name: " + data["name"] + "<br>" 
//      
//                
//                
//                
//                )
      
                
                //"phone number: " + x["phone"] + "<br>" 
      
       
      
      
   // Inside this callback, and only here, the response data is available
   //console.log("data",data);
  /* data now contains the response, converted to JavaScript
     Observe the output from the log-output above
     Now, just build your DOM changes using the data*/       

//document.getElementById(but).onclick = function() {doSomething;};

