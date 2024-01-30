// Uma única responsabilidade de enviar um email

import Client from "./Client";

export default class Notify{
    
    constructor(private client: Client){

       
    }

    sendEmail(): boolean {

        this.client.email
        console.log('Enviando Email')
        return true
    }
}