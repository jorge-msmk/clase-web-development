


let arrExp;
const ArrExp2 = '';

arrExp = ['hola', 'mundo'];

console.log(arrExp);

console.log(arrExp[0], ' ', arrExp[1])

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
const header = document.createElement('header');

header.innerHTML = "<h3>Apuntes GitHub<h3>";
main.appendChild(header);
document.body.appendChild(main);


function GitHubCommandsGenerator() {
    const headerCommands = document.createElement('header');

    headerCommands.innerHTML = "<h3>gitHub Commands</h3>";

    const listCommands = document.createElement('ul');

    const commandsDescription = Object.values(GitHubCommandsDescription);

    GitHubCommands.forEach((el, i) => {
        const listElementCommand = document.createElement('li');
        listElementCommand.innerHTML = `${el}: ${commandsDescription[i]}`;
        listCommands.appendChild(listElementCommand);
    })

    main.appendChild(listCommands);
}

GitHubCommandsGenerator();