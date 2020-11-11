import { getCarteByClass } from "/back/script/getCarteByClass.js";
import { getCarteBySet } from "/back/script/getCarteBySet.js";
import { getCarteByType } from "/back/script/getCarteByType.js";
import { getCarteByFaction } from "/back/script/getCarteByFaction.js";
import { getCarteByQuality } from "/back/script/getCarteByQuality.js";
import { getCarteByRace } from "/back/script/getCarteByRace.js";

//fait une requete sur l'api à partir d'un critère puis filtre le resultat obtenus selon les autres critères
export function getCarteByMultiple(args) {
    var response1 = {};
    if (args.classes != null) {
        console.log("coucou classe");
        $.when(getCarteByClass(args.classes)).done(function (response) {
            $.each(response, function (j, carte) {
                console.log("coucou each");
                if (carte.sets == args.sets & carte.types == args.types & carte.factions == args.factions & carte.qualities == args.qualities & carte.races == args.races) {
                    console.log("coucou");
                    response1.push(set);
                };
            });
        });
    }
    else if (args.sets != null) {
        Response = getCarteBySet(args.sets);
        $.each(Response, function(i, set){
            if (set.types == args.types & set.factions == args.factions & set.qualities == args.qualities & set.race == args.races)
                console.log("coucou");
                Response1.push(set);
        });
    }
    else if (args.types != null) {
        Response = getCarteByType(args.types);
        console.log("coucou");
        $.each(Response, function (i, set) {
            console.log("coucou");
            console.log(set);
            if (set.faction == args.factions & set.rarity == args.qualities & set.race == args.races) {
                console.log("coucou");
                Response1.push(set);
            }
                
        });
    }
    else if (args.factions != null) {
        Response = getCarteByFaction(args.factions);
        $.each(Response, function (i, set){
            if (set.qualities == args.qualities & set.races == args.races)
                console.log("coucou");
                Response1.push(set);
        });
    }
    else if (args.qualities != null) {
        Response = getCarteByQuality(args.qualities);
        $.each(Response, function (i, set){
            if (set.races == args.races)
                console.log("coucou");
                Reponse.push(set);
        });
    }
    else if (args.races != null) {
        Response1 = getCarteByRace(args.races);
    }
    console.log(response1);
    return response1;
}