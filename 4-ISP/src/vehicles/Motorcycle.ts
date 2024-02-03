import IVehicle from "./IVehicles";
import IVehicleMotorcicle from "./IVehiclesMotorcycle";

export default class Motorcycle implements IVehicleMotorcicle, IVehicle {

    constructor(
        color: string,
        year: number,
        engine: number,
    ){
        this.configurationMotorcycle(color, year, engine)

    }

    startVehicle(): void {
        console.log("Ligando os motores.");
    }

    configurationMotorcycle(color: string, year: number, engine: number): void {
        console.log(`Criando uma motocicleta: ${color}, ${year}, ${engine} potencia,.`)
        this.startVehicle()
    }


}