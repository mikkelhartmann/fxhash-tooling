// By importing p5 we make all the global p5 functions available
import 'p5'
import { getFeatures } from './features'

function setup() {
    let features = getFeatures(fxrand)

    window.$fxhashFeatures = {
        "palette": features.palette['name'],
        "shape": features.shape
    }

    let width = 3400
    let height = 3400

    createCanvas(width, height)
    const pg = createGraphics(width, height);
    background(color(features.palette['background']));

    push()
    fill(features.palette['fill'])
    stroke(features.palette['stroke'])
    strokeWeight(width / 4)

    switch (features.shape) {
        case 'circle':
            circle(width / 2, height / 2, width / 2)
            break;

        case 'square':
            rectMode(CENTER)
            rect(width / 2, height / 2, width / 2, width / 2)
            break;
    }



    pop()

    image(
        pg,
        0.033 * width,
        0.0227 * height,
        0.935 * width,
        0.954 * height
    )
}

function draw() { noLoop() }

// Make the functions available to p5
window.setup = setup;
window.draw = draw;
