import NubankCar from "./NubankCard";

export default class CreditCard extends NubankCar {

    validate(): void {
        console.log ('Verificando o limite...')
    }
}