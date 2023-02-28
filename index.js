    console.clear();
    const chalk=require("chalk");
    const prompt = require('prompt-sync')({ sigint: true });


    console.log(chalk.bgBlack.bold`                                 SCHRUGMAN                                  `);
    console.log(chalk.bgBlue(`                               ©Manuella Meyer                              `));


    // Die Büchertitel und Filmtitel als Arrays
    const bookTitle = ["Harry Potter", "To Kill a Mockingbird", "The Great Gatsby", "Pride and Prejudice"];
    const filmTitle = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Forrest Gump", "Inception"];

    console.log(chalk.bgBlue(`                                                                            `));

    const playerName = prompt("Willkommen bei Schrugman!!! Wie heißt du? ");
    console.log();
    console.log("Hallo " + playerName + "! Willkommen zum Spiel!");
    console.log();

    let category="";

    while (true) {
    let category = prompt(`Möchtest du in der Kategorie "B" für Bücher oder "F" für Filme spielen?  `);
    console.log();
    category = category.toUpperCase();
    if (category === "B" || category === "F") {
        break;
    }
    }

    

    let titleList="";
    if (category === "B" || "b") {
    titleList = bookTitle;
    } else  {
    titleList = filmTitle;
    }
    
    //zufälligen Titel aus der ausgewählten Kategorie
    const secretTitle = titleList[Math.floor(Math.random() * titleList.length)];
    
    //der geheim Titel wird maskiert

    let maskedTitle = "";
    for (let i = 0; i < secretTitle.length; i++) {
        if (secretTitle[i] === " ") {
        maskedTitle += " ";
        } else {
        maskedTitle += "_";
        }
    }


    // Versuche
    let restAttempts = 10;

    // Bereits geratene Buchstaben
    let guessedLetters = [];


    // Spiel Loop
    while (restAttempts > 0 && maskedTitle.includes('_')) {
        // Status anzeigen
        
    console.log(`Aktueller Titel: ${maskedTitle}`);
    console.log(`Bereits geratene Buchstaben: ${guessedLetters.join(', ')}`);
    console.log(`Versuche übrig: ${restAttempts}`);
    console.log(`Noch ${restAttempts} Versuche übrig: ${'¯\\_(:/)_/¯'.slice(0, 10 - restAttempts)}`);
    
        // Buchstaben Eingabe 
        const guess = prompt("Gib einen Buchstaben ein:");

        // ob der Buchstabe schon geraten wurde
        if (guessedLetters.includes(guess)) {
        console.log("Du hast diesen Buchstaben bereits geraten. Versuche es mit einem anderen.");
        
        }
    
        
        // Buchstabe zu den bereits geratenen Buchstaben hinzufügen
        guessedLetters.push(guess);
        console.clear();
    
        // ob der Buchstabe im geheimen Titel enthalten ist
        if (secretTitle.toLowerCase().includes(guess.toLowerCase())) {
        maskedTitle = secretTitle.replace(new RegExp(`[^${guessedLetters.join('')}\\s]`, 'gi'), '_');
        console.log(`Richtig geraten! Der Buchstabe ${guess} kommt im Titel vor.`);
        } else {
        restAttempts--;
        console.log(`Leider falsch geraten. Der Buchstabe ${guess} kommt nicht im Titel vor.`);
        //console.log(`Noch ${restAttempts} Versuche übrig: ${'¯\\_(:/)_/¯'.slice(0, 10 - restAttempts)}`);
    
        }

    

    }
    // Das Spiel ist zu Ende
    if (maskedTitle.includes('_')) {
        console.clear();
        console.log(`Du hast verloren! Der geheime Titel war: ${secretTitle}`);
        
    } else {
        console.clear();
        console.log(`Glückwunsch! Du hast den geheimen Titel erraten: ${secretTitle}`);
    }
    





    







    
    //setTimeout(function(){(console.log("GoodBye"))},10000);
