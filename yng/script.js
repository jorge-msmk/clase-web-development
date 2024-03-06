const GitHubCommands = ["git clone", "git status", "git fetch", "git pull", "git push"];
const GitHubCommandsDescription = {
    gitClone: "Clonamos el repositorio remoto debe ser el nuestro",
    gitStatus: "Muestra el estado del repositorio de trabajo",
    gitFetch: "Compara mi último commit con el de la rama remota",
    gitPull: "Trae los cambios desde la rama remota",
    gitPush: "Sube mis cambios a la rama remota"
};
const GitHubFunctions = ["fork", "sync", "pull request"];

const GitHubFunctionsDescription = {
    fork: "saco una rama desde el repo master",
    sync: "sincroniza mi rama con la rama master",
    pullRequest: "solicitud de integración de mi rama a la master"
};

const main = document.createElement('main');
main.classList.add("main");
const header = document.createElement('header');
header.classList.add("main-header")

header.innerHTML = "<h1>Apuntes github<h1>";
main.appendChild(header);

document.body.appendChild(main);

function gitHubComandsGenerator() {

    const divNotes = document.createElement("div");
    divNotes.classList.add("div-Notes")
    const headerCommands = document.createElement('header');

    headerCommands.innerHTML = "<h3> gitHub Commands<h3>";

    const listCommands = document.createElement("ul");

    const commandsDescription = Object.values(GitHubCommandsDescription);

    GitHubCommands.forEach((el, i) => {
        const listElementsCommands = document.createElement("li");
        listElementsCommands,classList.add("list-element")
        listElementsCommands.innerHTML = `${el}: ${commandsDescription[i]}`;
        listCommands.appendChild(listElementsCommands);
    })

    divNotes.appendChild(headerCommands)
    divNotes.appendChild(listCommands)
    main.appendChild(divNotes)

}

gitHubComandsGenerator()


function GitHubFunctionsGenerator () {}