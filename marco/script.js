
let arrExp;
const arrExp2 = '';

arrExp = [" hola", "mundo"];

console.log(arrExp);

console.log(arrExp[0], ' ', arrExp[1]);

const gitHubComands = ["git clone", "git status", "git pull", "git push", "git fetch"];
const gitHubComandsDescription = {
    gitClone: "clonamos el repositorio remoto debe ser el nuestro",
    gitStatus: "muestra el estado del repostorio de trabajo",
    gitFetch: "Compara mi último commit con el de la rama remota",
    gitPull: "trae los cambion desde la rama remota",
    gitPush: "sube mis cambios a la rama remota",
    
};
const gitHubFunctions = ["fork","sync", "pull request"];

const gitHubFunctionsDescription = {
    fork: "saco una rama desde el repo master",
    sync: "sincroniza mi rama con la rama master",
    pullRequest: "solicitud de integracón de mi rama a la master"
};


let gitHubNote = {
    date: new Date(),
    title: "Apuntes de git hub",
    elements:{
        div: "div",
        header: 'header',
        h3:"h3",
        ul: "ul",
        li: "li"

    },
    class: [],
    textElement: {
        keys: [gitHubComands, gitHubFunctions],
        descriptions:[gitHubComandsDescription, gitHubFunctionsDescription]
    }
}
    
function generateHtmlElements() {
    document.createElement("div");
    document.createElement("div");
};


