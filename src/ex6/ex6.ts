/**
 * 
 */
// class Management {
//     service: string;

//     constructor(service: string) {
//         this.service = service;
//     }   


//     send() {
//         console.log("ordre envoyé")
//     }
// }


//     class TopManagement extends Management {
//         askforService() {
//             console.log("service demandé")
//         }
//     }

// let service = new TopManagement("coder");
// service.send();
// service.askforService();


// class TaskBis {
//     private labelTask : string
//     protected description : string
//     private date : Date

//     constructor(labelTask: string, description: string, date: Date){
//         this.labelTask = labelTask;
//         this.description = description;
//         this.date = date;
//     }
// }

// class ItTAsk extends TaskBis {

//     constructor(labelTask: string, description: string, date: Date) {
//         super(labelTask, description, date);
//         console.log(description);
//     }
// }

// let it = new ItTAsk("essai","formation",new Date());

class Boite<T> {
    contenu: T;

    constructor(contenu: T) {
        this.contenu = contenu;
    }

    afficher() {
        console.log(this.contenu);
    }
}

let taskTer: Task = {
    labelTask: "tache 2",
    description: "test",
    days: 3,
    date: new Date()
}


let boiteDeNombre = new Boite(123);
boiteDeNombre.afficher();

let boiteDeTexte = new Boite("Bonjour");
boiteDeTexte.afficher();

let boiteDeTexteTwo = new Boite("Aurevoir");
boiteDeTexteTwo.afficher();

let boiteDobjet = new Boite(taskTer);
boiteDobjet.afficher();
