


class Person{
    constructor(name,age=0){
        this.name=name;
        this.age=age;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }
    getDescription(){
        let description=super.getDescription();
        if(this.homeLocation)
            description+= `the home location is ${this.homeLocation}.`;
        return description
    }
}


const Ashour= new Traveller('Ashour',21,'cairo');

console.log(Ashour.getDescription());