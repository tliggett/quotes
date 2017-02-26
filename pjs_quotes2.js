var letes, myFont;
var tebow, mcgregor, lewis, fdr, ali, bridgewater, curry, biles, bo, tillman;
var count;
function preload(){
  tebow = loadImage("data/tebow.jpg");
  ali = loadImage("data/ali.jpg");
  bridgewater = loadImage("data/bridgewater.jpg");
  mcgregor = loadImage("data/mcgregor.jpg");
  fdr = loadImage("data/fdr.jpg");
  lewis = loadImage("data/lewis.jpg");
  curry = loadImage("data/curry.jpg");
  biles = loadImage("data/biles.jpg");
  bo = loadImage("data/bo.jpg");
  tillman = loadImage("data/tillman.jpg");
}

function setup() {
  createCanvas(500,500);
  frameRate(25);
  letes = new Dictionary();
  letes.add("tebow1", new person("Tim Tebow", "When people said I couldn't, I did. And I will.", tebow));
  letes.add("ali1", new person("Muhammed Ali", "I am the greatest. I said that even before I knew I was.", ali));
  letes.add("lewis1", new person("Ray Lewis", "Wins and losses come a dime a dozen. But effort? Nobody can judge that. Because effort is between you and you.", lewis));
  letes.add("mcgregor1", new person("Conor McGregor", "I fear no man. If you breathe oxygen, I do not fear you.", mcgregor));
  letes.add("fdr1", new person("FDR", "Happiness lies in the joy of achievement and the thrill of creative effort.", fdr));
  letes.add("bridgewater1", new person("Teddy Bridgewater", "They always leave out one of the most important qualities when evaluating you, Heart..", bridgewater));
  letes.add("curry1", new person("Steph Curry", "These guys are all playing checkers. I'm out here playing chess.", curry));
  letes.add("biles1", new person("Simone Biles", "I'm not the next Usain Bolt or Michael Phelps, I'm the first Simone Biles.", biles));
  letes.add("bo1", new person("Bo Jackson", "Set your goals high, and don't stop till you get there.", bo));
  letes.add("tillman1", new person("Pat Tillman", "Passion is what makes life interesting, what ignites our soul, fuels our love and carries our friendships, stimulates our intellect, and pushes our limits... A passion for life is contagious and uplifting.", tillman));
  count = 0;


}

function draw() {
  background(0);
  var step = 125;
  if(count < step){
   letes.find("tebow1").display(); 
  }else if(count < step*2){
   letes.find("ali1").display();
  }else if(count < step*3){
   letes.find("lewis1").display();
  }else if(count < step*4){
   letes.find("mcgregor1").display();
  }else if(count < step*5){
   letes.find("fdr1").display();
  }else if(count < step*6){
   letes.find("bridgewater1").display();
  }else if(count < step*7){
   letes.find("curry1").display();
  }else if(count < step*8){
   letes.find("biles1").display();
  }else if(count < step*9){
   letes.find("bo1").display();
  }else if(count < step*10){
   letes.find("tillman1").display();
  }else{
    count = 0;
  }
  count ++;
}
function person(n, q, img){
   this.name = n;
   this.quote = q;
   this.image = img;
   this.display = display;
}

function display(x, y){
 fill(252,185,65);
 textSize(15);
 image(this.image, 75,25,350,350);
 text("\"" + this.quote + "\" -" + this.name, 75,400,350);
  
}



function Dictionary(){
 this.add = add;
 this.datastore = {};
 this.find = find;
 this.remove = remove;
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
