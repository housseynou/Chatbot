let user = document.getElementById("input");
user.addEventListener('keydown', function(e){
    if(e.code === "Enter"){
        let userValue = user.value;
        user.value = "";
        document.getElementById('rep').innerHTML = reponse(userValue);
       // console.log(`I typed '${userValue}'`)
    }
})

function reponse(){}

const botWelcom = [
    "Hey mon ami(e)", 
    "Bienvenue cher humain",
    "Oh! Mon ami! Bon retour", 
    "Je te reconnais toi",
    "Comment ça va mon ami"
    ];

const botSalut = "Est-ce que tout vas bien aujourd'hui";

const botIfYes = [
    "Cool! Tu as quelques choses à me raconter", 
    "Bien! Je parie que tu as pleins de trucs sympats à me raconter", 
    "Parfait. Alors, quoi de neuf?" 
];

const botIfNo = [
    "Désolé pour toi. Je ne sais pas quoi dire de plus",
    "Reviens me voir quand tu sera de bonne humeur",
    "Je ne suis pas doué pour les consolation. Je ne suis qu'un robot"
];

const botConfused = "Je ne comprends pas. Peux-tu répéter stp?";

const botFurious = "Mec, tu es sûr que sais lire?",

const botBye = "Bye";