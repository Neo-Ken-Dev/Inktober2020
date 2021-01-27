
    const reponses= [
        "Ring",
        "Mindless",
        "Bait",
        "Freeze",
        "Build",
        "Husky",
        "Enchanted",
        "Frail",
        "Swing",
        "Pattern",
        "Snow",
        "Dragon",
        "Ash",
        "Overgrown",
        "Legend",
        "Wild",
        "Ornement",
        "Misfit",
        "Sling",
        "Tread",
        "Treasure",
        "Ghost",
        "Ancient",
        "Dizzy",
        "Tasty",
        "Dark",
        "Coat",
        "Ride",
        "Injured",
        "Catch",
        "Ripe"
    ];
    const reponsesFR= [
        "Ring",
        "Idiot",
        "Appât",
        "Blocage",
        "Construire",
        "Husky",
        "Enchanté",
        "Fragile",    
        "Balancer",
        "Motif",
        "Neige",
        "Dragon",
        "Sacha",
        "Envahi",
        "Légende",
        "Sauvage",
        "Bibelot",
        "Inadapté",
        "Fronde",
        "Rainure",
        "Trésor",
        "Fantôme",
        "Antique",
        "Vertige",
        "Délicieux",
        "Noir",
        "Manteau",
        "Monter",
        "Blessé",
        "Capture",
        "Prêt",
        
    ];

let score=0;
let questionActuelle=0;
let langageEnglish = true;

function startEnglish() {
    buildReponses()
    langageEnglish=true;
    htmlSet('accueil','');
    document.getElementById('image-frame').style.display = 'block'; 
    document.getElementById('response-frame').style.display = 'block';
    
    document.getElementById('bonneReponse').style.display = 'block'; 
    document.getElementById('mauvaiseReponse').style.display = 'block'; 
}

function startFrench() {
    buildReponsesFR()
    langageEnglish=false;
    htmlSet('accueil','');
    document.getElementById('image-frame').style.display = 'block'; 
    document.getElementById('response-frame').style.display = 'block';
   
    document.getElementById('bonneReponse').style.display = 'block'; 
    document.getElementById('mauvaiseReponse').style.display = 'block';
}

function buildReponses() {
    let reponsesPossibles = [reponses[questionActuelle]];

    while (reponsesPossibles.length < 5) {
        let aRandomNumb = randomNumberBetween1and31();
        if (! reponsesPossibles.includes( reponses[aRandomNumb-1] ) ) {
            reponsesPossibles.push(reponses[aRandomNumb-1])
        }
    }
    
    reponsesPossibles.sort()

    let html =
        '<span><button type="button" class="clio_button" onclick="reponse(\''+ reponsesPossibles[0] +'\')" >'+ reponsesPossibles[0] +'</button></span>' +
        '<span><button type="button" class="clio_button" onclick="reponse(\''+ reponsesPossibles[1] +'\')" >'+ reponsesPossibles[1] +'</button></span>' +
        '<span><button type="button" class="clio_button" onclick="reponse(\''+ reponsesPossibles[2] +'\')" >'+ reponsesPossibles[2] +'</button></span>' +
        '<span><button type="button" class="clio_button" onclick="reponse(\''+ reponsesPossibles[3] +'\')" >'+ reponsesPossibles[3] +'</button></span>' +
        '<span><button type="button" class="clio_button" onclick="reponse(\''+ reponsesPossibles[4] +'\')" >'+ reponsesPossibles[4] +'</button></span>' ;
    
    htmlSet('response-frame', html);

    let pic = questionActuelle+1;
    let htmlImage = '<img src="images/'+ pic +'.png" id="image">';
    htmlSet('image-frame', htmlImage);
}


