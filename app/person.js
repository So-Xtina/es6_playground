
class Person {
    constructor(name){
        this.name = name;
    }

    sleep(hours){
        return `<h1>I'm going to sleep for ${hours} hours.</h1>`;
    }

    drink(cups){
        return `<h1>I'm going to drink ${cups} cups of waters</h1>`;
    }

    speak(message){
        return `<h1>${this.name} said: ${message}</h1>`;
    }
}

class SuperPerson extends Person {
    constructor(name, heroName){ //need to always have a parameter for the super;
        super(name); //always have to call super to inherit from parent;

        this.heroName = heroName;
    }

   sayHeroName(){
       return this.speak(`I'm ${this.heroName}`);
   } 

    xRay(){
        // return `<h1>${this.name} said: I see everything!</h1>`;
        return this.speak('Cool...I can see through everything!');
    }
}

//export default Person;
export default SuperPerson;