// Clase constructora de jugador
class Player {
    constructor(playerName, xpLevel, playerAge) {
        this.playerName = playerName;
        this.xpLevel = xpLevel;
        this.playerAge = playerAge;
        this.level = this.levelDefinition()
    };
    levelDefinition() {
        switch (this.xpLevel) {
            case 1:
                return "Novato";
            case 2:
                return "Regular";
            case 3:
                return "Veterano";
            case 4:
                return "Profesional";
            default:
                return "Desconocido"
        };
    };
};

// Array de participantes
const listOfPlayers = [];

// Función para elegir una opción del listado (valida si se ingresa texto o decimal)
function selectOption(textOption, numOptions) {
    do {
        const newOption = prompt(textOption);

        if (newOption === null) {
            return null
        }

        const option = newOption.replace(",", ".");
        const numberOption = parseFloat(option);

        if (!isNaN(numberOption) && Number.isInteger(numberOption) && numberOption >= 1 && numberOption <= numOptions) {
            return numberOption;
        } else {
            alert("Por favor, ingrese una opción válida (del 1 al " + numOptions + ")");
        };

    } while (true);
};

// Función para validar si el número ingresado es número entero
function intValidation(textOption) {
    do {
        const newNumber = prompt(textOption);

        if (newNumber === null) {
            return null
        }

        const number = newNumber.replace(",", ".");
        const enteredNumber = parseFloat(number);

        if (!isNaN(enteredNumber) && Number.isInteger(enteredNumber)) {
            return enteredNumber;
        } else {
            alert("Por favor ingrese un número entero");
        };

    } while (true);
}


// Función para agregar jugadores
function addPlayer(xpLvlConfirm, playerAgeConfirm) {

    const playerName = prompt("¿Cuál es el nombre del jugador?");
    let xpLevel;
    let playerAge;

    do {
        if (xpLvlConfirm) {
            xpLevel = selectOption("¿Qué experiencia tiene el jugador?\n1) Novato\n2) Regular\n3) Veterano\n4) Profesional", 4);
        };
    } while (xpLevel === null);

    do {
        if (playerAgeConfirm) {
            playerAge = intValidation("¿Qué edad tiene el jugador?");
        };

    } while (playerAge === null);

    const newPlayer = new Player(playerName, xpLevel, playerAge);

    return newPlayer;
};

// Función para mostrar lista de jugadores
function showListofPlayers(xpLvlConfirm, playerAgeConfirm) {
    let messageListOfPlayers = "";

    if ((xpLvlConfirm) && (playerAgeConfirm)) {
        listOfPlayers.forEach(el => { messageListOfPlayers += (listOfPlayers.indexOf(el) + 1) + ") " + el.playerName + ", es nivel " + el.level + " y tiene " + el.playerAge + " años\n" });
    } else if (!xpLvlConfirm && playerAgeConfirm) {
        listOfPlayers.forEach(el => { messageListOfPlayers += (listOfPlayers.indexOf(el) + 1) + ") " + el.playerName + " y tiene " + el.playerAge + " años\n" });
    } else if (xpLvlConfirm && !playerAgeConfirm) {
        listOfPlayers.forEach(el => { messageListOfPlayers += (listOfPlayers.indexOf(el) + 1) + ") " + el.playerName + " y es nivel " + el.level + "\n" });
    } else {
        listOfPlayers.forEach(el => { messageListOfPlayers += (listOfPlayers.indexOf(el) + 1) + ") " + el.playerName + "\n" });
    };

    return messageListOfPlayers;

};

// Función para editar jugador
function editSelectedPlayer(xpLvlConfirm, playerAgeConfirm, editPlayerOption) {

    if ((xpLvlConfirm) && (playerAgeConfirm)) {
        listOfPlayers[editPlayerOption - 1].playerName = prompt("¿Cuál es el nombre del jugador?", listOfPlayers[editPlayerOption - 1].playerName)
        listOfPlayers[editPlayerOption - 1].xpLevel = selectOption("¿Qué experiencia tiene el jugador?\n1) Novato\n2) Regular\n3) Veterano\n4) Profesional", 4);
        listOfPlayers[editPlayerOption - 1].level = listOfPlayers[editPlayerOption - 1].levelDefinition()
        listOfPlayers[editPlayerOption - 1].playerAge = intValidation("¿Qué edad tiene el jugador?");
    } else if (!xpLvlConfirm && playerAgeConfirm) {
        listOfPlayers[editPlayerOption - 1].playerName = prompt("¿Cuál es el nombre del jugador?", listOfPlayers[editPlayerOption - 1].playerName)
        listOfPlayers[editPlayerOption - 1].playerAge = intValidation("¿Qué edad tiene el jugador?");
    } else if (xpLvlConfirm && !playerAgeConfirm) {
        listOfPlayers[editPlayerOption - 1].playerName = prompt("¿Cuál es el nombre del jugador?", listOfPlayers[editPlayerOption - 1].playerName)
        listOfPlayers[editPlayerOption - 1].xpLevel = selectOption("¿Qué experiencia tiene el jugador?\n1) Novato\n2) Regular\n3) Veterano\n4) Profesional", 4);
        listOfPlayers[editPlayerOption - 1].level = listOfPlayers[editPlayerOption - 1].levelDefinition()
    } else {

    };

};

