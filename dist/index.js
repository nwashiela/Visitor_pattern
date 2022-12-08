"use strict";
class Screwdriver {
    accept(visitor) {
        visitor.visitScrewdriver(this);
    }
}
class Hammer {
    accept(visitor) {
        visitor.visitHammer(this);
    }
}
class PowerDrill {
    accept(visitor) {
        visitor.visitPowerDrill(this);
    }
    got() {
        return "jhgfvdghb";
    }
}
class TapeMeasure {
    accept(visitor) {
        visitor.visitTapeMeasure(this);
    }
}
const checkList = [new Screwdriver(), new Screwdriver(), new Screwdriver(), new Screwdriver(), new Screwdriver(), new Screwdriver(), new Hammer(), new Hammer(), new Hammer(),
    new Hammer(), new PowerDrill(), new PowerDrill(), new PowerDrill(), new TapeMeasure()];
console.log(checkList.length);
const screwdriver = [];
const powerDrill = [];
const hammer = [];
const tapeMeasure = [];
class Buildings {
    constructor() {
        this.screwdriver = [];
        this.powerDrill = [];
        this.hammer = [];
        this.tapeMeasure = [];
    }
    visitScrewdriver(equipment) {
        this.screwdriver.push(equipment);
        return "checked";
    }
    visitHammer(equipment) {
        this.hammer.push(equipment);
        return "checked";
    }
    visitPowerDrill(equipment) {
        this.powerDrill.push(equipment);
        return "ordered";
    }
    visitTapeMeasure(equipment) {
        this.tapeMeasure.push(equipment);
        return "most are lost";
    }
}
const checkinglist = new Buildings();
checkList.forEach(checkList => {
    checkList.accept(checkinglist);
});
console.log("TapeMeasure", checkinglist.tapeMeasure.length);
console.log("PowerDrill", checkinglist.powerDrill.length);
