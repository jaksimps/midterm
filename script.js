var wrap = document.body.querySelector(".wrapper");
var count = document.body.querySelector(".counter");
var current = 5;
count.innerHTML = "Counter: " + current;
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];


function lister(name,age){
  var out = document.createElement("div");
  out.innerHTML= "Name: " + name + " " + "Age: " + age ;
  if(age > 25){
    out.style.color="green"
  }
  wrap.appendChild(out);
}

for(var i = 0; i <list.length; i++){
  lister(list[i].name,list[i].age);
}

document.body.querySelector(".butt").addEventListener("click", function(){
 count.innerHTML = "Counter: " + current++;
})