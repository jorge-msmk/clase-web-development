
const GitHubCommands = ["git clone", "git status", "git fetch", "git pull", "git push", "git init", "git branch", "git checkout [nombre rama]", "git checkout -b [nombre rama]", "git branch [nombre rama]", "git add [path/nombre-archivo]", "git add .", "git commit -m 'mensaje'", "git config --global user.name 'FIRST_NAME LAST_NAME'", "git config --global user.email 'email@email.com'"];
const GitHubCommandsDescription = {
    gitClone: "clonamos el repositorio remoto debe ser el nuestro",
    gitStatus: "muestra el estado del repositorio de trabajo",
    gitFetch: "compara mi último commit con el de la rama remota",
    gitPull: "trae los cambios desde la rama remota",
    gitPush: "sube mis cambios a la rama remota",
    gitInit: "inicializar repositorio git",
    gitBranch: "listado ramas",
    gitCheckout: "cambiar rama",
    gitCheckout2: "crear rama y cambiarse a ella",
    gitBranch2: "crear rama",
    gitAdd: "añadir al stage (limbo) la carpeta",
    gitAdd2: "añadir al stage todo",
    gitCommit: "perpetrar los cambios para que haya seguimiento",
    gitConfig: "configurar user name",
    gitConfig2: "configurar email"
};

const GitHubFunctions = ["fork", "sync", "pull request", "cd", "cd ..", "cd 'nombre directorio'", "dir", "mkdir", "cls", "vs -v", "git -v", "node -v"];
const GitHubFunctionsDescription = {
    fork: "saco una rama desde el repo master",
    sync: "sincroniza mi rama con la rama master",
    pullRequest: "solicitud de integración de mi rama a la master",
    cd: "moverse entre carpetas",
    cd2: "moverse a directorio madre",
    cd3: "moverse a directorio hija",
    dir: "muestra los directorios hijos",
    mkdir: "crear directorio",
    cls: "limpiar consola",
    vs: "versión visual studio",
    git: "versión git",
    node: "versión node"
};

const main = document.createElement('main');
main.classList.add("main");
const header = document.createElement('header');
header.classList.add("main-header");

header.innerHTML = "<h1>Apuntes<h1>";
main.appendChild(header);
document.body.appendChild(main);

function GitHubComandsGenerator() {

    const divNotes = document.createElement('div');
    divNotes.classList.add('divNotes');

    const headerCommands = document.createElement('header');
    headerCommands.classList.add('header-Commands');
    headerCommands.innerHTML = "<h2>GitHub Commands</strong><h2>";

    const listCommands = document.createElement('ul');
    listCommands.classList.add("list");

    const commandsDescriptions = Object.values(GitHubCommandsDescription);

    GitHubCommands.forEach((el, i) => {
        const listElementCommand = document.createElement('li');
        listElementCommand.innerHTML = `<strong>${el}:</strong> ${commandsDescriptions[i]}.`;
        listCommands.appendChild(listElementCommand);
    })

    divNotes.appendChild(headerCommands);
    divNotes.appendChild(listCommands);
    main.appendChild(divNotes);

}

GitHubComandsGenerator();

function GitHubFunctionsGenerator(){
    const divNotes = document.createElement('div');
    divNotes.classList.add('divNotes');

    const headerFunctions = document.createElement('header');
    headerFunctions.classList.add('header-Functions');
    headerFunctions.innerHTML = "<h2>GitHub Functions<h2>";

    const listFunctions = document.createElement('ul');
    listFunctions.classList.add("list");

    const functionsDescriptions = Object.values(GitHubFunctionsDescription);

    GitHubFunctions.forEach((el, i) => {
        const listElementFunction = document.createElement('li');
        listElementFunction.innerHTML = `<strong>${el}:</strong> ${functionsDescriptions[i]}.`;
        listFunctions.appendChild(listElementFunction);
    })

    divNotes.appendChild(headerFunctions);
    divNotes.appendChild(listFunctions);
    main.appendChild(divNotes);
}

GitHubFunctionsGenerator();