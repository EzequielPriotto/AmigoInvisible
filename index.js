require('dotenv').config()

// Brindados por twilio
const accountSid = process.env.USER_ID;
const authToken = process.env.TOKEN;
const numeroAPI = process.env.NUMERO_API;
const mensaje = process.env.MENSAJE;
const client = require('twilio')(accountSid, authToken);

// Array de los participantes 
const participantes = require('./participantes')
const valorRegalo = process.env.VALOR_REGALO;

participantes.forEach(participante => {
    let sorteado = sorteo(participante.id);
    // console.log(`Buenas ${participante.nombre}, el sorteo se acaba de hacer y te toca hacerle un regalo a: ${sorteado.nombre}! (tope de $5000) `)
    enviarMensaje(participante, sorteado)
})

function enviarMensaje(from, to) {
    let body = mensaje;
    body = body.replace('NOMBRE_FROM', from.nombre)
    body = body.replace('NOMBRE_TO', to.nombre)
    body = body.replace('VALOR', valorRegalo)
    console.log(body)
    client.messages
        .create({
            body: body,
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

