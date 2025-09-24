class person{
  constructor(name,age,occupation){
  this.name = name;
   this.age = age ;
   this.occupation = occupation ;



  }

  getName() {
   console.log(this.name) ;


  }

displayinfo() {
 console.log("Name: " + this.name) ;
  console.log("Age: " + this.age) ;
 console.log("Occupation: " + this.occupation) ;
 console.log("----------------------------" ) ;

 
}

}

const person1 = new person("Coco Martin " ,24, "Masahista") ;
const person2 = new person("Liza Soberano", 22, "Actress") ;
const person3 = new person("Alden Richards", 30, "Actor") ;
 

person1.getName() ;
person1.displayinfo(); 
person2.getName() ;
person2.displayinfo(); 
person3.getName() ;
person3.displayinfo();
