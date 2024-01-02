/*******************************************************************************/
class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    speek() { console.log(`${this.name} está falando..`); }
    eat() { console.log(`${this.name} está comendo..`); }
    drink() { console.log(`${this.name} está bebendo..`); }
    fullName() { console.log(`${this.name} ${this.lastname}`); }
}

/*******************************************************************************/
const instanceatePerson = (name, lastname) => {
    return new Person(name, lastname);
}

/*******************************************************************************/
const person = instanceatePerson('Leonardo', 'Santos');
console.log(person);