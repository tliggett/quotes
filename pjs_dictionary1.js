
var dict, ray;

function preload(){
  ray = loadStrings('data/food.txt');
  
}

function setup() {
createCanvas(500,500);

dict = new Dictionary();
for(var i = 0; i<24; i+= 2){
  dict.add(ray[i], ray[i+1]);
}


}

function draw() {
  background(0);
  fill(255);
  textSize(21);
  text("Dictionary Assignment 1");
  var i = 25;
  for(var key in dict.datastore){
  text(key + " -> " + dict.find(key) , 10,i);
  i+= 25;
}
}





function Dictionary(){
 this.add = add;
 this.datastore = {};
 this.find = find;
 this.remove = remove;
 this.showAll = showAll;
}
function add(key, value){
 this.datastore[key] = value; 
}
function find(key){
  return this.datastore[key]; 
}
function remove(key){
 delete this.datastore[key]; 
}
function showAll(){
 for(var key in this.datastore){
  print(key + " -> " + this.datastore[key]); 
 }
}