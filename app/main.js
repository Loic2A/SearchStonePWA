//pas toucher ca register le sw
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
}

function switchSearchElement(searchElement){
    activeElement = document.getElementsByClassName('active');
    elementToHide = activeElement[0].id;
    document.getElementById(elementToHide).className = "searchBtn"
    btnToActivate = searchElement + "Btn";
    document.getElementById(btnToActivate).className = "searchBtn active";
    formToHide = elementToHide.slice(0,-3) + "Form";
    document.getElementById(formToHide).style.display = "none";
    formToShow = searchElement + "Form";
    document.getElementById(formToShow).style.display = "block";
}

function submitNameForm(cardName){
    console.log(cardName);
}

function submitClasForm(cardClas){
    console.log(cardClas);
}

function submitSetForm(cardSet){
    console.log(cardSet);
}

function submitTypeForm(cardType){
    console.log(cardType);
}

function submitFactionForm(cardFaction){
    console.log(cardFaction);
}

function submitQualityForm(cardQuality){
    console.log(cardQuality);
}

function submitRaceForm(cardRace){
    console.log(cardRace);
}

function submitAdvForm(clas, set, type, faction, quality, race){
    console.log(clas,  set, type, faction, quality, race);
}