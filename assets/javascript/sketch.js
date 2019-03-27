const popSize = 50;
const mutationRate = 0;
const lifespan = 200;

var target;
var rocket;
var population;
var lifeP;
var count = 0; 

function setup() {
    // frameRate(10)
    createCanvas(600, 400);
    population = new Population(mutationRate, popSize, lifespan)
    lifeP = createP();
    target = createVector(width/2, 50)
}
function draw() {
    background(0);
    ellipse(target.x, target.y, 16, 16)
    if (count === lifespan) {
        population.evaluate();
        population.generateNextGen();
        count = 0;
    }
    count++;
    lifeP.html(count);
    for (let i = 0; i < popSize; i++) {
        population.stack[i].update(count);
        population.stack[i].show();
    }
}

