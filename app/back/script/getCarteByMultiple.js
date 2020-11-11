import { getCarteByClass } from "/back/script/getCarteByClass.js";
import { getCarteBySet } from "/back/script/getCarteBySet.js";
import { getCarteByType } from "/back/script/getCarteByType.js";
import { getCarteByFaction } from "/back/script/getCarteByFaction.js";
import { getCarteByQuality } from "/back/script/getCarteByQuality.js";
import { getCarteByRace } from "/back/script/getCarteByRace.js";

let args = {};

//fait une requete sur l'api à partir d'un critère puis filtre le resultat obtenus selon les autres critères
export function getCarteByMultiple(arg) {

    args = arg;

    var response1 = {};

    if (args.classes != null) {
        console.log("coucou classe");
        response1 = getCarteByClass(args.classes, trieClasse);
    } else if (args.sets != null) {
        console.log("coucou set");
        response1= getCarteBySet(args.sets, trieSet);
    } else if (args.types != null) {
        console.log("coucou type");
        response1 = getCarteByType(args.types, trieType);
    } else if (args.factions != null) {
        console.log("coucou faction");
        response1 = getCarteByFaction(args.factions, trieFaction);
    } else if (args.qualities != null) {
        console.log("coucou quality");
        response1 = getCarteByQuality(args.qualities, trieQuality);
    } else if (args.races != null) {
        console.log("coucou race");
        response1 = getCarteByRace(args.races, trieRace);
    }
    console.log(response1);
    return response1;
}

function trieClasse(response) {
    var res = {};

    $.each(response, function (j, carte) {

        console.log("coucou each");
        if (carte.sets == args.sets & carte.types == args.types & carte.factions == args.factions & carte.qualities == args.qualities & carte.races == args.races) {
            console.log("coucou");
            res.push(set);
        }
    });

    return res;
}

function trieSet(response) {
    var res = {};

    $.each(response, function (i, set) {
        if (set.types == args.types & set.factions == args.factions & set.qualities == args.qualities & set.race == args.races) {
            console.log("coucou");
            res.push(set);
        }
    });

    return res;
}

function trieType(response) {
    var res = {};

    $.each(response, function (i, set) {
        if (set.faction == args.factions & set.rarity == args.qualities & set.race == args.races) {
            console.log("coucou");
            res.push(set);
        }
    });

    return res;
}

function trieFaction(response) {
    var res = {};

    $.each(response, function (i, set) {
        if (set.qualities == args.qualities & set.races == args.races) {
            console.log("coucou");
            res.push(set);
        }
    });

    return res;
}

function trieQuality(response) {
    var res = {};

    $.each(response, function (i, set) {
        if (set.qualities == args.qualities & set.races == args.races) {
            console.log("coucou");
            res.push(set);
        }
    });

    return res;
}

function trieRace(response) {
    return response;
}