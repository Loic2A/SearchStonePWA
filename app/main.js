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

function submitAdvForm(clas, set, type, faction, quality, race){
    console.log(clas,  set, type, faction, quality, race);
}

function submitSimpleForm(cardName){
    console.log(cardName);
}