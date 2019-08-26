function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    frameRate(30);
    noStroke();
    colorMode(HSB, 255);
}
// track time
var frame = 0;
// constants
var degree = Math.PI / 180;
var slice = 2 * (Math.PI / 3);

function draw() {
    // reset background and update angle
    background(0);
    var angle = (frame++) * degree;
    // draw 3 rotating slices
    fill(frame % 255, 255, 255);
    arc(width / 2, height / 2, width, height, slice + angle, (2 * slice) + angle, PIE);
    fill((frame + 85) % 255, 255, 255);
    arc(width / 2, height / 2, width, height, (2 * slice) + angle, (3 * slice) + angle, PIE);
    fill((frame + 170) % 255, 255, 255);
    arc(width / 2, height / 2, width, height, (3 * slice) + angle, (4 * slice) + angle, PIE);
}