// Object solution
//let ladder = {
//    step: 0,
//    up: function () {
//        this.step++;
//        return this;
//    },
//    down: function () {
//        this.step--;
//        return this;
//    },
//    showStep: function () {
//        alert(this.step);
//        return this;
//    }
//};

//ladder.up().up().down().showStep();

//Class solution
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
