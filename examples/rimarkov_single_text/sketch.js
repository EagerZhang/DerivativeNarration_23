let lines, markov, txt1;
let x = 160, y = 240;

function preload() {

    txt1 = loadStrings('ihaveadream.txt');
  }

function setup() {

  createCanvas(800,600);
  textFont('helvetica', 24);
  textLeading(28);
  textAlign(LEFT);

  lines = ["click to (re)generate"];
  
  // create a markov model w' n=3
  markov = RiTa.markov(3);

  // load text into the model
  markov.addText(txt1.join(' '));
  drawText();

}

function drawText() {
  background(200, 200, 200);
  fill(20);
  text(lines.join(' '), x, y, 420, 440);
}

function mouseClicked() {
  lines = markov.generate(4);
  x = y = 40;
  drawText();
  print(lines);
}







  
 




