import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {
    
    validate(): void {
        console.log('Verificar a pontuacaio no rewards')
    }
    collectPayment(): void {
        console.log('Pagar com a pontuacao do rewards')
    }
    
}