interface ListNeed{
    visitScrewdriver(equipment: Screwdriver): void;
    visitHammer(equipment: Hammer): void;
    visitPowerDrill(equipment: PowerDrill): void;
    visitTapeMeasure(equipment: TapeMeasure): void;

}

interface Building{ 
    accept(visitor : ListNeed): void;
}

class Screwdriver implements Building {
    accept(visitor : ListNeed): void{
        visitor.visitScrewdriver(this);
    }
}

class Hammer implements Building {
    accept(visitor : ListNeed): void{
        visitor.visitHammer(this);
    }
}

class PowerDrill implements Building {
    accept(visitor : ListNeed): void{
        visitor.visitPowerDrill(this);
       
    }

    got():string {
        return "jhgfvdghb"
    }
}

class TapeMeasure implements Building {
    accept(visitor : ListNeed): void{
        visitor.visitTapeMeasure(this);
    }
}

const checkList = [new Screwdriver(),new Screwdriver(),new Screwdriver(),new Screwdriver(),new Screwdriver(),new Screwdriver(), new Hammer(), new Hammer(),new Hammer(),
    new Hammer(), new PowerDrill(), new PowerDrill(),new PowerDrill(),new TapeMeasure()]
console.log(checkList.length);

const screwdriver = []
const powerDrill = []
const hammer = []
const tapeMeasure = []

class Buildings implements ListNeed{
    public screwdriver : Screwdriver[]
    public powerDrill : PowerDrill[]
    public hammer : Hammer[]
    public tapeMeasure : TapeMeasure[]

    constructor(){
        this.screwdriver = []
        this.powerDrill = []
        this.hammer = []
        this.tapeMeasure = []
    }

    visitScrewdriver(equipment: Screwdriver): string {
        this.screwdriver.push(equipment)
        return "checked"
    }
   visitHammer(equipment: Hammer): string {
       this.hammer.push(equipment)
       return "checked"
   }
   visitPowerDrill(equipment: PowerDrill): string {
       this.powerDrill.push(equipment)
       return "ordered"
   }
   visitTapeMeasure(equipment: TapeMeasure): string {
       this.tapeMeasure.push(equipment)
       return "most are lost"
   }
}

const checkinglist = new Buildings()

checkList.forEach(checkList=>{
    checkList.accept(checkinglist)
})

console.log("TapeMeasure", checkinglist.tapeMeasure.length)
console.log("PowerDrill", checkinglist.powerDrill.length)
