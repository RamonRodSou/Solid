import NubankCar from "./NubankCard";

export default class DebitCard extends NubankCar {

    validate(): void {
        console.log ('Validar saldo suficiente...')
    }

}