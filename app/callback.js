import {getCarteByName} from "/back/script/getCarteByName.js";
import {getCarteByMultiple} from "/back/script/getCarteByMultiple.js";

var tailleScreen = window.screen.width;
var mobile = false;
if(tailleScreen < 1000){
    mobile = true;
}

$(document).ready(function(){
    $("#submitNameForm").click(function() {
        var name = document.nameForm.name.value.replace(/ /g, "%2520");
        //console.log(name);
        getCarteByName(name, displayCards);
        var tailleDevice =  window.screen.width;
        if(tailleDevice > 1000){
            document.getElementById("searchWrapper").style.display = "none";
        }
    });

    $("#submitAdvForm").click(function() {
        var clas = document.advForm.advClas.value;
        var set = document.advForm.advSet.value;
        var type = document.advForm.advType.value;
        var faction = document.advForm.advFaction.value;
        var quality = document.advForm.advQuality.value;
        var race = document.advForm.advRace.value;
        
        clas ? {} : clas = null;
        set ? {} : set = null;
        type ? {} : type = null;
        faction ? {} : faction = null;
        quality ? {} : quality = null;
        race ? {} : race = null;

        var args ={
            "classes": clas,
            "sets": set,
            "types": type,
            "factions": faction,
            "qualities": quality,
            "races": race
        };

        getCarteByMultiple(args, displayCards);
        if(mobile == false){
            document.getElementById("searchWrapper").style.display = "none";
        }
    });
});