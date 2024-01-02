/*******************************************************************************/
class ElectronicDevice {
    constructor(name) {
        this.name = name;
        this.state = false;
    }

    turnOn() {
        if (this.state) {
            console.log(`-> ${this.name} já está ligado`);
            return
        }
        this.state = true;
    }

    turnOff() {
        if (!this.state) {
            console.log(`-> ${this.name} já está desligado`);
            return
        }
        this.state = false;
    }
}

class Smartphone extends ElectronicDevice {
    constructor(name, color, model) {
        super(name);
        this.color = color;
        this.model = model;
    }
}

class Tablet extends ElectronicDevice {
    constructor(name, battery_percentage) {
        super(name);
        this.battery_percentage = battery_percentage;
    }

    // overwrite
    turnOn() {
        if (this.battery_percentage <= 0) {
            console.log(`-> ${this.name} não possui bateria`);
            return;
        }
        this.state = true;
    }
}

/*******************************************************************************/
const instanceateSmartphone = (name, color, model) => {
    return new Smartphone(name, color, model);
}

const instanceateTablet = (name, battery_percentage) => {
    return new Tablet(name, battery_percentage);
}

/*******************************************************************************/
const smartphone = instanceateSmartphone('Motorola', 'Azul', 'MotoG 8');
const tablet = instanceateTablet('iPad', 10);