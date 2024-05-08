// Crear un div para contener todos los párrafos
const divContenido = document.createElement('div');
divContenido.id = 'contenido';

// Función para agregar un párrafo al div contenido
function agregarParrafo(parent, titulo, contenido) {
    const parrafo = document.createElement('p');
    parrafo.innerText = `${titulo}\n\n${contenido}`;
    parent.appendChild(parrafo);
}

// Información de GitHub Commands
const gitCommands = {
    gitClone: "Clonamos el repositorio remoto debe ser el nuestro",
    gitStatus: "Muestra el estado del repositorio de trabajo",
    gitFetch: "Compara mi último commit con el de la rama remota",
    gitPull: "Trae los cambios desde la rama remota",
    gitPush: "Sube mis cambios a la rama remota"
};

// Información de GitHub Functions
const gitFunctions = {
    fork: "Saco una rama desde el repo master",
    sync: "Sincroniza mi rama con la rama master",
    pullRequest: "Solicitud de integración de mi rama a la master"
};

// Información de Notas de la Consola
const consoleNotes = {
    cd: "Moverse entre directorios",
    cdParent: "Moverse a directorio padre",
    cdChild: "Moverse a directorio hijo",
    dir: "Muestra los directorios hijos",
    mkdir: "Crear directorio",
    cls: "Limpiar consola",
    vsVersion: "Versión Visual Studio",
    gitVersion: "Versión Git",
    nodeVersion: "Versión Node"
};

// Información de Notas de Git
const gitNotes = {
    gitInit: "Inicializar repositorio git",
    gitStatus: "Comprobar estado del repositorio",
    gitBranch: "Listado de ramas",
    gitCheckout: "Cambiar de rama",
    gitCheckoutNew: "Crear rama y cambiarse a ella",
    gitBranchNew: "Crear rama",
    gitAdd: "Añadir cambios al stage",
    gitAddAll: "Añadir todos los cambios al stage",
    gitCommit: "Perpetrar los cambios",
    gitConfigName: "Configurar nombre de usuario",
    gitConfigEmail: "Configurar correo electrónico"
};

// Agregar cada conjunto de información como un párrafo al div contenido
agregarParrafo(divContenido, 'GitHub Commands', Object.entries(gitCommands).map(([key, value]) => `${key}: ${value}`).join('\n'));
agregarParrafo(divContenido, 'GitHub Functions', Object.entries(gitFunctions).map(([key, value]) => `${key}: ${value}`).join('\n'));
agregarParrafo(divContenido, 'Notas de la Consola', Object.entries(consoleNotes).map(([key, value]) => `${key}: ${value}`).join('\n'));
agregarParrafo(divContenido, 'Notas de Git', Object.entries(gitNotes).map(([key, value]) => `${key}: ${value}`).join('\n'));

// Agregar el div contenido al cuerpo del documento
document.body.appendChild(divContenido);
