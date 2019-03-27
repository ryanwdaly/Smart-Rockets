'use strict'

class DNA {
    constructor(lifespan) {
        this.genes  = [];
        this.fitness = 0;
        this.lifespan = lifespan
        for (let i = 0; i < lifespan; i++) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.1)
        }
    }
   calcGeneFitness(target) {
       let score = 0;
       for (let i = 0; i < this.genes.length; i++) {
           if (this.genes[i] === target.charAt(i)) score++;
       }
       this.fitness = score / target.length;
   }
    mutate(mutationRate) {
        for (let i = 0; i < this.genes.length; i++) {
            if (Math.random() <= mutationRate) {
                this.genes[i] = getRandomChar(63, 123);
            }
        }
    }
    getPhrase() {
        return this.genes.join("");
    }
}

