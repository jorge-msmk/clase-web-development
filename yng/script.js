


let arrExp 
const arrExp2 = "";

arrExp = [" hola", "mundo"]

console.log(arrExp); 

console.log(arrExp[0], "", arrExp[1])

const gitHubComands = ["git clone", "git status", "git fetch", "git pull", "git push"];

const gitHubComandsDescription = {
    gitClone: "clonamos el repositorio remoto debe ser el nusetro",
    gitStatus: "muestra el estado del repositorio de trabajo y del área del entorno de ensayo",
    gitFetch: "Compara mi último commit con el de la rama remota",
    gitPull: "Trae los cambios desde la rama remota",
    gitPush: "Sube mis cambios a la rama remota"
    };

const gitHubFuctions = ["Fork", "sync", "pull request"];
const gitHubFuctionsDescription = {
    fork: "saca una rama desde el repo master",
    sync: "sincroniza mi rama con la ramaa master",
    pullRequest: "solictud de integración de mi a la master"

}

let gitHubNotes = {
    dia: new Date(), 
    tittle: "Apuntes de git hub",
    elements: {
        div: "div",
        header: "header",
        h3: "h3",
        ul: "ul",
        li: "li"

    },
    class: [],
    textElement: {
        keys: [gitHubComands, gitHubFuctions ],
        description: [gitHubComandsDescription, gitHubFuctionsDescription]

    }
}
console.log(gitHubNotes.elements)
const createElement = (element) => {
    document.createElement(element)
}

function generateHtmlElements (notes) {
    notes.elements
    createElement()
 

};
