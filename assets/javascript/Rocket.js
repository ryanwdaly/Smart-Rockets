class Rocket {
    constructor(lifespan) {
        this.pos = createVector(width/2, height);
        this.vel = createVector();
        this.acc = createVector();
        this.dna = new DNA(lifespan);
        this.fitness = 0;

    }
    applyForce(force) {
        this.acc.add(force)
    }
    update(count) {

        this.applyForce(this.dna.genes[count]);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    show() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        triangle(0, 0, 0, 6, 12, 3)
        pop();
    }
    calcFitness() {
        let d = dist(this.pos.x, this.pos.y, target.x, target.y)
        this.fitness = 1/d;
    }
}