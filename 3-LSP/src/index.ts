// Solid
// L - Liskov Substitution Principle
// Princípio da Substituicao de Liskov  LSP

// - Uma classe derivada pode ser substituivel por sua classe base

import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NubankRewards";

const creditCard = new CreditCard ()
creditCard.validate()
creditCard.collectPayment()
console.log('---------------------------')

const  debitCard = new DebitCard()
debitCard.validate()
debitCard.collectPayment()
console.log('---------------------------')


const rewards = new NubankRewards()
rewards.validate()
rewards.collectPayment()
console.log('---------------------------')
