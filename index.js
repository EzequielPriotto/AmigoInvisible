require('dotenv').config()

// Brindados por twilio
const accountSid = process.env.USER_ID;
const authToken = process.env.TOKEN;
const numeroAPI = process.env.NUMERO_API;
const client = require('twilio')(accountSid, authToken);

// Array de los participantes 
// Ejemplo del modelo de participante:
// {
//     id: 1,
//     nombre: 'nombre',
//     numero: '+5491122334455',
//     seleccionado: false
// }, 
const participantes = require('./participantes')
const valorRegalo = process.env.VALOR_REGALO;

participantes.forEach(participante => {
    let sorteado = sorteo(participante.id);
    // console.log(`Buenas ${participante.nombre}, el sorteo se acaba de hacer y te toca hacerle un regalo a: ${sorteado.nombre}! (tope de $5000) `)
    enviarMensaje(participante, sorteado)
})

function enviarMensaje(from, to) {
    client.messages
        .create({
            body: `Buenas ${from.nombre}, el sorteo se acaba de hacer y te toca hacerle un regalo a: ${to.nombre}! (tope de $${valorRegalo}) `,
            from: `whatsapp:${numeroAPI}`,
            to: `whatsapp:${from.numero}`
        })
        .then(message => console.log(`Mensaje en camino a: ${from.numero} (${from.nombre})`))
        .done();
}

function sorteo(id) {
    let persona = {};
    do {
        let numero = Math.floor(Math.random() * participantes.length + 1)
        persona = participantes.filter(participante => participante.id == numero && participante.seleccionado == false && participante.id != id)[0]
    } while (persona == undefined);
    persona.seleccionado = true;
    return persona;
}

