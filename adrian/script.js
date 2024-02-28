

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
const header = document.createElement('div');

header.innerHTML = "<h1>apuntes</h1>";
main.appendChild(header);

document.body.appendChild(main);



function GitHubCommandsGenerator() {
    const divNotes = document.createElement('div');
    divNotes.classList.add("div-notes")
    const headerCommands = document.createElement('header');
    headerCommands.classList.add('header-commands')
    const commandsDescription = Object.values(GitHubCommandsDescription);

    headerCommands.innerHTML = "<h3>apuntes de gitHub</h3>";

    const listCommands = document.createElement('ul');

    GitHubCommands.forEach( (el,i) => {
        const listElementsCommand = document.createElement('li');
        listElementsCommand.innerHTML = `${el}: ${commandsDescription[i]}`;
        listCommands.appendChild(listElementsCommand);
    })
    divNotes.appendChild(headerCommands)
    divNotes.appendChild(listCommands)
    main.appendChild(divNotes)
}

GitHubCommandsGenerator()


function GitHubFunctionsGenerator() {}