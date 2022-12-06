class Human {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfoOfHuman() {
        console.log(`${this.name}, ${this.age}`);
    };

}

class Car {
    brand;
    model;
    year;
    numberplate;
    owner;

    constructor(brand, model, year, numberplate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.numberplate = numberplate;
    }

    getOwner(user) {
        if (user instanceof Human && user.age >= 18) {
            this.owner = user;
        } else {
            console.log(`this user is too young to be owner`)
        }
    }

    getInfoOfCar() {
        console.log(`${this.brand}, ${this.model}, ${this.year}, ${this.numberplate}`)
        if (this.owner !== undefined) {
            this.owner.getInfoOfHuman();
        }
    }
}

const olha = new Human('Olha', 21);
const daria = new Human('Daria', 22);
const olena = new Human('Olena', 17);
const nissan = new Car('nissan', 'leaf', '2015', 'ВН0012БК');
const chevrolet = new Car('chevrolet', 'aveo', '2010', 'ВН4152АА');
const daewoo = new Car('daewoo', 'lanos', '2008', 'ВН0352БК');
nissan.getOwner(olha);
chevrolet.getOwner(daria);
daewoo.getOwner(olena)
nissan.getInfoOfCar();
chevrolet.getInfoOfCar();
daewoo.getInfoOfCar();
