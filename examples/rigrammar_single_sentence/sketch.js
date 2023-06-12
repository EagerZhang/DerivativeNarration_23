let font, grammar, json;
let lines = ["click to generate a sentence."];

function setup() {

    createCanvas(800,600);
    textFont('helvetica', 24);
    textLeading(28);
    textAlign(LEFT);

  grammar = RiTa.grammar(simple_sentence);
}

function draw() {

  background(200, 240, 105);
  text(lines[0], 30, 75);

}

function mouseReleased() {

  let result = grammar.expand();
  
  // split on the % char output from the grammar
  let simple_sentence = result.split("%");
  for (let i = 0; i < lines.length; i++) {
    lines[i] = simple_sentence[i];
  }
}