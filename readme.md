# TrelloJS Project for LaunchX

  * Iniciando proyecto en node: `npm init`.<br>   
  * Agregando dependencia para tener configuracion externalizada: `npm install dotenv --save`. <br>
  * Creando app.js:
    ```javascript
        require('dotenv').config()

        if (!process.env.TOKEN && !process.env.KEY) {
            throw new Error('No hay configuracion con API Key y con Token')
        }
    ```
    <br>
  * Crear el archivo `.env`:
    ```.env
        KEY="TrelloKeyHere"
        TOKEN="Trellotokenhere"
    ```
    <br>
  *Instalando trello: `npm install trello --save`.

  * Agregando ejemplo de como enviar una nueva tarjeta!:

    ```javascript 

        let Trello = require("trello");
        let trello = new Trello(process.env.KEY, process.env.TOKEN);

        let cardTitle = `Card Nueva ${new Date()}`

        trello.addCard(cardTitle, "LaunchX Card Description 2", "6272b9a39df31f38de402825", // aqui agregar idList generado en postman
            function (error, trelloCard) {
                if (error) {
                    console.log('Could not add card:', error);
                }
                else {
                    console.log('Added card:', trelloCard);
                }
            });
    ```
