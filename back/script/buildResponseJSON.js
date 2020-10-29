import { transformUrlImage } from "/script/transformUrlImage.js";

//construit le json qui seras renvoyé au front, enleve les element non important du json envoyé par l'api et s'assure que le front recois toujours un json au meme format où il fait un for each directement sur toutes les cartes
export function buildResponseJSON(json) {

}

export function buildResponseAllCarteJSON(json) {
    var newJson = [];

    $.each(json, function (i, set) {
        $.each(set, function (j, carte) {
            newJson.push(carte);
        });
    });

    return newJson;
}