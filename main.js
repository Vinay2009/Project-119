
function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function updateCanvas() {

    background("white");
}

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function setup() {
    canvas = createCanvas(280, 280);
    canvas.position(550, 250);
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function draw() {
    //Set stroke weight to 7
    strokeWeight(7);
    //Set stroke color to black
    stroke(0);
    // If mouse is pressed, draw line between previous and current mouse positions
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function gotResult(error, results) {
if(error) {
    console.error(error);
}
console.log(results);
document.getElementById('label').innerHTML = 'Label:' + results[0].label;

document.getElementById('confidence').innerHTML = 'Confidence:' + Math.round(results[0].confidence * 100) + '%';

utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}

function clearCanvas() {
    background("white");
}


