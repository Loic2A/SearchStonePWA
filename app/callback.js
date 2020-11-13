import {getCarteByName} from "/back/script/getCarteByName.js";
import {getCarteByClass} from "/back/script/getCarteByClass.js";
import {getCarteBySet} from "/back/script/getCarteBySet.js";
import {getCarteByType} from "/back/script/getCarteByType.js";
import {getCarteByFaction} from "/back/script/getCarteByFaction.js";
import {getCarteByQuality} from "/back/script/getCarteByQuality.js";
import {getCarteByRace} from "/back/script/getCarteByRace.js";
import {getCarteByMultiple} from "/back/script/getCarteByMultiple.js";

$(document).ready(function(){
    $("#submitNameForm").click(function() {
        var name = document.nameForm.name.value.replace(/ /g, "%2520");
        console.log(name);
        getCarteByName(name, displayCards);
    });

    $("#submitClasForm").click(function() {
        var clas = document.clasForm.clas.value;
        console.log(clas);
        getCarteByClass(clas, displayCards);
    });

    $("#submitSetForm").click(function() {
        var set = document.setForm.set.value;
        console.log(set);
        getCarteBySet(set, displayCards);
    });

    $("#submitTypeForm").click(function() {
        var type = document.typeForm.type.value;
        console.log(type);
        getCarteByType(type, displayCards);
    });

    $("#submitFactionForm").click(function() {
        var faction = document.factionForm.faction.value;
        console.log(faction);
        getCarteByFaction(faction, displayCards);
    });

    $("#submitQualityForm").click(function() {
        var quality = document.qualityForm.quality.value;
        console.log(quality);
        getCarteByQuality(quality, displayCards);
    });

    $("#submitRaceForm").click(function() {
        var race = document.raceForm.race.value;
        console.log(race);
        getCarteByRace(race, displayCards);
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
    });
});