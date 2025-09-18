class Hero {

constructor(name, health, attack) {

this.name = name ;
this.health = health ;
this.attack = attack ;
this.Items = [] ;


}


gethealth() {
    return this.health ;

}   

getName(){

    console.log(this.name) ;
}

getAttack(){

console.log(this.attack) ;

}
getStats() {
    console.log("\n") 
    console.log("Name:"  + this.name)
    console.log("Health: " + this.health)
       console.log("Attack: " + this.attack)


}

additem (item) {
this.Item.push(item);

}


totalAttack () {
return this.attack + this.Items.reduce((sum,i) =>sum + i .bonusAttack, 0) ;


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

class Item{
     constructor(name,bonusAttack){
     this.name = name ;
     this.bonusAttack = bonusAttack;

     }





}




const sword = new Item("sword", 5) ;
const staff = new Item ("staff", 3) ;



const warrior = new Warrior("janloyd", 120, 15) ;
warrior.getName();
warrior.getAttack() ;
warrior.additem(sword) ;
console.log(warrior.totalAttack()) ;
warrior.additem(sword) ;
console.log(warrior.totalAttack()) ;
warrior.additem(sword) ;
console.log(warrior.totalAttack()) ;
warrior.additem(sword) ;
console.log(warrior.totalAttack()) ;





//warrior.useAbility() ;
//warrior.getStats() ;


//const mage = new Mage("totang talong", 80, 8, 100) ;
//mage.useAbility() ;
//mage.getStats() ; 

function performAbility(hero){
    console.log("\n") ;
     hero.useAbility() ;


}

//performAbility(warrior) ;
//performAbility(mage ) ;