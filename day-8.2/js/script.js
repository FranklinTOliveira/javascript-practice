// JavaScript source code

/*
     Create a new codepen:
        Let's say you're a car manufacturer and need to create many cars to build your inventory
        Create a class called "car"
        Add some properties like "make", "model", "year", "color", etc
        Use your car class to construct 4 (or more) different cars
        console log your code so you can see the results!
        BONUS: Display the details for each of your cars in your HTML


function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}


const mgg = new Car('Mercedes-Benz', 'GLA', 2015, 'gray');
const ksb = new Car('Kia', 'Sorento', 2020, 'black');
const liw = new Car('Lexus', 'IS', 2021, 'white');

const nrr = new Car('Nissan', 'Rogue', 2019, 'red'){

}
    
    

function addBodyButtonListener(event) {
    const button1 = document.getElementById("ppb");
    button1.addEventListener("click", nnr);
}

*/




class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    createElement() {
        const description = document.createElement('ul');
        
        const feature1 = document.createElement('h3');
        feature1.textContent = this.make;
        description.appendChild(feature1);

        const feature2 = document.createElement('li');
        feature2.textContent = this.model;
        description.appendChild(feature2);

        const feature3 = document.createElement('li');
        feature3.textContent = this.year;
        description.appendChild(feature3);

        const feature4 = document.createElement('li');
        feature4.textContent = this.color;
        description.appendChild(feature4);

        return description;
    }
}

function addCar(car) {
    let carList = document.getElementById('carList');
    console.log(carList);
    carList.appendChild(car.createElement());
}

function addCars(event) {
    let cars = [
        new Car('Kia', 'Sorento', 2020, 'black'),
        new Car('Lexus', 'IS', 2021, 'white'),
        new Car('Mercedes-Benz', 'GLA', 2015, 'gray'),
        new Car('Nissan', 'Rogue', 2019, 'red')
    ];
    console.log(cars);
    cars.forEach(addCar);
}

addCars();