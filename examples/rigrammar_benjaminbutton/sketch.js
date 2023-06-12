let font, grammar, json;
let lines = ["click to", "generate", "a new one"];

// Here is the original closing screenplay quotes from the film: The Curious Case of Benjamin Button.
// Author of the screenplay: Eric Roth. https://www.goodreads.com/work/quotes/56454126-the-curious-case-of-benjamin-button-screenplay

// Some people were born to sit by a river.
// Some get struck by lightning.
// Some have an ear for music.
// Some are artists.
// Some swim.
// Some know buttons.
// Some know Shakespeare.
// Some are mothers.
// And some people - dance.

function setup() {

  createCanvas(800, 600);
  textFont('helvetica', 24);
  textLeading(28);
  textAlign(LEFT);

  grammar = RiTa.grammar(benjaminbutton);
}

function draw() {

  background(200, 240, 105);
  text(lines[0], 30, 75);
  text(lines[1], 30, 110);
  text(lines[2], 30, 145);
  text(lines[3], 30, 180);
  text(lines[4], 30, 215);
  text(lines[5], 30, 250);
  text(lines[6], 30, 285);
  text(lines[7], 30, 320);

}

function mouseReleased() {

  let result = grammar.expand();

  // split on the % char output from the grammar
  let benjaminbutton = result.split("%");

  for (let i = 0; i < 8; i++) {
    lines[i] = benjaminbutton[i];
  }
}