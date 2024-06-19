// Définition d'une interface pour les tâches
// interface Task {
//     labelTask: string;       // Le libellé de la tâche
//     description?: string;    // La description de la tâche (facultatif)
//     days: number;            // Le nombre de jours associés à la tâche
//     date: Date;              // La date de création de la tâche
// }

// Création d'une première tâche
let taskFor: Task = {
    labelTask: "tache 1",
    description: "test",
    days: 7,
    date: new Date()          // Date actuelle
}

// Création d'une deuxième tâche
let taskFive: Task = {
    labelTask: "tache 2",
    description: "test",
    days: 3,
    date: new Date()          // Date actuelle
}

// Création d'une troisième tâche
let taskSix: Task = {
    labelTask: "tache 3",
    description: "test",
    days: 10,
    date: new Date()          // Date actuelle
}

// // Initialisation d'une liste de tâches
// let taskListTwo: Array<Task> = [];
// taskListTwo.push(taskFor);       // Ajout de la première tâche à la liste
// taskListTwo.push(taskFive);       // Ajout de la deuxième tâche à la liste
// taskListTwo.push(taskSix);     // Ajout de la troisième tâche à la liste


// let totalSomme: number = 0;

// for (let task of taskListTwo) {
//     // Si le nombre de jours de la tâche est supérieur à 4
//     if (task.days > 4) {
//         console.log(task.date);         // Affiche la date de la tâche
//         console.log(task.days);         // Affiche le nombre de jours
//         console.log(task.description);  // Affiche la description
//         console.log(task.labelTask);    // Affiche le libellé de la tâche

//         totalSomme = somme(totalSomme, task.days); // Additionner le nombre de jours à totalSomme

//     }
// }


// function somme(a: number, b: number): number {
// return a + b;
// }

// console.log('Total des jours des tâches > 4 jours:', totalSomme);


const tasks = [taskFor, taskFive, taskSix];

const taskResult = tasks.filter((task) =>  task.days > 4);

console.log(taskResult);


const initialValue = 0;
const sumWithInitial = taskResult.reduce(
  (accumulator, task) => accumulator + task.days,
  initialValue,
);



console.log(sumWithInitial);

const taskResult2 = tasks.map((taskResult) => {
    return taskResult.days * 2;
});

console.log(taskResult2);





taskResult.forEach((task) => task.days = task.days * 2);

taskResult.forEach((task) => console.log(task.days));