function buildReponsesFR() {
    let reponsesPossibles = [reponsesFR[questionActuelle]];
    
    while (reponsesPossibles.length < 5) {
        let aRandomNumb = randomNumberBetween1and31();
        if (! reponsesPossibles.includes( reponsesFR[aRandomNumb-1] ) ) {
            reponsesPossibles.push(reponsesFR[aRandomNumb-1])
        }
    }
    
    reponsesPossibles.sort()

    let html =
        '<span><button type="button" class="clio_button" onclick="reponse(\''+ reponsesPossibles[0] +'\')" >'+ reponsesPossibles[0] +'</button></span>' +
        '<span><button type="button" class="clio_button" onclick="reponse(\''+ reponsesPossibles[1] +'\')" >'+ reponsesPossibles[1] +'</button></span>' +
        '<span><button type="button" class="clio_button" onclick="reponse(\''+ reponsesPossibles[2] +'\')" >'+ reponsesPossibles[2] +'</button></span>' +
        '<span><button type="button" class="clio_button" onclick="reponse(\''+ reponsesPossibles[3] +'\')" >'+ reponsesPossibles[3] +'</button></span>' +
        '<span><button type="button" class="clio_button" onclick="reponse(\''+ reponsesPossibles[4] +'\')" >'+ reponsesPossibles[4] +'</button></span>' ;
    
    htmlSet('response-frame', html);

    let pic = questionActuelle+1;
    let htmlImage = '<img src="images/'+ pic +'.png" id="image">';
    
    htmlSet('image-frame', htmlImage);
}

function reponse(rep) {

    if (langageEnglish) {
        if (rep === reponses[questionActuelle]) 
        score++
        updateScore(score, questionActuelle);
        questionActuelle++;

        if (questionActuelle == reponses.length) {
            endGame();
        } else {
            if (langageEnglish) {

                buildReponses(questionActuelle)
            } else {

                buildReponsesFR(questionActuelle)
            }
        }

    } else {
        if (rep === reponsesFR[questionActuelle]) 
        score++
        updateScore(score, questionActuelle);
        questionActuelle++;

        if (questionActuelle == reponses.length) {
            endGame();
        } else {
            if (langageEnglish) {
                buildReponses(questionActuelle)
            } else {
                buildReponsesFR(questionActuelle)
            }
            }

    }
}

function updateScore (score, questionActuelle) {
    let bonnesReponses;
    let mauvaiseReponses;

    if (langageEnglish) {
        bonnesReponses = 'Correct answers: <br> <br> <br>' + '<span class="score-corect"> ' + score + '</span>';
        mauvaiseReponses = 'Wrong answers: <br> <br> <br>'+ '<span class="score-wrong"> ' + (questionActuelle+1 - score) + '</span>';
    } else {
        bonnesReponses = 'Bonnes Réponses: <br> <br> <br>'+ '<span class="score-corect"> ' + score + '</span>';
        mauvaiseReponses = 'Mauvaises Réponses: <br> <br> <br>'+ '<span class="score-wrong"> ' + (questionActuelle+1 - score) + '</span>';
    }
    htmlSet('bonneReponse', bonnesReponses);
    htmlSet('mauvaiseReponse', mauvaiseReponses);
}


function htmlSet(id, value) {
    document.getElementById(id).innerHTML = value;
}

function randomNumberBetween1and31() {
    return Math.floor(Math.random() * 31) + 1
}

function endGame() {
    let scorPourcent = Math.round( (score * 100) / 31);
    questionActuelle = 0;
    document.getElementById('image-frame').style.display = 'none'; 
    document.getElementById('response-frame').style.display = 'none'; 
    document.getElementById('bonneReponse').style.display = 'none'; 
    document.getElementById('mauvaiseReponse').style.display = 'none'; 
        
    var endHtml = '<div id="finJeu"> '+
                    '<div id="Inktober"> '+
                        '<p> Inktober 2019 </p> '+
                        '<div id=""> Your score: ' + score + '/31</div> '+
                        '<div id="pourcentage">'+ scorPourcent +' %</div> '+
                    '</div> ';
    htmlSet('accueil', endHtml)
    score = 0;
    bonnesReponses = 0;
    mauvaiseReponses = 0;
}