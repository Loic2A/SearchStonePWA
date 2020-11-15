var currCardList = "";
var statusSwitch = false;
var permNotification = false;
var tailleScreen = window.screen.width;
var mobile = false;
if(tailleScreen < 1000){
    mobile = true;
}


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

// Vérifie si la fonctionalité est disponible et si l'utilisateur n'a pas refusé les notifications
if(window.Notification && window.Notification !== "denied") {
    Notification.requestPermission(perm => {
        if (perm === "granted") {
            //console.log("Notification acceptée");
            permNotification = true;
        } else {
            //console.log("Notification refusée");
        }
    });
}


$(document).ready(function(){
    $("#tooltipWrapper").click(function(event){
        // if(mobile == false){
            document.getElementById("tooltipWrapper").style.display = "none";
        // }
    });
});
$(document).ready(function(){
    $("#tooltip").click(function(event){
        event.stopPropagation();
    });
});
$(document).ready(function(){
    $("#searchWrapper").click(function(event){
        // if(mobile == false){
            document.getElementById("searchWrapper").style.display = "none";
        // }
    });
});
$(document).ready(function(){
    $("#searchTools").click(function(event){
        event.stopPropagation();
    });
});
$(document).ready(function(){
    document.getElementById("searchWrapper").style.display = "flex";
});

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

function displaySearch(){
    document.getElementById("searchWrapper").style.display="flex";
    console.log("test");
}

function displayCards(jsonList = currCardList){
    //console.log(jsonList);
    var currSort = "cost";
    jsonList = sortJSON(jsonList, currSort, false);
    currCardList = jsonList;
    document.getElementById("cartes_container").innerHTML = "";
    //console.log(jsonList);
    lenList = jsonList.length;
    cardNbr = 0;
    for(var key in jsonList){
        if(jsonList[key].type != "Enchantment"){
            var elem = document.createElement("img");
            var divElem = document.createElement("div");
            elem.setAttribute("src", jsonList[key].img);
            elem.setAttribute("class", "cardImage");
            elem.setAttribute("onClick", "displayTooltip(" + cardNbr + ")");
            var randRotation = Math.random() * 15 - 7.5;
            elem.setAttribute("style", "transform: rotate(" + randRotation + "deg);");
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
            return (b[termToSort] > a[termToSort]) ? 1 : ((b[termToSort] < a [termToSort]) ? -1 : 1);
        }
    });
}

function displayTooltip(cardNbr){
    var tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = "";
    var image = document.createElement("img");
    var allData = document.createElement("div");
    image.setAttribute("src", currCardList[cardNbr].img);
    allData.setAttribute("id", "allData");
    allData.appendChild(createLine(cardNbr, "name", "Nom"));
    allData.appendChild(createLine(cardNbr, "type", "Type"));
    if(currCardList[cardNbr]["text"] != undefined){
        allData.appendChild(createLine(cardNbr, "text", "Texte"));
    }
    if(currCardList[cardNbr]["cost"] != undefined){
        allData.appendChild(createLine(cardNbr, "cost", "Coût"));
    }
    if(currCardList[cardNbr]["attack"] != undefined){
        allData.appendChild(createLine(cardNbr, "attack", "Attaque"));
    }
    if(currCardList[cardNbr]["health"] != undefined){
        allData.appendChild(createLine(cardNbr, "health", "Vie"));
    }
    tooltip.appendChild(image);
    tooltip.appendChild(allData);
    document.getElementById("tooltipWrapper").style.display="flex";
}

function createLine(cardNbr, cardInfo, infoTitle){
    var title = document.createElement("div");
    title.setAttribute("class", "infoTitle");
    var info = document.createElement("div");
    info.setAttribute("class", "info");
    title.innerHTML = infoTitle+": ";
    if (cardInfo != "text"){
        info.innerHTML = currCardList[cardNbr][cardInfo];
    }else{
        info.innerHTML = currCardList[cardNbr][cardInfo].replace(/\\n/g, '<br/>');
    }
    var data = document.createElement("div");
    data.setAttribute("class", "data");
    data.appendChild(title);
    data.appendChild(info);
    return data;
}

function switchSearch(){
    if(statusSwitch == false){
        document.getElementById("advForm").style.display = "";
        document.getElementById("containerInputSearchByName").style.display = "none";   
        document.getElementById("submitNameForm").style.display = "none";     
        statusSwitch = true;
        console.log(statusSwitch);
    }    
    else{
        document.getElementById("advForm").style.display = "none";
        document.getElementById("containerInputSearchByName").style.display = "";
        document.getElementById("submitNameForm").style.display = "";
        statusSwitch = false;
        console.log(statusSwitch);
    }
}