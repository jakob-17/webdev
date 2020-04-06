// reference type
var object1 = { value: 10 };
var object2 = object2;
var object3 = { value: 10 };

console.log(object1 === object2); // true
console.log(object1 === object3); // false

// context vs scope
function b() {
    let a = 4;
    console.log(this);
}

const obj = {
    a: function() {
        console.log(this);
    }
}

// instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }

    play() {
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Tob', 'Healer');
const wizard2 = new Wizard('Pi', 'Dark');