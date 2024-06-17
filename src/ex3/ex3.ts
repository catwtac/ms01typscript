interface Task1 {
    labelTask: string;
    description?: string;
    date: Date;
}

let task: Task1 = {
    labelTask: "tache 1",
    description: "test",
    date: new Date()

};
console.log(task);

let valeur: any = "17/06/2024";
let date: Date = valeur as Date;
console.log(date);