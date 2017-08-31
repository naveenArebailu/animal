class Animal{
    name:string;
    distance_covered:number;
    sound:string;

    constructor(name:string){
        this.name=name;
    }

    move(distance:number){
        this.distance_covered=distance;
        return `Distance covered by ${this.name} is ${this.distance_covered} km`;
    }

    makeSound(sound:string){
        this.sound=sound;
        return `${this.name} made Sound ${this.sound}`;
    }
}

class Tiger extends Animal{
    constructor(name:string){
        super(name);
    }
}

class Elephant extends Animal{
    constructor(name:string){
        super(name);
    }
}

var tiger  = new Tiger('Tiger');
var elephant = new Elephant('Elephant');

document.write(`${tiger.move(12)} and ${tiger.makeSound('grrrrrrrrrrrr')}`);
document.write(`${elephant.move(3)} and ${elephant.makeSound('Ummmmmmmmm')}`);