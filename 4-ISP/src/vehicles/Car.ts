import IVehicleCar from "./IVehiclesCar";

export default class Car implements IVehicleCar {

    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number
    ){
        this.configurationCar(color, year, engine, seats)

    }

    startVehicle(): void {
        console.log("Ligando os motores.");
    }
    configurationCar(color: string, year: number, engine: number, seats: number): void {

        console.log(`Criando um carro: ${color}, ${year}, ${engine} potencia, com ${seats} assentos.`)
        this.startVehicle()

    }

}