function example01() {
    /*******************************************************************************/
    class Car {
        constructor(name) {
            this.name = name;
            this[_speed] = 0;
        }

        get speed() {
            console.log('getter');
            return this[_speed];
        }

        set speed(value) {
            console.log('setter');
            if (typeof value !== 'number') return;
            if (value >= 100 || value <= 0) return;
            this[_speed] = value;
        }

        speedUp() {
            if (this[_speed] >= 100) return;
            this[_speed]++;
        }

        slowDown() {
            if (this[_speed] <= 0) return;
            this[_speed]--;
        }
    }

    /*******************************************************************************/
    const _speed = Symbol('speed');

    const instanceateCar = (name) => {
        return new Car(name);
    }

    /*******************************************************************************/
    const car = instanceateCar('Fusca');
    car.speed = 2;
    console.log(car.speed);

    example01();
}

function example02() {
    /*******************************************************************************/
    class Person {
        constructor(name, lastname) {
            this.name = name;
            this.lastname = lastname;
        }

        get fullName() {
            return `${this.name} ${this.lastname}`;
        }

        set fullName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.lastname = value.join(' ');
        }
    }

    /*******************************************************************************/
    const instanceatePerson = (name, lastname) => {
        return new Person(name, lastname);
    }

    /*******************************************************************************/
    const person = instanceatePerson('Leonardo', 'Santos');
    console.log(person.fullName);
    person.fullName = 'Leonardo José Santos';
}
example02();