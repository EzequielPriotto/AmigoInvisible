PASOS A SEGUIR PARA EL CORRECTO FUNCIONAMIENTO:

TENER INSTALADO NODE ( para verificarlo utilizar el comando [  node -v ] )
INSTALAR LAS DEPENDECIAS (dotenv & twilio) CON EL COMANDO [  npm init ]

CREARSE O LOGUEARSE EN [ https://www.twilio.com/login ]
IR A [ https://console.twilio.com/ ] AHI SE OBTIENE EL ID DE SU USUARIO Y EL TOKEN

TODAS LAS PERSONAS QUE VAYAN A RECIBIR EL MENSAJE PREVIAMENTE VAN A TENER QUE MANDARLE UN MENSAJE A NUMERO PROPORCIONADO POR TWILIO
EL MENSAJE TIENE QUE SER [ join pond-sense ] ASI LA API DE TWILIO PUEDE MANDAR EL MENSAJE

LLENAR EL ARCHIVO [ participantes.js ] CON LOS DATOS DE LOS PARTICIPANTES
LOS DATOS SON LOS SIGUIENTES:
    {
      id: 1, ---> el id tiene que ser unico de forma creciente
      nombre: 'pepito', ---> nombre del participante (pueden ser nombre y apellido sin problema)
      numero: '+5491122334455', ---> numero del participante, respetar el formato (como en whatsapp con codigo de area)
      seleccionado: false ---> poner en false, se cambia a true una vez salga seleccionado     
    },

UNA VEZ TENGAS LISTA TU LISTA DE PARTICIPANTES, CREAR UN ARCHIVO QUE SE LLAME .env
DENTRO PONER LAS SIGUIENTES VARIABLES DE ENTORNO (RELLENARLAS CON LOS DATOS PROPORCIONADOS POR TWILIO):

USER_ID= ''
TOKEN=''
NUMERO_API='' 
VALOR_REGALO=''


POR ULTIMO, PARA CORRER EL PROGRAMA PONER EN LA TERMINAR EL COMANDO [ npm run program ]

( ACLARACION, SI ALGUNO DE LOS PARTICIPANTES NO ENVIO EL MENSAJE AL NUMERO DE TWILIO O EL NUMERO DEL PARTICIPANTE ESTA MAL ESCRITO, NO RECIBIRA NUNCA EL MENSAJE )
