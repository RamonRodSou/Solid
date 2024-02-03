// Solid

// I - Interface Segregation Principle
// Principio da Segregacao de Interfaces   ISP

// - Classses nao devem ser forçadas a depender de método que nao usam

import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";


const Carro = new Car('Azul', 2022, 1.3, 4)
const moto = new Motorcycle ('Roxa', 2024,300)