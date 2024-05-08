document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

  
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Apuntes de ibra';
    header.appendChild(h1);
    body.appendChild(header);

    
    const main = document.createElement('main');
    main.id = 'content';
    body.appendChild(main);

   
    const gitCommands = [
        { command: 'git init', description: 'Inicializar repositorio git' },
        { command: 'git status', description: 'Comprobar el estado del repositorio' },
        { command: 'git branch', description: 'Listado ramas' },
        { command: 'git checkout [nombre rama]', description: 'Cambiar rama' },
        { command: 'git checkout -b [nombre rama]', description: 'Crear rama y cambiarse a ella' },
        { command: 'git add [path/nombre-archivo]', description: 'Añadir al stage (limbo) la carpeta' },
        { command: 'git commit -m "mensaje"', description: 'Perpetrar los cambios para que haya seguimiento' },
        { command: 'git config --global user.name "FIRST_NAME LAST_NAME"', description: 'Configurar user.name' },
        { command: 'git config --global user.email "email@email.com"', description: 'Configurar email' }
    ];

    
    const gitCommandsSection = createSection('Notas Git', gitCommands);
    main.appendChild(gitCommandsSection);

    
    const consoleNotes = [
        { note: 'cd', description: 'Moverse entre directorios' },
        { note: 'cd ..', description: 'Moverse a directorio padre' },
        { note: 'cd "nombre carpeta"', description: 'Moverse a directorio hijo' },
        { note: 'dir', description: 'Muestra las directorios hijos' },
        { note: 'mkdir', description: 'Crear directorio' },
        { note: 'cls', description: 'Limpiar consola' },
        { note: 'vs -v', description: 'Versión de Visual Studio' },
        { note: 'git -v', description: 'Versión de git' },
        { note: 'node -v', description: 'Versión de Node.js' }
    ];

   
    const consoleNotesSection = createSection('Notas Consola', consoleNotes, true);
    main.appendChild(consoleNotesSection);

    
    const vsNotes = [
        { note: 'Abrir IntelliSense', description: 'Ctrl + Ñ para abrir IntelliSense y obtener sugerencias de código.' },
        { note: 'Apertura rápida de archivos', description: 'Ctrl + T para abrir rápidamente cualquier archivo en el proyecto.'}
    ];

    
    const vsNotesSection = createSection('Notas Visual Studio', vsNotes, true);
    main.appendChild(vsNotesSection);

    
    const gitHubCommands = [
        { command: 'git clone', description: 'Clonamos el repositorio remoto debe ser el nuestro' },
        { command: 'git fetch', description: 'Compara mi último commit con el de la rama remota' },
        { command: 'git pull', description: 'Trae los cambios desde la rama remota' },
        { command: 'git push', description: 'Sube mis cambios desde la rama remota' }
    ];

    
    const gitHubCommandsSection = createSection('Comandos de GitHub', gitHubCommands);
    main.appendChild(gitHubCommandsSection);

    
    const gitHubFunctions = [
        { command: 'fork', description: 'Saco una rama desde el repo master' },
        { command: 'sync', description: 'Sincroniza mi rama con la rama master' },
        { command: 'pull requests', description: 'Solicitud de mi rama a la rama master' }
    ];

    
    const gitHubFunctionsSection = createSection('Funciones de GitHub', gitHubFunctions);
    main.appendChild(gitHubFunctionsSection);

    
    function createSection(title, items, isOrdered = false) {
        const section = document.createElement('div');
        const header = document.createElement('header');
        const h3 = document.createElement('h3');
        h3.textContent = title;
        header.appendChild(h3);
        section.appendChild(header);

        const list = document.createElement(isOrdered ? 'ol' : 'ul');
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.command || item.note}: ${item.description}`;
            list.appendChild(li);
        });
        section.appendChild(list);

        return section;
    }
});
