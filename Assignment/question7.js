class Animal{
    constructor(name,sound){
        this.name =name;
        this.sound=sound;
    }

    makeSound(){
        console.log(this.sound);
    }
}

class Dog extends Animal{
    constructor(name,sound){
        super(name,sound);
    }
    fetch(){console.log("Fetching the ball!");}
}




const dog = new Dog("Buddy", "Woof");


dog.makeSound();


dog.fetch(); 