var histogram, lines, fromFile, count, step, img;

function preload(){
 fromFile = loadStrings("data/gram.txt"); 
 img = loadImage("data/lear1.jpg");
}

function setup() {
  createCanvas(500,500);
  frameRate(25);
  histogram = [];
  count = 0;
  step = 0;
  
  
}

function draw() {
  count++;
  if(count > 100){
   step++;
   count = 0;
   if(step > 22){
    step = 0; 
   }
  }
  background(221,216,184);
  fill(84,46,113);
  textSize(25);
  image(img, 275,275, 215,215);
  text("HISTOGRAM: KING LEAR SHAKESPEARE", 5, 25);
  textSize(18);
  text(fromFile[step], 10,50);
  doHisto(fromFile[step]);
}

function Dictionary(){
 this.add = add;
 this.datastore = {};
 this.find = find;
 this.remove = remove;
 this.showAll = showAll;
 this.display = display;
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
function display(){
  fill(84,46,113);
  textSize(14);
  var i = 70;
  for(var key in this.datastore){
    var s = this.datastore[key];
    text(key, 10, i);
    rect(25,i-9,s*45, 10);
    text(s,30 + s*45, i);
    i+= 17;
    
  }
}
function doHisto(str){
  var x = new Dictionary();
  var s = str.split("");
  for(var cha in s){
    if(x.find(s[cha]) != undefined){
     x.add(s[cha], x.find(s[cha]) + 1); 
    }else{
     x.add(s[cha], 1); 
    }
    
  }
  x.display();
  
}