var currCardList = "";

var permNotification = false;

//pas toucher ca register le sw
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
        // Vérifie si la fonctionalité est disponible et si l'utilisateur n'a pas refusé les notifications
        if(window.Notification && window.Notification !== "denied") {
            Notification.requestPermission(perm => {
                if (perm === "granted") {
                    console.log("Notification acceptée");
                    permNotification = true;
                } else {
                    console.log("Notification refusée");
                }
            });
        }
    }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
}

function afficherNotificationRecherche(len) {
    if(permNotification === true) {
        const options = {
            body: "Recherche Terminée, " + len + " cartes trouvées.",
            icon: "images/icons/icon-72x72.png"
        };

        const notif = new Notification("Résultat de la recherche", options);
    }
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

function displayCards(jsonList = currCardList){
    console.log(jsonList);
    var currSort = "name";
    jsonList = sortJSON(jsonList, currSort, true);
    currCardList = jsonList;
    document.getElementById("cartes_container").innerHTML = "";
    console.log(jsonList);
    lenList = jsonList.length;
    cardNbr = 0;
    for(var key in jsonList){
        if(jsonList[key].type != "Enchantment"){
            var elem = document.createElement("img");
            var divElem = document.createElement("div");
            elem.setAttribute("src", jsonList[key].img);
            elem.setAttribute("onClick", "displayTooltip(" + cardNbr + ")");
            divElem.appendChild(elem);
            document.getElementById("cartes_container").appendChild(divElem);
        }else{
            lenList -= 1;
        }
        cardNbr++;
    }
    afficherNotificationRecherche(lenList);
}

function sortJSON(jsonArray, termToSort, boolAsc){
    return jsonArray.sort(function(a,b){
        if (boolAsc) {
            return (a[termToSort] > b[termToSort]) ? 1 : ((a[termToSort] < b [termToSort]) ? -1 : 0);
        } else {
            return (b[termToSort] > a[termToSort]) ? 1 : ((b[termToSort] < a [termToSort]) ? -1 : 0);
        }
    });
}

function displayTooltip(cardNbr){
    document.getElementById("tooltip").style.display="block";
}