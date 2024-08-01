const obj = {
    a: 27,
};
const obj2 = {
    a: 27,
};
console.log(obj === obj2);
// false

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    getInstance() {
        return this;
    }
}

const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true