let xpLvlConfirm;

let playerAgeConfirm;

let menuOption;

let messageListOfPlayers;

alert("¡Bienvenido al ayudante para juegos de mesa!");

do {
    menuOption = selectOption("Elija una opción del menú:\n1) Agregar jugadores a la partida\n2) Ver jugadores de la partida\n3) Editar o eliminar jugador de la partida\n4) Generar grupos para la partida\n5) Ver grupos de la partida", 5);

    switch (menuOption) {
        // Opción para agregar jugadores (en cualquier momento de la partida)
        case 1:
            // Variables para definir si se va a tomar en cuenta la experiencia y/o la edad de los jugadores (solo aplican 1 vez por partida)
            if (listOfPlayers.length === 0) {

                alert("Antes de empezar necesitamos saber dos cosas importantes")

                xpLvlConfirm = confirm("¿Deseas tomar en cuenta la experiencia de los jugadores?");

                playerAgeConfirm = confirm("¿Desea tomar en cuenta la edad de los jugadores?");

                console.log(xpLvlConfirm);

                console.log(playerAgeConfirm);
            };

            if (listOfPlayers.length === 0) {
                alert("Agreguemos los jugadores de la partida");
            }

            // Ciclo para agregar jugadores a la partida
            do {

                const newPlayer = addPlayer(xpLvlConfirm, playerAgeConfirm);

                console.log(newPlayer);

                listOfPlayers.push(newPlayer);

            } while (confirm("Desea agregar un nuevo jugador (si deseas volver al menú selecciona Cancel)"));

            console.log(listOfPlayers);

            break
        case 2:

            if (listOfPlayers.length === 0) {
                alert("¡No has agregado jugadores aún!");
            } else {
                messageListOfPlayers = showListofPlayers(xpLvlConfirm, playerAgeConfirm);

                alert("Son en total " + listOfPlayers.length + " participantes:\n" + messageListOfPlayers);

                console.log("Son en total " + listOfPlayers.length + " participantes:\n" + messageListOfPlayers);
            };

            break
        case 3:
            if (listOfPlayers.length === 0) {
                alert("¡No has agregado jugadores aún!");
            } else {
                let editOrDeletePlayerOption = selectOption("Seleccione la acción a realizar:\n1) Editar jugador\n2) Eliminar jugador", 2)
                switch (editOrDeletePlayerOption) {
                    case 1:

                        messageListOfPlayers = showListofPlayers(xpLvlConfirm, playerAgeConfirm);

                        let editPlayerOption = selectOption("Seleccione el jugador que desea editar:\n" + messageListOfPlayers, listOfPlayers.length)

                        // Función para modificar elemento seleccionado mendiante variable editPlayerOption
                        editSelectedPlayer(xpLvlConfirm, playerAgeConfirm, editPlayerOption);

                        break
                    case 2:

                        messageListOfPlayers = showListofPlayers(xpLvlConfirm, playerAgeConfirm);

                        // Variable para buscar índice del jugador a eliminar en el vector listOfPlayers
                        let deletePlayerOption = selectOption("Seleccione el jugador que desea eliminar:\n" + messageListOfPlayers, listOfPlayers.length)

                        if (confirm("Seguro que desea eliminar al jugador " + listOfPlayers[deletePlayerOption - 1].playerName)) {
                            listOfPlayers.splice(deletePlayerOption - 1, 1)
                            alert("El jugador ha sido eliminado con éxito")
                        }

                        break
                    case null:
                        alert("Volvemos al menú principal")
                        break
                }
            };
            break
        case 4:

            // Algoritmo para asegurar nivelación de equipos según experiencia (en desarrollo)

            // const list = [4, 2, 3, 3, 1, 4, 3, 2]
            // let sum = 0;
            // let n = list.length;
            // sum = list.reduce((acc, curr) => acc += curr, 0)

            // let found = false;
            // let lsum = 0;
            // for (let i = 0; i < n - 1; i++) {
            //     lsum += list[i];
            //     let rsum = sum - lsum;
            //     // If averages of arr[0...i]
            //     // and arr[i+1..n-1] are same.
            //     // To avoid floating point problems
            //     // we compare "lsum(n-i+1)"
            //     // and "rsum(i+1)" instead of
            //     // "lsum/(i+1)" and "rsum/(n-i+1)"
            //     const avgC = Math.abs((lsum / (i + 1)) - (rsum / (n - i))) <= 2
            //     if (avgC) {
            //         console.log("From (0 " + i + ") to (" + (i + 1) + " " + (n - 1) + ")\n");
            //         found = true;
            //     }
            // }
            // // If no subarrays found
            // if (found == false) console.log('Not found')
            // alert(`${found} - ${lsum} - ${sum}`)

            alert("Opción aún en desarrollo")
            break
        case 5:
            alert("Opción aún en desarrollo")
            break
        case null:
            alert("¡Nos vemos!")
            break
    };

} while (menuOption !== null);


