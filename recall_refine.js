dict_ = { 
 english: "Welcome",
 czech: "Vitejte",
 danish: "Velkomst",
 dutch: "Welkom",
 estonian: "Tere tulemast",
 finnish: "Tervetuloa",
 flemish: "Welgekomen",
 french: "Bienvenue",
 german: "Willkommen",
 irish: "Failte",
 italian: "Benvenuto",
 latvian: "Gaidits",
 lithuanian: "Laukiamas",
 polish: "Witamy",
 spanish: "Bienvenido",
 swedish: "Valkommen",
 welsh: "Croeso",
}

function greet(lang){
   
    for(let language in dict_){
        if (language == lang){
            greeting = dict_[language]
            return greeting
        }
    }
    return "Welcome"
}

console.log(greet("swedish"))