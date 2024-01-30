// Solid
// Single Responsibility Principle - Princípio da Responsabilidade Ünica
// Nunca deve Haver mais de um mootivoo para uma classe mudar.

import Client from "./Client";
import Notify from "./Notify";

const cliente = new Client("cliente@example.com")
const notificacao = new Notify(cliente)

notificacao.sendEmail()