const { json } = require("express");
var currCardList = "";

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

function displayCards(jsonList = currCardList){
    currCardList = jsonList;
    console.log(jsonList);
    var currSort = "name";
    jsonList = sortJSON(jsonList, currSort, true);
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

function sortJSON(jsonArray, termToSort, boolAsc){
    return jsonArray.sort(function(a,b){
        if (boolAsc) {
            return (a[termToSort] > b[termToSort]) ? 1 : ((a[termToSort] < b [termToSort]) ? -1 : 0);
        } else {
            return (b[termToSort] > a[termToSort]) ? 1 : ((b[termToSort] < a [termToSort]) ? -1 : 0);
        }
    });
}