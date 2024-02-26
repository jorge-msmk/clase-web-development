


let arrExp;
const ArrExp2 = '';

arrExp = ['hola', 'mundo'];

console.log(arrExp);

console.log(arrExp[0], ' ', arrExp[1])

const GitHubComands = ["git clone", "git status", "git fetch", "git pull", "git push"];
const GitHubComandsDescription = {
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

let gitHubNotes = {
    date: new Date(),
    title: "Apuntes de git hub",
    elements: {
        div: "div6666666",
        header: "header",
        h3: "h3",
        ul: "ul",
        li: "li"
    },
    class: [],
    textElements: {
        keys: [GitHubComands, GitHubFunctions],
        descriptions:[GitHubComandsDescription, GitHubFunctionsDescription]
    }

}

// console.log(Object.keys(gitHubNotes.elements));
// console.log(gitHubNotes.elements);

// const createElement = (element) => {
//     const elementCreated = document.createElement(element);
//     elementCreated.setAttribute('id', element);
//     console.log(elementCreated)
//     return elementCreated;
// };

// const main = document.getElementById("main");
// function generateHtmlElements(notes) {
//     const main = document.getElementsByClassName("main");
//     // console.log(main, 'main')
//     const elementsCreated = Object.keys(notes.elements).map((a) => {
//         return createElement(a);
//     });
//     elementsCreated.map(el => {
//         if(el.id === 'div') {
//             main.appendChild(el)
//         } else if ( el.id === "header" || "ul") {
//             const div = getElementById('div')
//             div.appendChild(el)
//         } else if ( el.id === "h3") {
//             const header = getElementById("header")
//             header.appendChild(el)
//         } else {
//             const ul = getElementById("ul")
//             ul.appendChild(el)
//         }
//         console.log(el.id)
//     });
//     // console.log(elementsCreated);
// }; 

// generateHtmlElements(gitHubNotes);

// const generateHtmlElements = () => {

// }



const main = document.createElement('main');
const son = document.createElement('div');

son.innerHTML = "<h1>Hello world<h1>";
main.appendChild(son);

document.body.appendChild(main);

console.log(document.body);
console.log(document.body.main);
