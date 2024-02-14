


let arrExp;
const arrExp2 = '';

arrExp = [" hola", "mundo"];

console.log(arrExp);

console.log( arrExp[0], ' ', arrExp[1])

const GitHubComands = ["git clone","git status","git pull","git push","git fetch"];
const GitHubComandsDescription = {
    gitClone: " clonamos el repositorio remoto debe ser el nuestro",
    gitStatus: " muestra el estado del repositorio de trabajo",
    gitFetch: "Compara mui ultimo commit con el de la remota",
    gitPull: "Trae los cambios desde la rama remota",
    gitPush: "Sube mis cambios a la rama remota",

};
const GitHubFunctions = ["fork", "sync","pull request"];
const GitHubFunctionsDescription = {
    fork: "saco una rama desde el repo master",
    sync: "sincroniza mi rama con la rama master",
    pullRequest: "solicitud de integracion de mi rama a la master"
};


let githubNotes = {
    date: new Date(),
    title: "Apuntes de git hub",
    elements: {
        div: "div",
        header: "header",
        h3: "h3",
        ul: "ul",
        li: "li"

    },
    class:[],
    textElements: {
        keys:[GitHubComands, GitHubFunctions],
        descriptions: [GitHubComandsDescription, GitHubFunctionsDescription]
    }
}
console.log(githubNotes.elements);
const createElement = (element) => {
    document.craateElement(element)
};

function generateHtmlElements (notes) {
    Object.key (notes.elements).forEach((a) => {
        createElement(a);

    })
    const main = document.getElementById("main")
    };



// const generateHtmlElements = () => {

// }




