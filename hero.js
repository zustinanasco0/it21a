class Hero {

constructor(name, health, attack) {

this.name = name ;
this.health = health ;
this.attack = attack ;



}


gethealth() {
    return this.health ;

}


}
class Warrior extends Hero {
    useAbility() {
        console.log(`${this.name} uses a powerful strike!`) ;
}

}

class Mage extends Hero {
    constructor(name, health, attack, mana) {
        super(name, health, attack) ;
        this.mana = mana ;
}
   useAbility() {
    console.log(`${this.name} casts a flying talong attack!`) ;

}

}

const warrior = new Warrior("janloyd", 120, 15) ;
warrior.useAbility() ;

const mage = new Mage("totang talong", 80, 8, 100) ;
mage.useAbility() ;