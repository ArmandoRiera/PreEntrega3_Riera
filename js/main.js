alert("¡Bienvenido al ayudante para juegos de mesa!");

const listOfPlayersExample = [
    {
        playerName: "Carlos",
        xpLevel: 1,
        playerAge: 28,
        level: "Novato",
        id: 1
    },
    {
        playerName: "Ana",
        xpLevel: 3,
        playerAge: 31,
        level: "Veterano",
        id: 2
    },
    {
        playerName: "Luis",
        xpLevel: 4,
        playerAge: 27,
        level: "Profesional",
        id: 3
    },
    {
        playerName: "María",
        xpLevel: 2,
        playerAge: 30,
        level: "Regular",
        id: 4
    },
    {
        playerName: "Jorge",
        xpLevel: 1,
        playerAge: 25,
        level: "Novato",
        id: 5
    },
    {
        playerName: "Gabriela",
        xpLevel: 2,
        playerAge: 33,
        level: "Regular",
        id: 6
    },
    {
        playerName: "Ricardo",
        xpLevel: 4,
        playerAge: 35,
        level: "Profesional",
        id: 7
    },
    {
        playerName: "Valentina",
        xpLevel: 3,
        playerAge: 29,
        level: "Veterano",
        id: 8
    }
];

// Clase constructora de jugador
class Player {
    constructor(playerName, xpLevel, playerAge) {
        this.playerName = playerName;
        this.xpLevel = xpLevel;
        this.playerAge = playerAge;
        this.level = this.levelDefinition()
        this.id = this.idDefinition()
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
    idDefinition() {

        console.log("El id del nuevo jugador es " + (listOfPlayers.length + 1))

        return (listOfPlayers.length + 1)
    }
};

// // Array de participantes
const listOfPlayers = listOfPlayersExample;
// const listOfPlayers = [];

listOfPlayers.forEach(el => {

    // Ciclo para renderizar jugadores de ejemplo
    const cardOfPlayers = document.getElementById("card-players")

    const playerInfo = document.createElement("div");
    playerInfo.className = "card"

    const playerInfoName = document.createElement("button");
    playerInfoName.className = "btn btn-primary";
    playerInfoName.type = "button";
    playerInfoName.setAttribute("data-bs-toggle", "collapse");
    playerInfoName.setAttribute("data-bs-target", "#collapseExample" + (listOfPlayers.indexOf(el)));
    playerInfoName.setAttribute("aria-expanded", "false");
    playerInfoName.setAttribute("aria-controls", "collapseExample" + (listOfPlayers.indexOf(el)));
    playerInfoName.innerText = el.playerName;

    const playerInfoContainer = document.createElement("div");
    playerInfoContainer.className = "collapse";
    playerInfoContainer.id = "collapseExample" + (listOfPlayers.indexOf(el));

    const playerInfoList = document.createElement("ul");
    playerInfoList.className = "list-group";

    const playerInfoLevel = document.createElement("li");
    playerInfoLevel.className = "list-group-item";
    playerInfoLevel.innerText = `Nivel ${el.xpLevel} (${el.level})`;

    const playerInfoAge = document.createElement("li");
    playerInfoAge.className = "list-group-item";
    playerInfoAge.innerText = `${el.playerAge} años`;

    cardOfPlayers.appendChild(playerInfo)
    playerInfo.appendChild(playerInfoName);
    playerInfo.appendChild(playerInfoContainer);
    playerInfoContainer.appendChild(playerInfoList);
    playerInfoList.appendChild(playerInfoLevel);
    playerInfoList.appendChild(playerInfoAge);

    // Ciclo para agregar jugadores a lista de editar o eliminar jugadores
    const editPlayerList = document.getElementById("editPlayerSelect")

    const editAddListItem = document.createElement("option")
    editAddListItem.value = `${el.id}`
    editAddListItem.innerText = el.playerName

    editPlayerList.appendChild(editAddListItem)
})

const xpLvlConfirm = true

const playerAgeConfirm = true

function addPlayer(xpLvlConfirm, playerAgeConfirm) {
    const playerName = document.getElementById("playerNameInput")
    let xpLevel;
    let playerAge;

    if (xpLvlConfirm) {
        xpLevel = document.getElementById("playerXpLevelSelect");
    };

    if (playerAgeConfirm) {
        playerAge = document.getElementById("playerAgeInput");
    };

    const newPlayer = new Player(playerName.value, parseInt(xpLevel.value), playerAge.value);

    console.log(newPlayer)

    listOfPlayers.push(newPlayer)

    console.log(listOfPlayers)

    // Rederizado de nuevo jugador
    const cardOfPlayers = document.getElementById("card-players")

    const playerInfo = document.createElement("div");
    playerInfo.className = "card"

    const playerInfoName = document.createElement("button");
    playerInfoName.className = "btn btn-primary";
    playerInfoName.type = "button";
    playerInfoName.setAttribute("data-bs-toggle", "collapse");
    playerInfoName.setAttribute("data-bs-target", "#collapseExample" + (listOfPlayers.length));
    playerInfoName.setAttribute("aria-expanded", "false");
    playerInfoName.setAttribute("aria-controls", "collapseExample" + (listOfPlayers.length));
    playerInfoName.innerText = newPlayer.playerName;

    const playerInfoContainer = document.createElement("div");
    playerInfoContainer.className = "collapse";
    playerInfoContainer.id = "collapseExample" + (listOfPlayers.length);

    const playerInfoList = document.createElement("ul");
    playerInfoList.className = "list-group";

    const playerInfoLevel = document.createElement("li");
    playerInfoLevel.className = "list-group-item";
    playerInfoLevel.innerText = `Nivel ${newPlayer.xpLevel} (${newPlayer.level})`;

    const playerInfoAge = document.createElement("li");
    playerInfoAge.className = "list-group-item";
    playerInfoAge.innerText = `${newPlayer.playerAge} años`;

    cardOfPlayers.appendChild(playerInfo)
    playerInfo.appendChild(playerInfoName);
    playerInfo.appendChild(playerInfoContainer);
    playerInfoContainer.appendChild(playerInfoList);
    playerInfoList.appendChild(playerInfoLevel);
    playerInfoList.appendChild(playerInfoAge);

    // Ciclo para agregar jugadores a lista de editar o eliminar jugadores
    const editPlayerList = document.getElementById("editPlayerSelect")

    const editAddListItem = document.createElement("option")
    editAddListItem.value = `${newPlayer.id}`
    editAddListItem.innerText = newPlayer.playerName

    editPlayerList.appendChild(editAddListItem)

    // Limpiar formulario para agregar un nuevo jugador
    playerName.value = ""
    xpLevel.value = ""
    playerAge.value = ""
}

let addPlayerForm = document.getElementById("addPlayerForm");
let addPlayerSubmit = document.getElementById("addPlayerSubmit")

// // Control para no actualizar página cuando se agregue un nuevo jugador
addPlayerForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

addPlayerSubmit.addEventListener("click", () => addPlayer(xpLvlConfirm, playerAgeConfirm)

)

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

// let menuOption;

// let messageListOfPlayers;

// do {
//     menuOption = selectOption("Elija una opción del menú:\n1) Agregar jugadores a la partida\n2) Ver jugadores de la partida\n3) Editar o eliminar jugador de la partida\n4) Generar grupos para la partida\n5) Ver grupos de la partida", 5);

//     switch (menuOption) {
//         // Opción para agregar jugadores (en cualquier momento de la partida)
//         case 1:
//             // Variables para definir si se va a tomar en cuenta la experiencia y/o la edad de los jugadores (solo aplican 1 vez por partida)
//             if (listOfPlayers.length === 0) {

//                 alert("Antes de empezar necesitamos saber dos cosas importantes")

//                 xpLvlConfirm = confirm("¿Deseas tomar en cuenta la experiencia de los jugadores?");

//                 playerAgeConfirm = confirm("¿Desea tomar en cuenta la edad de los jugadores?");

//                 console.log(xpLvlConfirm);

//                 console.log(playerAgeConfirm);
//             };

//             if (listOfPlayers.length === 0) {
//                 alert("Agreguemos los jugadores de la partida");
//             }

//             // Ciclo para agregar jugadores a la partida
//             do {

//                 const newPlayer = addPlayer(xpLvlConfirm, playerAgeConfirm);

//                 console.log(newPlayer);

//                 listOfPlayers.push(newPlayer);

//             } while (confirm("Desea agregar un nuevo jugador (si deseas volver al menú selecciona Cancel)"));

//             console.log(listOfPlayers);

//             break
//         case 2:

//             if (listOfPlayers.length === 0) {
//                 alert("¡No has agregado jugadores aún!");
//             } else {
//                 messageListOfPlayers = showListofPlayers(xpLvlConfirm, playerAgeConfirm);

//                 alert("Son en total " + listOfPlayers.length + " participantes:\n" + messageListOfPlayers);

//                 console.log("Son en total " + listOfPlayers.length + " participantes:\n" + messageListOfPlayers);
//             };

//             break
//         case 3:
//             if (listOfPlayers.length === 0) {
//                 alert("¡No has agregado jugadores aún!");
//             } else {
//                 let editOrDeletePlayerOption = selectOption("Seleccione la acción a realizar:\n1) Editar jugador\n2) Eliminar jugador", 2)
//                 switch (editOrDeletePlayerOption) {
//                     case 1:

//                         messageListOfPlayers = showListofPlayers(xpLvlConfirm, playerAgeConfirm);

//                         let editPlayerOption = selectOption("Seleccione el jugador que desea editar:\n" + messageListOfPlayers, listOfPlayers.length)

//                         // Función para modificar elemento seleccionado mendiante variable editPlayerOption
//                         editSelectedPlayer(xpLvlConfirm, playerAgeConfirm, editPlayerOption);

//                         break
//                     case 2:

//                         messageListOfPlayers = showListofPlayers(xpLvlConfirm, playerAgeConfirm);

//                         // Variable para buscar índice del jugador a eliminar en el vector listOfPlayers
//                         let deletePlayerOption = selectOption("Seleccione el jugador que desea eliminar:\n" + messageListOfPlayers, listOfPlayers.length)

//                         if (confirm("Seguro que desea eliminar al jugador " + listOfPlayers[deletePlayerOption - 1].playerName)) {
//                             listOfPlayers.splice(deletePlayerOption - 1, 1)
//                             alert("El jugador ha sido eliminado con éxito")
//                         }

//                         break
//                     case null:
//                         alert("Volvemos al menú principal")
//                         break
//                 }
//             };
//             break
//         case 4:

//             // Algoritmo para asegurar nivelación de equipos según experiencia (en desarrollo)

//             // const list = [4, 2, 3, 3, 1, 4, 3, 2]
//             // let sum = 0;
//             // let n = list.length;
//             // sum = list.reduce((acc, curr) => acc += curr, 0)

//             // let found = false;
//             // let lsum = 0;
//             // for (let i = 0; i < n - 1; i++) {
//             //     lsum += list[i];
//             //     let rsum = sum - lsum;
//             //     // If averages of arr[0...i]
//             //     // and arr[i+1..n-1] are same.
//             //     // To avoid floating point problems
//             //     // we compare "lsum(n-i+1)"
//             //     // and "rsum(i+1)" instead of
//             //     // "lsum/(i+1)" and "rsum/(n-i+1)"
//             //     const avgC = Math.abs((lsum / (i + 1)) - (rsum / (n - i))) <= 2
//             //     if (avgC) {
//             //         console.log("From (0 " + i + ") to (" + (i + 1) + " " + (n - 1) + ")\n");
//             //         found = true;
//             //     }
//             // }
//             // // If no subarrays found
//             // if (found == false) console.log('Not found')
//             // alert(`${found} - ${lsum} - ${sum}`)

//             alert("Opción aún en desarrollo")
//             break
//         case 5:
//             alert("Opción aún en desarrollo")
//             break
//         case null:
//             alert("¡Nos vemos!")
//             break
//     };

// } while (menuOption !== null);


