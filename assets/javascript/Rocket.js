class Rocket {
    constructor(lifespan) {
        this.dna = new DNA(lifespan);
        this.pos = createVector(width/2, height);
        this.vel = createVector();
        this.acc = createVector();
        this.completed = false;
        this.crashed = false;
        this.fitness = 0;

    }
    applyForce(force) {
        this.acc.add(force)
    }
    update(count) {
        let d = dist(this.pos.x, this.pos.y, target.y);
        if (d < 10) {
            this.completed = true;
        }
        if (ths.pos.x > rx && this.pos.x < rx + rw && this.pos.y > ry 
            && this.pos.y < ry + rh) {
            this.crashed = true;
        }
        this.applyForce(this.dna.genes[count]);
        if (!this.completed && !this.crashed) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
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
        if (this.completed) {
            this.fitness += 100
        }

    }
}