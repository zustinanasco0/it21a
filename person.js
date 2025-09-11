class person{
  comstructor(name,age,occupation){
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

 

person1.getName() ;
person1.displayinfo(); 
 
