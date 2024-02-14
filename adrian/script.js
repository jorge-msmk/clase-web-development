

let arrExp;
const arrExp2 = '';

arrExp = [ 'hola', 'mundo'];

console.log (arrExp)
console.log (arrExp[0], '', arrExp[1]);
const gitHubComands =["git clone", "git status","git push", "git fetch" ]
const gitHubComandsDescription = {
    gitClone: "clonamos el repositorio remoto debe ser el nuestro",
    gitStatus: "muestra el estado del repositorio de trabajo",
    gitFetch: "compara mi último comit con el de la rama remota",
    gitPull: "Trae los cambios desde la rama remota",
    gitPush: "sube mis cambios a la rama remota"

};
const gitHubFunctions = [ "fork", "sync", "pull request"];
const gitHubFunctionsDescription = {
    fork: "saco una rama desde el repo master",
    sync: "sincroniza mi rama con la rama master",
    PULLrequest: "solicitud de integración de mi rama a la master"
}


let githubNotes = {
    date: new Date(),
    title: "apuntes de git hub",
    elements: { 
        div: "div",
        header: "header",
        h3: "h3",
        ul:"ul",
        li:"li"
    },
    class: [],
    textElement: {
        keys: [ gitHubComands, gitHubFunctions],
        descriptions: [ gitHubComandsDescription, gitHubFunctionsDescription]
      

        
       
    }
    
}

console.log(Object.keys(githubNotes.elements));

const createElement = (element) => {
    document.createElement(element);
}
    
    function generateHtmlElements(notes) {
        Object.keys(notes.elements). forEach((a) =>{
            createElement(a)
        })
        const main = document.getElementById('main');
      

};

// const generateHtmlElements = () => {

// }