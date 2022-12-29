class Ladder {
    step = 0

    up() {
        this.step++;
        return this;
    }

    down() {
        this.step--;
        return this;
    }

    showStep() {
        alert(this.step);
        return this;
    }
};

const ladder = new Ladder();

ladder.up().up().down().showStep();