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

    if (args.sets != null) {
        response = response.filter(function (response) {
            return response.cardSet == args.sets;
        });
    }
    if (args.types != null) {
        response = response.filter(function (response) {
            return response.type == args.types;
        });
    }
    if (args.factions != null) {
        response = response.filter(function (response) {
            return response.faction == args.factions;
        });
    }
    if (args.qualities != null) {
        response = response.filter(function (response) {
            return response.rarity == args.qualities;
        });
    }
    if (args.races != null) {
        response = response.filter(function (response) {
            return response.race == args.races;
        });
    }

    callbackGlobal(response);
}

function trieSet(response) {
    var res = {};

    if (args.types != null) {
        response = response.filter(function (response) {
            return response.type == args.types;
        });
    }
    if (args.factions != null) {
        response = response.filter(function (response) {
            return response.faction == args.factions;
        });
    }
    if (args.qualities != null) {
        response = response.filter(function (response) {
            return response.rarity == args.qualities;
        });
    }
    if (args.races != null) {
        response = response.filter(function (response) {
            return response.race == args.races;
        });
    }

    callbackGlobal(response);
}

function trieType(response) {
    var res = {};

    if (args.factions != null) {
        response = response.filter(function (response) {
            return response.faction == args.factions;
        });
    }
    if (args.qualities != null) {
        response = response.filter(function (response) {
            return response.rarity == args.qualities;
        });
    }
    if (args.races != null) {
        response = response.filter(function (response) {
            return response.race == args.races;
        });
    }

    callbackGlobal(response);
}

function trieFaction(response) {
    var res = {};

    if (args.qualities != null) {
        response = response.filter(function (response) {
            return response.rarity == args.qualities;
        });
    }
    if (args.races != null) {
        response = response.filter(function (response) {
            return response.race == args.races;
        });
    }
    callbackGlobal(response);
}

function trieQuality(response) {

    if (args.races != null) {
        response = response.filter(function (response) {
            return response.race == args.races;
        });
    }

    callbackGlobal(response);
}

function trieRace(response) {
    callbackGlobal(response);
}