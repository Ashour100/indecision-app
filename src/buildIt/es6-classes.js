


class Person{
    constructor(name,age=0){
        this.name=name;
        this.age=age;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}


const Ashour= new Person('Ashour',21);

console.log(Ashour.getDescription());