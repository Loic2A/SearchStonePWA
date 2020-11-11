import { getCarteByClass } from "/back/script/getCarteByClass.js";
import { getCarteBySet } from "/back/script/getCarteBySet.js";
import { getCarteByType } from "/back/script/getCarteByType.js";
import { getCarteByFaction } from "/back/script/getCarteByFaction.js";
import { getCarteByQuality } from "/back/script/getCarteByQuality.js";
import { getCarteByRace } from "/back/script/getCarteByRace.js";

let args = {};
let callbackGlobal;

//fait une requete sur l'api à partir d'un critère puis filtre le resultat obtenus selon les autres critères
export function getCarteByMultiple(arg, callback) {

    args = arg;
    callbackGlobal = callback;

    var response1 = JSON.parse('{}');

    if (args.classes != null) {
        console.log("coucou classe");
        getCarteByClass(args.classes, trieClasse);
    } else if (args.sets != null) {
        console.log("coucou set");
        getCarteBySet(args.sets, trieSet);
    } else if (args.types != null) {
        console.log("coucou type");
        getCarteByType(args.types, trieType);
    } else if (args.factions != null) {
        console.log("coucou faction");
        getCarteByFaction(args.factions, trieFaction);
    } else if (args.qualities != null) {
        console.log("coucou quality");
        getCarteByQuality(args.qualities, trieQuality);
    } else if (args.races != null) {
        console.log("coucou race");
        getCarteByRace(args.races, trieRace);
    }
}

function trieClasse(response) {
    var res = {};

    $.each(response, function (j, carte) {

        //console.log("coucou each");
        if (carte.sets == args.sets & carte.types == args.types & carte.factions == args.factions & carte.qualities == args.qualities & carte.races == args.races) {
            //console.log("coucou");
            $.extend(true, res, carte)
        }
    });

    callbackGlobal(res);
}

function trieSet(response) {
    var res = {};

    $.each(response, function (i, carte) {
        if (carte.types == args.types & carte.factions == args.factions & carte.qualities == args.qualities & carte.race == args.races) {
            //console.log("coucou");
            $.extend(true, res, carte)
        }
    });

    callbackGlobal(res);
}

function trieType(response) {
    var res = {};

    $.each(response, function (i, carte) {
        if (carte.faction == args.factions & carte.rarity == args.qualities & carte.race == args.races) {
            //console.log("coucou");
            $.extend(true, res, carte)
        }
    });

    callbackGlobal(res);
}

function trieFaction(response) {
    var res = {};

    $.each(response, function (i, set) {
        if (carte.qualities == args.qualities & carte.races == args.races) {
            //console.log("coucou");
            $.extend(true, res, carte)
        }
    });

    callbackGlobal(res);
}

function trieQuality(response) {
    var res = {};

    $.each(response, function (i, carte) {
        if (carte.races == args.races) {
            //console.log("coucou");
            $.extend(true, res, carte)
        }
    });

    callbackGlobal(res);
}

function trieRace(response) {
    callbackGlobal(response);
}