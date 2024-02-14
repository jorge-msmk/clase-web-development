


let arrExp;
const arrExp2 = '';

arrExp = ['hola','mundo'];
console.log(arrExp);

console.log(arrExp[0],arrExp[1]);

const GitHubComands = ["git clone", "git status", "git fetch", "git pull", "git push"];
const GitHubComandsDescription = {

    gitClone: "clonamos el repositorio remoto debe ser el nuestro",
    gitStatus: "Muestra el estado del repositorio de trabajo",
    gitFetch: "Compara mi último commit con el de la rama remota",
    gitPull: "Trae los cambios desde la rama remota",
    gitPush: "Sube mis cambios desde la rama remota",

};

const GitHupFuctions = ["fork", "synk", "pull resquets"];
const GitHupFuctionsDescription = {

    fork: "Saco una rama desde el repo master",
    synk: "Sincroniza mi rama con la rama master",
    pullresquets: "Solicitud de mi rama a la rama master",

};




let gitHubNotes = {
    date: new Date(),
    title:"Apuntes de Git Hub",
    elements: {
        div:"div",
        header:"header",
        h3:"h3",
        ul:"ul",
        li:"li",

    },
    class: [],
    textElement: {

        Keys: [GitHubComands, GitHupFuctions, ],
        descriptons: [GitHubComandsDescription, GitHupFuctionsDescription]
    }


}

console.log(gitHubNotes.elements);

const createElement = (element) => {
    document.createElement("div");

};

function generateHtmlElements (notes) {
   notes.elements
   createElement("");
   
};


//const generateHtmlElements = () => {


//