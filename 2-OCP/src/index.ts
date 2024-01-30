// Solid

import { TypeVehicle } from "./TypeVehicle";
import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";

// O - Open / Closed Principle
// Princípio Aberto/ Fechado  OCP

// - Aberto para extensao e Fechado para modificacao

const type = TypeVehicle.CAR
let vehicle

if (type === TypeVehicle.CAR) {

    vehicle = new Car ('Prata', 2024, 2.0, 5, 4)
    
} else if (type === TypeVehicle.MOTORCYCLE){

    vehicle = new Motorcycle ('Vermelha', 2023, 1000)

}

