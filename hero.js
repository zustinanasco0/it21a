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

const warrior = new Warrior("janloyd", 120, 15) ;


warrior.useAbility() ;


