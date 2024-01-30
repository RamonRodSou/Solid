import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCar implements IPaymentInstrument {

    validate(): void {
        console.log ('Vallidacao básica')
    }
    collectPayment(): void {
        console.log ('Pagamento realizado')
    }
    
}