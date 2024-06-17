// Définition d'une interface pour les tâches
interface Task {
    labelTask: string;       // Le libellé de la tâche
    description?: string;    // La description de la tâche (facultatif)
    days: number;            // Le nombre de jours associés à la tâche
    date: Date;              // La date de création de la tâche
}

// Création d'une première tâche
let taskOne: Task = {
    labelTask: "tache 1",
    description: "test",
    days: 7,
    date: new Date()          // Date actuelle
}

// Création d'une deuxième tâche
let taskTwo: Task = {
    labelTask: "tache 2",
    description: "test",
    days: 3,
    date: new Date()          // Date actuelle
}

// Création d'une troisième tâche
let taskThree: Task = {
    labelTask: "tache 3",
    description: "test",
    days: 10,
    date: new Date()          // Date actuelle
}

// Initialisation d'une liste de tâches
let taskList: Array<Task> = [];
taskList.push(taskOne);       // Ajout de la première tâche à la liste
taskList.push(taskTwo);       // Ajout de la deuxième tâche à la liste
taskList.push(taskThree);     // Ajout de la troisième tâche à la liste

// Boucle sur chaque tâche de la liste
for (let task of taskList) {
    // Si le nombre de jours de la tâche est supérieur à 4
    if (task.days > 4) {
        console.log(task.date);         // Affiche la date de la tâche
        console.log(task.days);         // Affiche le nombre de jours
        console.log(task.description);  // Affiche la description
        console.log(task.labelTask);    // Affiche le libellé de la tâche
    }
}






