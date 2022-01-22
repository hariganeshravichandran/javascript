//class syntax

// class namecls{
//     constructor(){

//     }
// }

// //------

// class personA{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
//     getFullName=function(){
//         return this.firstName + this.lastName
//     }
// }

// personA1= new personA("manoj", "kumar")
// console.log(personA1.getFullName())

// //class inheritance

// class vehicle{
//     constructor(brand){
//         this.brand=brand;
//     }
// }
// class car extends vehicle{
//     constructor(brand,wheels){
//         super(brand)
//         this.wheels=wheels
//     }
// }

// class bike extends vehicle{
//     constructor(brand,wheels){
//         super(brand)
//         this.wheels=wheels
//     }
// }

// car1= new car("fiat",4)
// bike1=new bike("tvs",2)

// console.log(car1,bike1)

//excercise
class school{
    constructor(student){
        this.student=student;
    }
}
class boys extends school{
    constructor(gender,count){
        super(gender)
        this.count=count
    }
}

class girls extends school{
    constructor(gender,count){
        super(gender)
        this.count=count
    }
}

class1= new boys("boys",44)
class2=new girls("girls",23)

console.log(class1,class2)


