import { transformUrlImage } from "/back/script/transformUrlImage.js";
//fait une requete sur l'api à partir d'un critère puis filtre le resultat obtenus selon les autres critères
export function getCarteByMultiple(args) {
    if (args[0] != null) {
        Response = getCarteByClass(args.classes);
        $.each(Response){
            if (Response.sets == args.sets & Response.types == args.types & Response.factions == args.factions & Response.qualities == args.qualities & Response.races == args.races)
                Response1 = Response;
        }
        return Response1;
    }
    else if (args[1] != null) {
        Response = getCarteBySet(args.sets);
        $.each(Response){
            if (Response.types == args.types & Response.factions == args.factions & Response.qualities == args.qualities & Response.races == args.races)
                Response1 = Response;
        }
        return Response1;
    }
    else if (args[2] != null) {
        Response = getCarteByType(args.types);
        $.each(Response){
            if (Response.factions == args.factions & Response.qualities == args.qualities & Response.races == args.races)
                Response1 = Response;
        }
        return Response1;
    }
    else if (args[3] != null) {
        Response = getCarteByFaction(args.factions);
        $.each(Response){
            if (Response.qualities == args.qualities & Response.races == args.races)
                Response1 = Response;
        }
        return Response1;
    }
    else if (args[4] != null) {
        Response = getCarteByQuality(args.qualities);
        $.each(Response){
            if (Response.races == args.races)
                Response1 = Response;
        }
        return Response1;
    }
    else if (args[5] != null) {
        Response = getCarteByRace(args.races);
        return Response;
    }
}