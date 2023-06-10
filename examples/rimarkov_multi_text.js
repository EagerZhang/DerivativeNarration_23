// The RiTa lib is included in index.html
// The text files are files in the project

let lines, markov, txt1, txt2, txt3;
let x = 160, y = 240;

function preload() {

  txt1 = loadStrings('thewasteland.txt');
  txt2 = loadStrings('ihaveadream.txt');
  txt3 = loadStrings('thecommunistmanifesto.txt');
}

function setup() {

  createCanvas(800,600);
  textFont('helvetica', 24);
  textLeading(28);
  textAlign(LEFT);

  lines = ["click to (re)generate"];
  
  // create a markov model w' n=4
  markov = RiTa.markov(2);

  // load text into the model
  markov.addText(txt1.join(' '));
  markov.addText(txt2.join(' '));
  markov.addText(txt3.join(' '));

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

  
 
