const { json } = require("express");

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

function displayCards(jsonList){
    document.getElementById("cartes_container").innerHTML = "";
    console.log(jsonList);
    for(var key in jsonList){
        if(jsonList[key].type != "Enchantment"){
            var elem = document.createElement("img");
            var divElem = document.createElement("div");
            elem.setAttribute("src", jsonList[key].img);
            divElem.appendChild(elem);
            document.getElementById("cartes_container").appendChild(divElem);
        }
    }
}